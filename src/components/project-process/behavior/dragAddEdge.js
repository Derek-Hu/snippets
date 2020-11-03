import G6 from '@antv/g6';
import isPlainObject from 'lodash/isPlainObject';
import guid from 'uuid/v1';
import { ItemType, ItemState, GraphType, AnchorPointState } from './constant';
// import behaviorManager from '../behaviorManager/index';
import { ArrowPath, Color } from '../edge/bizFlowEdge';

const dragAddEdgeBehavior = {
  edge: null,

  graphType: GraphType.Flow,

  getDefaultCfg() {
    return {
      edgeType: 'lineApprove',
      getAnchorPointStateOfSourceNode: () => AnchorPointState.Enabled,
      getAnchorPointStateOfTargetNode: () => AnchorPointState.Enabled,
    };
  },

  getEvents() {
    return {
      'node:mouseenter': 'handleNodeMouseEnter',
      'node:mouseleave': 'handleNodeMouseLeave',
      'node:mousedown': 'handleNodeMouseDown',
      mousemove: 'handleMouseMove',
      mouseup: 'handleMouseUp',
    };
  },

  isEnabledAnchorPoint(e) {
    const { target } = e;

    return !!target.get('isAnchorPoint') && target.get('anchorPointState') === AnchorPointState.Enabled;
  },

  isNotSelf(e) {
    const { edge } = this;
    const { item } = e;

    return item.getModel().id !== edge.getSource().getModel().id;
  },

  getTargetNodes(sourceId) {
    const { graph } = this;

    const nodes = graph.getNodes();

    return nodes.filter(node => node.getModel().id !== sourceId);
  },

  canFindTargetAnchorPoint(e) {
    return this.isEnabledAnchorPoint(e) && this.isNotSelf(e);
  },

  shouldAddDelegateEdge(e) {
    return this.isEnabledAnchorPoint(e);
  },

  shouldAddRealEdge() {
    const { edge } = this;

    const target = edge.getTarget();

    return !isPlainObject(target);
  },

  handleNodeMouseEnter(e) {
    const { graph, getAnchorPointStateOfSourceNode } = this;

    const sourceNode = e.item;
    const sourceAnchorPoints = sourceNode.getAnchorPoints();
    const sourceAnchorPointsState = [];

    sourceAnchorPoints.forEach(sourceAnchorPoint => {
      sourceAnchorPointsState.push(getAnchorPointStateOfSourceNode(sourceNode, sourceAnchorPoint));
    });

    sourceNode.set('anchorPointsState', sourceAnchorPointsState);

    graph.setItemState(sourceNode, ItemState.ActiveAnchorPoints, true);
  },

  handleNodeMouseLeave(e) {
    const { graph, edge } = this;
    const { item } = e;

    if (!edge) {
      item.set('anchorPointsState', []);
      graph.setItemState(item, ItemState.ActiveAnchorPoints, false);
    }
  },

  handleNodeMouseDown(e) {
    if (!this.shouldBegin(e) || !this.shouldAddDelegateEdge(e)) {
      return;
    }

    const { graph, getAnchorPointStateOfTargetNode } = this;
    const { target } = e;

    const sourceNode = e.item;
    const sourceModel = sourceNode.getModel();
    const sourceNodeId = sourceModel.id;
    const sourceAnchorPointIndex = target.get('anchorPointIndex');
    const sourceAnchorPoint = sourceNode.getAnchorPoints()[sourceAnchorPointIndex];

    const placeholderModel = {
      id: guid(),
      type: 'placeholder',
      x: e.x,
      y: e.y,
    };

    const isCondition = sourceModel.type === 'condition';
    const label = isCondition ? '\ue67b' : null;
    const isPopup = !!label;
    const model = {
      id: guid(),
      type: isCondition ? 'lineNormal' : 'lineApprove',
      label,
      labelCfg: {
        refY: 12,
        refX: 0,
      },
      style: isPopup
        ? null
        : {
            stroke: Color.Approve,
            endArrow: {
              path: ArrowPath,
              fill: Color.Approve,
            },
          },
      isPopup,
      source: sourceNodeId,
      sourceAnchor: sourceAnchorPointIndex,
      target: placeholderModel.id,
    };

    this.placeholderNode = graph.addItem(ItemType.Node, placeholderModel);

    this.edge = graph.addItem(ItemType.Edge, model);

    graph.getNodes().forEach(targetNode => {
      if (targetNode.getModel().id === sourceNodeId) {
        return;
      }

      const targetAnchorPoints = targetNode.getAnchorPoints();
      const targetAnchorPointsState = [];

      targetAnchorPoints.forEach(targetAnchorPoint => {
        targetAnchorPointsState.push(
          getAnchorPointStateOfTargetNode(sourceNode, sourceAnchorPoint, targetNode, targetAnchorPoint)
        );
      });

      targetNode.set('anchorPointsState', targetAnchorPointsState);

      graph.setItemState(targetNode, ItemState.ActiveAnchorPoints, true);
    });
  },

  handleMouseMove(e) {
    const { graph, edge } = this;

    if (!edge) {
      return;
    }

    if (this.canFindTargetAnchorPoint(e)) {
      const { item, target } = e;

      const targetModel = item.getModel();
      const targetId = targetModel.id;
      const targetAnchor = target.get('anchorPointIndex');

      graph.updateItem(edge, {
        target: targetId,
        targetAnchor,
      });
    } else {
      graph.updateItem(edge, {
        target: {
          x: e.x,
          y: e.y,
        },
        targetAnchor: undefined,
      });
    }
  },

  handleMouseUp() {
    const { graph, edge } = this;

    if (!edge) {
      return;
    }

    if (!this.shouldAddRealEdge()) {
      graph.removeItem(this.edge);
    }
    graph.removeItem(this.placeholderNode);

    try {
      const eModel = this.edge.getModel();
      if (!eModel) {
        return;
      }
      const sourceNode = graph.findById(eModel.source);
      const targetNode = graph.findById(eModel.target);
      const targetModel = targetNode.getModel();
      const sourceType = sourceNode.getModel().type;

      const isActionNode = sourceType === 'approve' || sourceType === 'rule' || sourceType === 'task';
      if (isActionNode && targetModel.type === 'condition') {
        const outEdges = targetNode.getOutEdges();
        outEdges.forEach(edge => {
          const outEdgeModel = edge.getModel();
          outEdgeModel._val = null;
          outEdgeModel.type = 'lineNormal';
          graph.updateItem(edge, outEdgeModel);
        });
      }
    } catch (e) {
      // console.error(e);
    }

    this.edge = null;
    this.placeholderNode = null;

    graph.getNodes().forEach(node => {
      node.set('anchorPointsState', []);
      graph.setItemState(node, ItemState.ActiveAnchorPoints, false);
    });
  },
};

G6.registerBehavior('drag-add-edge', dragAddEdgeBehavior);
