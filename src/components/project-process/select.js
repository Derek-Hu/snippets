import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Form, Icon, Row, Col, Button, Tooltip, Typography } from 'antd';
import { getWorkFlowTemplate } from '~/services/sys-manage';
import { withRouter } from 'react-router';
import Template, { BlankTemplate } from './process-template';
import { InvokerGenerator, InvokeStatus, ContentWithLoading } from '~/utils/serviceInvoke';
import ModalContainer from '~/components/modal-container/index';
import ReactDOM from 'react-dom';
import guid from 'uuid/v1';
import v2Style from './v2.module.less';
import G6 from '@antv/g6';
import './node/index';
import './edge/index';
import './behavior/index';
import { GridSettings } from './settings';
import preHandle from './node/pre';
import SwitchTab from './switch-tab';
import { number2Char } from './tool/index';

const { Paragraph } = Typography;
const ServiceInvoker = InvokerGenerator(InvokeStatus);

@Form.create()
@withRouter
export default class extends Component {
  state = {
    selectedId: BlankTemplate.id,
    data: [],
  };

  containerRef = React.createRef();

  switchTab = toAction => {
    const { mode, projectId, versionId, versionIndex } = this.props;
    if (toAction === mode) {
      return;
    }
    this.props.history.replace({
      pathname: `/systemManage/v2/process/${toAction}/project/${projectId}/id/${versionId}/version/${versionIndex}`,
    });
  };

  getDataWithImg = async () => {
    const { result: data } = await getWorkFlowTemplate();
    for (const element of data) {
      try {
        console.log('element.....');
        const definitions = JSON.parse(element.workflowModuleDefine);
        preHandle(definitions, 'image');
        this.graph.data(definitions);
        this.graph.render();
        const img = await new Promise(resolve => {
          setTimeout(() => {
            resolve(this.graph.toDataURL('image/png', '#fff'));
          }, 100);
        });
        element.img = img;
      } catch (e) {
        console.error(e);
      }
    }
    return { result: data };
  };
  loadData = async () => {
    const data = await ServiceInvoker(this, this.getDataWithImg);
    const { projectId, versionId, redirectWhenEmpty, versionIndex } = this.props;
    if (!data || !data.length) {
      if (redirectWhenEmpty) {
        this.props.history.replace({
          pathname: `/systemManage/v2/process/edit/project/${projectId}/id/${versionId}/version/${versionIndex}`,
        });
        return;
      }
    }
    this.setState({
      data,
    });
  };
  async componentDidMount() {
    this.graph = new G6.Graph({
      container: ReactDOM.findDOMNode(this.containerRef.current),
      width: 1200,
      height: 800,
      ...GridSettings('image'),
    });
    await this.loadData();
  }

  selectTemplate(selectedId) {
    this.setState({
      selectedId,
    });
  }

  reloadData = async () => {
    this.setState({
      selectedId: null,
    });
    await this.loadData();
  };

  onConfirm = async () => {
    const { projectId, versionId, onSelect, versionIndex } = this.props;
    const { data, selectedId } = this.state;

    const editData = data.find(ele => ele.id === selectedId);
    let difinitions = {};
    try {
      difinitions = editData ? JSON.parse(editData.workflowModuleDefine) : {};
    } catch (e) {
      console.error(e);
    }
    if (selectedId === BlankTemplate.id) {
      difinitions = { nodes: [{ type: 'start', x: 100, y: 100, id: number2Char(guid()) }] };
    }
    onSelect && onSelect(difinitions);
    this.props.history.push({
      pathname: `/systemManage/v2/process/edit/project/${projectId}/id/${versionId}/version/${versionIndex}`,
    });
  };
  render() {
    const { deleteEnable, withBlank, replaceTemplate, mode } = this.props;
    const { data, selectedId } = this.state;
    const renderBlank = withBlank;
    const invokeStatus = this.state[InvokeStatus];

    const disabled = replaceTemplate && (!selectedId || selectedId === BlankTemplate.id);

    return (
      <>
        <Row style={{ padding: '2em 0' }}>
          {formatMessage({ id: 'configuration-process' })}
          <Tooltip title={formatMessage({ id: 'include-examine-and-approve-module-examine-and-verify' })}>
            <Icon type="question-circle" />
          </Tooltip>
        </Row>
        <Row>
          <Paragraph>
            {withBlank
              ? formatMessage({ id: 'new-built-blank-space-masterplate-create' })
              : formatMessage({ id: 'select-formwork-before-one-edit-1' })}
          </Paragraph>
          <SwitchTab switchTab={this.switchTab} selectedTab={mode} />
        </Row>
        <div className={v2Style.layout}>
          <div className={v2Style.templateList}>
            <ContentWithLoading invokeStatus={invokeStatus}>
              <Row>
                {renderBlank ? (
                  <Col span={12}>
                    <BlankTemplate
                      selected={selectedId === BlankTemplate.id}
                      onClick={() => this.selectTemplate(BlankTemplate.id)}
                    />
                  </Col>
                ) : null}
                {data && data.length ? (
                  data.map(item => (
                    <Col span={12} key={item.id}>
                      <Template
                        item={item}
                        selected={selectedId === item.id}
                        deleteEnable={deleteEnable}
                        reloadData={this.reloadData}
                        onClick={() => this.selectTemplate(item.id)}
                      />
                    </Col>
                  ))
                ) : renderBlank ? null : invokeStatus && invokeStatus.hasSearch ? (
                  <div
                    style={{
                      textAlign: 'center',
                      margin: '3em auto',
                    }}
                  >
                    <h2 style={{ lineHeight: '3em' }}>{formatMessage({ id: 'pitera-there-is-no' })}</h2>
                    <p style={{ margin: '2em 0 3em' }}>{formatMessage({ id: 'tree-become-formwork-the' })}</p>
                    <Icon style={{ fontSize: 72, color: '#2acd8f' }} type="info-circle" />
                  </div>
                ) : (
                    <div></div>
                  )}
              </Row>
              <Row style={{ marginBottom: '3em', display: 'inline-block' }}>
                {(data && data.length) || renderBlank ? (
                  replaceTemplate ? (
                    <ModalContainer
                      title={formatMessage({ id: 'select-template' })}
                      onOk={this.onConfirm}
                      toggole={
                        <Button type="primary" disabled={disabled}>
                          {formatMessage({ id: 'confirm-selection' })}
                        </Button>
                      }
                    >
                      <p>{formatMessage({ id: 'select-formwork-before-one-edit' })}</p>
                    </ModalContainer>
                  ) : (
                      <Button type="primary" disabled={disabled} onClick={this.onConfirm}>
                        {formatMessage({ id: 'confirm-selection' })}
                      </Button>
                    )
                ) : null}
              </Row>
            </ContentWithLoading>
          </div>
        </div>
        <div
          style={{
            width: 1200,
            position: 'absolute',
            top: '-1200px',
            left: '-2000px',
            zIndex: 0,
            visibility: 'hidden',
          }}
          ref={this.containerRef}
        ></div>
      </>
    );
  }
}
