import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Form, Button, Row, Checkbox, Input, message } from 'antd';
import {
  getModuleDefinitions,
  getCreditReportConfigs,
  getWorkFlowTemplate,
  saveWorkflowModule,
  addWorkflow,
  configReviewModules,
  saveCreditReportConfigs,
} from '~/services/sys-manage';
import Graph from './graph';
import ControlForm, { renderItem } from '~/components/control-form/index';
import ModalContainer from '~/components/modal-container/index';
import { InvokerGenerator, InvokeStatus } from '~/utils/serviceInvoke';
import transformDifinition from './tool/transformDifinition';
import { AttributesIdMap } from '~/components/node-config/index';
import { withRouter } from 'react-router';

const ServiceInvoker = InvokerGenerator(InvokeStatus);
const getSettings = ({ checked }) => {
  return [
    {
      key: 'checked',
      component: [
        Checkbox,
        {
          children: formatMessage({ id: 'flow-path-become-formwork-create' }),
        },
      ],
      decorator: {
        valuePropName: 'checked',
      },
    },
    {
      key: 'templateName',
      component: [
        Input,
        {
          placeholder: formatMessage({ id: 'enter-the-module-name' }),
        },
      ],
      hidden: !checked,
      decorator: {
        rules: [{ required: true, message: formatMessage({ id: 'module-name-is-required' }) }],
      },
    },
  ];
};

@withRouter
export default class extends Component {
  state = {};

  editorRef = React.createRef();
  templateModalRef = React.createRef();

  async componentDidMount() {
    const { versionId } = this.props;
    const { result: definitions } = await getModuleDefinitions(versionId);
    const { result: reports } = await getCreditReportConfigs(versionId);
    const reportMap = (reports || []).reduce((mapInfo, report) => {
      mapInfo[report.type] = report;
      return mapInfo;
    }, {});
    this.setState({
      definitions,
      // nodeConfigs: parseNodeConfig(definitions),
      reports,
      reportMap,
    });
  }

  renderFields = (fields, formInstance) => {
    this.formRef = formInstance;
    const formItems = fields.map(field => {
      const { key, props } = field;
      return (
        <Form.Item key={key} {...props}>
          {renderItem(field, formInstance)}
        </Form.Item>
      );
    });
    return <Form layout="inline">{formItems}</Form>;
  };

  doAction = async ({ checked, templateName }, cb) => {
    this.setState({
      checkError: null,
    });

    const { versionId, projectInfo } = this.props;
    const { productCode, creditReviewType } = projectInfo;
    const graphData = this.editorRef.current.getGraphDataWithControlPoints();

    const uniqueId = `${productCode}-${versionId}-${new Date().getTime()}`;
    let backendDifinitions;
    let candidatePos;
    try {
      [candidatePos, backendDifinitions] = transformDifinition({ graphData, creditReviewType });
    } catch (e) {
      this.setState({
        checkError: e.message,
      });
    }
    if (!backendDifinitions) {
      return;
    }
    const { result: data } = await getWorkFlowTemplate();
    if (checked && data && data.length) {
      if (data.find(d => d.workflowModuleName === templateName)) {
        this.setState({
          modalData: {
            title: formatMessage({ id: 'template-already-exists' }),
            desc: `${formatMessage({ id: 'identical-masterplate-the-same' })}${templateName}${formatMessage({
              id: 'please-dont-repeat-do',
            })}`,
          },
        });
        this.templateModalRef.current.showModal();
        return;
      }
    }
    const { result } = await addWorkflow({
      definition: JSON.stringify(backendDifinitions),
      candidatePos,
      name: uniqueId,
      productCode,
      versionId,
      workFlowId: uniqueId,
    });
    if (!result || !result.id) {
      message.error(formatMessage({ id: 'failed-to-save-workflow' }));
      return;
    }

    // 当前不同人审岗位模块使用相同配置，未来将支持不同人审岗位不同模块配置
    let modulesList = [];
    let workflowModuleName = '';
    // 保存模版时，不保存模块信息
    const nodesInfo =
      graphData.nodes &&
      graphData.nodes.map(node => {
        const nodeWithoutApprove = {
          ...node,
        };
        if (node.type === 'approve') {
          if (!node._val) {
            node._val = {};
          } else {
            let modulesData = {};
            let attribute = node._val['attribute'];
            let name = node._val['name'].replace(/\s+/g, '');
            const nodeId = AttributesIdMap[attribute] + name; // 岗位+名称
            modulesData = {
              ...node._val,
              nodeId,
            };
            modulesList.push(modulesData);
            nodeWithoutApprove._val = {
              ...node._val,
              reports: [],
              modules: {},
            };
          }
        }
        return nodeWithoutApprove;
      });

    console.log(modulesList);

    await Promise.all(
      modulesList.map(async moduleItem => {
        const { reports, modules = {} } = moduleItem || {};
        const nodeId = moduleItem.nodeId;

        // 三方数据报告
        const reportData = (reports || []).map(report => ({
          type: report,
          authRequired: false,
          nodeId,
        }));

        // const { result: definitions } = await getModuleDefinitions(versionId, nodeId); //需要增加nodeId
        // const { workflowNodes } = definitions;

        // const nodeConfigs = (workflowNodes || []).map(workflow => ({
        //   nodeId: nodeId,
        //   visible: true,
        //   editable: nodeId !== 'DEFAULT_QUERY_MODULE_CONFIG',
        // }));

        const nodeConfigs = [
          {
            nodeId: nodeId,
            visible: true,
            editable: nodeId !== 'DEFAULT_QUERY_MODULE_CONFIG',
          },
        ];

        const moduleData = Object.keys(modules).map(code => {
          const { config, fieldCode } = modules[code];
          return {
            code,
            configItems: fieldCode
              ? {
                  [fieldCode]: config,
                }
              : {},
            nodeConfigs,
          };
        });

        workflowModuleName = templateName || uniqueId;
        await saveCreditReportConfigs(versionId, reportData);
        await configReviewModules(versionId, moduleData);
      })
    );

    await saveWorkflowModule(versionId, {
      workflowModuleDefine: JSON.stringify({
        ...graphData,
        nodes: nodesInfo,
      }),
      workflowModuleName,
      isExist: checked ? 1 : 0,
    });

    if (checked) {
      this.setState({
        modalData: {
          title: formatMessage({ id: 'template-saved-successfully' }),
          desc: `${formatMessage({ id: 'flow-path-preserve-the-process' })}${workflowModuleName}`,
        },
      });
      this.templateModalRef.current.showModal();
    } else {
      message.success(formatMessage({ id: 'save-successfully' }));
    }
    sessionStorage.removeItem('editor-cache-data');
    typeof cb === 'function' && cb();
  };
  onSave = cb => {
    this.formRef.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      try {
        await ServiceInvoker(this, this.doAction, values, cb);
      } catch (e) {
        message.error(formatMessage({ id: 'save-failed' }));
      }
    });
  };

  nextStep = () => {
    this.onSave(() => this.redirectNext());
  };

  redirectNext = () => {
    const { projectId, versionId, versionIndex, mode, isExamining } = this.props;
    this.props.history.push({
      pathname: `/systemManage/v2/dictionary/${mode}/project/${projectId}/id/${versionId}/version/${versionIndex}/${isExamining}`,
    });
  };
  render() {
    const { definitions, reports, reportMap, checkError, modalData = {} } = this.state;
    const { projectId, versionId, dashboardData, mode, initialValue } = this.props;
    const passProps = {
      definitions,
      reports,
      reportMap: reportMap || {},
      projectId,
      versionId,
      dashboardData,
    };

    const { loading } = this.state[InvokeStatus] || {};
    return (
      <div>
        <Graph ref={this.editorRef} passProps={passProps} mode={mode} />
        <div style={{ margin: '-3em 0 3em' }}>
          {mode === 'edit' ? (
            <>
              <Row style={{ marginBottom: '1.5em' }}>
                <ControlForm getSettings={getSettings} data={initialValue} render={this.renderFields}></ControlForm>
              </Row>
              <Row>
                <p style={{ color: 'red' }}>{checkError || ''}</p>
                <Button type="primary" loading={loading} onClick={() => this.onSave()}>
                  {formatMessage({ id: 'save-draft' })}
                </Button>
                <Button type="link" disabled={loading} onClick={this.nextStep}>
                  {formatMessage({ id: 'next-step-1' })}
                </Button>
              </Row>
              <ModalContainer title={modalData.title} ref={this.templateModalRef}>
                <p>{modalData.desc}</p>
              </ModalContainer>
            </>
          ) : (
            <Row>
              <Button type="link" onClick={this.redirectNext}>
                {formatMessage({ id: 'next-step-1' })}
              </Button>
            </Row>
          )}
        </div>
      </div>
    );
  }
}
