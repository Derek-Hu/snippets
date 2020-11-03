import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Tooltip, Icon, Row } from 'antd';
import v2Style from './v2.module.less';
import ProcessEditor from './graph-container';
import { getVersionGraphInfo, getCreditReportConfigs, getModuleDefinitions } from '~/services/sys-manage';
import SwitchTab from './switch-tab';
import { withRouter } from 'react-router';
import { InvokerGenerator, InvokeStatus, StatusDone, ContentWithLoading } from '~/utils/serviceInvoke';
import parseModule from '~/components/node-config/parseModule';
import { AttributesIdMap } from '~/components/node-config/index';

const ServiceInvoker = InvokerGenerator(InvokeStatus);

@withRouter
export default class V2 extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.state = {
      [InvokeStatus]: StatusDone,
    };
  }

  switchTab = toAction => {
    const { mode, projectId, versionId, versionIndex } = this.props;
    if (toAction === mode) {
      return;
    }
    if (this.editorRef && this.editorRef.current) {
      this.editorRef.current.editorRef.current.saveGraphData2Cache();
    }
    this.props.history.replace({
      pathname: `/systemManage/v2/process/${toAction}/project/${projectId}/id/${versionId}/version/${versionIndex}`,
    });
  };

  async componentDidMount() {
    const dashboardData = await this.getDraftGraphData();
    this.setState({
      dashboardData,
    });
  }

  getDraftGraphData = async () => {
    const { mode } = this.props;
    if (mode === 'view') {
      return await this.loadRemoteData();
    }
    const { projectId, versionId } = this.props;
    const cacheDifinition = sessionStorage.getItem('editor-cache-data');
    let cacheData;
    try {
      cacheData = cacheDifinition ? JSON.parse(cacheDifinition) : null;
    } catch (e) {}

    if (cacheData && `${cacheData.projectId}` === `${projectId}` && `${cacheData.versionId}` === `${versionId}`) {
      return cacheData.data;
    } else {
      return await this.loadRemoteData();
    }
  };

  loadAndMerge = async () => {
    const { versionId } = this.props;
    const { result: data } = await getVersionGraphInfo({ versionId });

    let graphData = {};
    if (data && data.workflowModuleDefine) {
      graphData = JSON.parse(data.workflowModuleDefine);
      if (graphData.nodes) {
        await Promise.all(
          graphData.nodes.map(async node => {
            if (node.type === 'approve') {
              if (!node._val) {
                node._val = {};
              } else {
                let name = node._val.name.replace(/\s+/g, '');
                let nodeId = AttributesIdMap[node._val.attribute] + name;
                console.log(nodeId);
                if (nodeId) {
                  let [{ result: reports }, { result: definitions }] = await Promise.all([
                    getCreditReportConfigs(versionId, nodeId),
                    getModuleDefinitions(versionId, nodeId),
                  ]);
                  const { selected: selectedModules } = parseModule(definitions);
                  node._val.reports = (reports || []).filter(report => report.selected).map(report => report.type);
                  node._val.modules = selectedModules;
                }
              }
            }
          })
        );
      }
    }
    return {
      result: graphData,
    };
  };

  loadRemoteData = async () => {
    const { versionId, projectId } = this.props;

    const data = await ServiceInvoker(this, this.loadAndMerge);
    if (data) {
      const original = JSON.stringify({
        projectId,
        versionId,
        data,
      });
      sessionStorage.setItem('editor-cache-data', original);
      sessionStorage.setItem('original-cache-data', original);
      try {
        return data;
      } catch (e) {}
    }
  };
  render() {
    const { projectInfo, projectId, versionId, mode, initialValue, versionIndex, isExamining } = this.props;
    const { dashboardData } = this.state;
    const isView = mode === 'view';
    const invokeStatus = this.state[InvokeStatus];
    return (
      <>
        <Row style={{ padding: '2em 0' }}>
          {isView ? (
            formatMessage({ id: 'project-process' })
          ) : (
            <>
              {formatMessage({ id: 'configuration-process' })}  
              <Tooltip title={formatMessage({ id: 'include-examine-and-approve-module-examine-and-verify' })}>
                <Icon type="question-circle" />
              </Tooltip>
            </>
          )}
        </Row>
        <Row>{isView ? null : <SwitchTab switchTab={this.switchTab} selectedTab={mode} />}</Row>
        <ContentWithLoading invokeStatus={invokeStatus}>
          <div className={v2Style.layout}>
            <div className={v2Style.templateList}>
              <ProcessEditor
                projectInfo={projectInfo}
                projectId={projectId}
                versionId={versionId}
                isExamining={isExamining}
                ref={this.editorRef}
                mode={mode}
                versionIndex={versionIndex}
                dashboardData={dashboardData}
                initialValue={initialValue}
              />
            </div>
          </div>
        </ContentWithLoading>
      </>
    );
  }
}
