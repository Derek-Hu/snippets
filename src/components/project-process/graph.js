import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import './node/index';
import './edge/index';
import './behavior/index';
import RulePopup from './popup/rule';
import PolicySelectPopup from './popup/condition';
import TaskPopup from './popup/task';
import ModalContainer from '~/components/modal-container/index';
import { NodeConfig } from '~/components/node-config/index';
import styles from './tool-bar.module.less';
import ToolBar from './tool-bar/index';
import { getToolTipContent } from './tool/index';
import { Labels, GridSettings } from './settings';
import uuidv1 from 'uuid/v1';
import { name as EditName } from './node/edit';
import { EDGE_LABEL_CLASS_NAME } from './edge/bizFlowEdge';
import { shouldTriggerShortcut } from './tool/index';
import getGraphData from './tool/getGraphData';
import preHandle from './node/pre';
import { getAllGroupInfo } from '~/codegen/service/ts/ProcessConfManagementService';

export default class extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.approveModalRef = React.createRef();
    this.moduleFormRef = React.createRef();
    this.graph = null;
    this.state = {
      visibleModal: null,
      allGroupInfos: [],
    };
  }

  closePopup = () => {
    this.setState({
      visibleModal: null,
    });
  };

  saveGraphData2Cache = () => {
    const { passProps } = this.props;
    const { projectId, versionId } = passProps;
    const data = this.graph.save();

    sessionStorage.setItem(
      'editor-cache-data',
      JSON.stringify({
        projectId,
        versionId,
        data,
      })
    );
  };

  getGraphDataWithControlPoints = () => {
    return getGraphData(this.graph);
  };

  showNodePopup = ev => {
    const { item } = ev;
    const model = item.getModel();
    if (model.type === 'task' || model.type === 'rule' || model.type === 'approve') {
      if (model.type === 'approve') {
        this.approveModalRef.current.showModal();
        this.setState({
          popupModel: model,
        });
        return;
      }
      const { width } = item.getBBox();
      const elemenW = width ? width / 4 : 0;
      const graph = this.graph;

      const modalPosition = graph.getClientByPoint(model.x, model.y);
      modalPosition.x = modalPosition.x - elemenW;
      modalPosition.y = modalPosition.y + 40;
      this.setState({
        visibleModal: model.type,
        modalPosition,
        popupModel: model,
      });
    }
  };

  onPopup = ev => {
    this.hiddenTooltip();

    const { item, target } = ev;
    if (!item) {
      return;
    }
    const { cfg } = target;
    if (!cfg || cfg.name !== EditName) {
      return;
    }
    this.showNodePopup(ev);
  };

  onRuleConfirm = data => {
    const { name } = data;
    const { popupModel } = this.state;
    popupModel.label = name;
    popupModel._val = data;
    const item = this.graph.findById(popupModel.id);
    if (!item) {
      return;
    }
    this.graph.updateItem(item, {
      ...popupModel,
    });
  };

  hiddenTooltip = () => {
    this.setState({
      tooltipVisibleType: null,
    });
  };

  onConditionPolicyConfirm = data => {
    const { popupModel } = this.state;
    popupModel._val = data;

    const { condition } = data;
    popupModel.type = /REJECT/i.test(condition) ? 'lineReject' : 'lineApprove';

    const item = this.graph.findById(popupModel.id);
    if (!item) {
      return;
    }
    this.graph.updateItem(item, { ...popupModel });
  };

  onTaskConfirm = (val, label) => {
    const { popupModel } = this.state;
    popupModel.label = label;
    popupModel._val = val;
    const item = this.graph.findById(popupModel.id);
    if (!item) {
      return;
    }
    this.graph.updateItem(item, { ...popupModel });
  };

  showEdgePopup = ev => {
    const { item } = ev;
    const model = item.getModel();
    // [判定] 后的线条，才需要弹窗
    if (!model.isPopup) {
      return;
    }

    // 当[判定]前一个节点是人审/非人审时，弹窗内容不同
    const modalPosition = {
      x: ev.clientX,
      y: ev.clientY + 40,
    };
    const sourceNode = item.getSource();
    const inEdges = sourceNode.getInEdges();
    const preNode = inEdges.map(edge => edge.getSource());

    this.setState({
      visibleModal: 'condition',
      preNode: preNode && preNode[0] ? preNode[0].getModel() : null,
      modalPosition,
      popupModel: model,
    });
  };

  onEdgePopup = ev => {
    const { item, target } = ev;
    if (!item) {
      return;
    }
    const { cfg } = target;
    if (!cfg || cfg.className !== EDGE_LABEL_CLASS_NAME) {
      return;
    }
    this.showEdgePopup(ev);
  };

  onMouseenter = ev => {
    // 规则节点、人审节点需要提示
    const { item } = ev;
    const model = item.getModel();
    const { type, _val, x, y } = model;

    const isLine = type === 'lineApprove' || type === 'lineReject';
    if (type === 'rule' || type === 'approve' || isLine) {
      let tooltipPos;

      if (isLine) {
        tooltipPos = {
          x: ev.clientX,
          y: ev.clientY - 5,
        };
      } else {
        tooltipPos = this.graph.getClientByPoint(x, y);
        tooltipPos.y = tooltipPos.y - 30;
      }
      this.setState({
        tooltipVisibleType: type,
        tooltipModel: _val || {},
        tooltipPos,
      });
    }
  };

  onOutsideClick = e => {
    if (!shouldTriggerShortcut(this.graph, e.target)) {
      const clickNodes = this.graph.findAllByState('node', 'selected');
      const clickEdges = this.graph.findAllByState('edge', 'selected');
      clickNodes.forEach(cn => {
        this.graph.setItemState(cn, 'selected', false);
      });

      clickEdges.forEach(ed => {
        this.graph.setItemState(ed, 'selected', false);
      });
      return;
    }
  };

  componentWillReceiveProps(nextProps) {
    const { passProps, mode } = nextProps;
    const dashboardData = passProps.dashboardData;
    if (JSON.stringify(dashboardData) !== JSON.stringify(this.dashboardData)) {
      preHandle(dashboardData, mode);
      this.graph.read(dashboardData || {});
      this.dashboardData = dashboardData;
    }
  }
  componentDidMount = async () => {
    const { mode, passProps } = this.props;
    const { dashboardData } = passProps.dashboardData || {};
    this.dashboardData = dashboardData;
    const width = this.containerRef.current.getBoundingClientRect().width;
    if (!this.graph) {
      this.graph = new G6.Graph({
        container: ReactDOM.findDOMNode(this.containerRef.current),
        width,
        ...GridSettings(mode),
      });
    }
    this.graph.on('node:mouseleave', this.hiddenTooltip);
    this.graph.on('edge:mouseleave', this.hiddenTooltip);
    this.graph.on('node:dragstart', this.hiddenTooltip);
    this.graph.on('node:mouseenter', this.onMouseenter);
    this.graph.on('edge:mouseenter', this.onMouseenter);

    if (mode === 'edit') {
      this.graph.on('node:click', this.onPopup);
      this.graph.on('edge:click', this.onEdgePopup);
      window.addEventListener('click', this.onOutsideClick);
    }

    preHandle(dashboardData, mode);
    this.graph.read(dashboardData || {});

    const { result: allGroupInfos } = await getAllGroupInfo();
    this.setState({
      allGroupInfos,
    });
  };

  componentWillUnmount() {
    window.removeEventListener('click', this.onOutsideClick);
  }
  confirmNode = async () => {
    const form = this.moduleFormRef.current.formRef;
    const approveSettings = await new Promise(resolve => {
      form.validateFields((err, values) => {
        if (err) {
          resolve(false);
          return;
        }
        resolve(values);
      });
    });

    if (approveSettings === false) {
      return false;
    }
    const { popupModel } = this.state;
    popupModel.label = approveSettings.name;
    popupModel._val = approveSettings;
    const item = this.graph.findById(popupModel.id);
    if (!item) {
      return;
    }

    const outEdges = item.getOutEdges();
    outEdges.forEach(edge => {
      if (edge.getTarget().getModel().type === 'condition') {
        const conditionOutEdges = edge.getTarget().getOutEdges();
        conditionOutEdges.forEach(ce => {
          const ceModel = ce.getModel();
          ceModel._val = null;
          ceModel.type = 'lineNormal';
          this.graph.updateItem(ce, ceModel);
        });
      }
    });

    this.graph.updateItem(item, { ...popupModel });
    // 由于当前后端不支持多个人审节点拥有不同的模块和三方报告配置
    // 因此前端页面人审节点模块配置需相互覆盖，待后端支持后该代码可删除
    // this.graph.getNodes().forEach(node => {
    //   const model = node.getModel();
    //   if (model.id === popupModel.id) {
    //     return;
    //   }
    //   if (model.type === 'approve') {
    //     model._val = {
    //       ...model._val,
    //       modules: approveSettings.modules,
    //       reports: approveSettings.reports,
    //     };
    //     this.graph.updateItem(node, model);
    //   }
    // });
  };

  onDrop = ev => {
    // 开始/结束节点 各一个
    const type = ev.dataTransfer.getData('text/plain');
    let modelType = type;
    if (type === 'start') {
      const elements = this.graph.findAll('node', node => {
        const { type } = node.getModel();
        return type === 'start' || type === 'end';
      });

      if (elements && elements.length > 1) {
        return;
      }
      if (elements && elements.length === 1) {
        modelType = 'end';
      }
    }

    const position = this.graph.getPointByClient(ev.clientX, ev.clientY);
    this.graph.addItem('node', {
      id: uuidv1(),
      ...position,
      label: Labels[modelType],
      type: modelType,
    });
  };

  render() {
    const {
      visibleModal,
      modalPosition = {},
      tooltipModel,
      tooltipVisibleType,
      tooltipPos,
      popupModel,
      preNode,
      allGroupInfos,
    } = this.state;
    const { passProps, mode } = this.props;
    const { x, y } = tooltipPos || {};
    const { reportMap } = passProps;
    const { _val: initialValue } = popupModel || {};
    const tips = getToolTipContent({
      overlayClassName: styles.toolbarWpr,
      reportMap,
      tooltipModel,
      tooltipVisibleType,
      allGroupInfos,
    });

    const isEditor = mode === 'edit' || mode === null || mode === undefined;

    return (
      <>
        {isEditor ? (
          <>
            <RulePopup
              position={modalPosition}
              visible={visibleModal === 'rule'}
              initialValue={initialValue}
              onClose={this.closePopup}
              onConfirm={this.onRuleConfirm}
            ></RulePopup>
            <PolicySelectPopup
              position={modalPosition}
              initialValue={initialValue}
              visible={visibleModal === 'condition'}
              preNode={preNode}
              popupType={visibleModal}
              onClose={this.closePopup}
              onConfirm={this.onConditionPolicyConfirm}
            />
            <TaskPopup
              position={modalPosition}
              visible={visibleModal === 'task'}
              onClose={this.closePopup}
              initialValue={initialValue}
              onConfirm={this.onTaskConfirm}
            ></TaskPopup>
          </>
        ) : null}
        <div style={{ left: x, top: y, position: 'fixed' }}>{tips}</div>
        <ModalContainer
          width={800}
          ref={this.approveModalRef}
          title={formatMessage({ id: 'details-of-personal-trial' })}
          onOk={this.confirmNode}
        >
          <NodeConfig
            {...passProps}
            allGroupInfos={allGroupInfos}
            ref={this.moduleFormRef}
            initialValue={initialValue}
            wrappedComponentRef={form => (this.nodeEditForm = form)}
          />
        </ModalContainer>
        {isEditor ? <ToolBar /> : null}
        <div className={isEditor ? styles.usageWpr : ''}>
          {isEditor ? <p className={styles.usage}>{formatMessage({ id: 'come-here-edit-drag-the' })}</p> : null}
          <div className={styles.usageArea} onDrop={this.onDrop} ref={this.containerRef}></div>
        </div>
      </>
    );
  }
}
