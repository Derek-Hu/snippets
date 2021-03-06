import G6 from '@antv/g6';
import { ItemType, ItemState, GraphState, EditorEvent } from './constant';

/** 生成唯一标识 */
export function guid() {
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** 拼接查询字符 */
export const toQueryString = obj =>
  Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

/** 执行批量处理 */
export function executeBatch(graph, execute) {
  const autoPaint = graph.get('autoPaint');

  graph.setAutoPaint(false);

  execute();

  graph.paint();
  graph.setAutoPaint(autoPaint);
}

/** 执行递归遍历 */
export function recursiveTraversal(root, callback) {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(item => recursiveTraversal(item, callback));
}

/** 判断是否流程图 */
export function isFlow(graph) {
  return graph.constructor === G6.Graph;
}

/** 判断是否脑图 */
export function isMind(graph) {
  return graph.constructor === G6.TreeGraph;
}

/** 判断是否节点 */
export function isNode(item) {
  return item.getType() === ItemType.Node;
}

/** 判断是否边线 */
export function isEdge(item) {
  return item.getType() === ItemType.Edge;
}

/** 获取选中节点 */
export function getSelectedNodes(graph) {
  return graph.findAllByState(ItemType.Node, ItemState.Selected);
}

/** 获取选中边线 */
export function getSelectedEdges(graph) {
  return graph.findAllByState(ItemType.Edge, ItemState.Selected);
}

/** 获取高亮边线 */
export function getHighlightEdges(graph) {
  return graph.findAllByState(ItemType.Edge, ItemState.HighLight);
}

/** 获取图表状态 */
export function getGraphState(graph) {
  let graphState = GraphState.MultiSelected;

  const selectedNodes = getSelectedNodes(graph);
  const selectedEdges = getSelectedEdges(graph);

  if (selectedNodes.length === 1 && !selectedEdges.length) {
    graphState = GraphState.NodeSelected;
  }

  if (selectedEdges.length === 1 && !selectedNodes.length) {
    graphState = GraphState.EdgeSelected;
  }

  if (!selectedNodes.length && !selectedEdges.length) {
    graphState = GraphState.CanvasSelected;
  }

  return graphState;
}

/** 设置选中元素 */
export function setSelectedItems(graph, items) {
  executeBatch(graph, () => {
    const selectedNodes = getSelectedNodes(graph);
    const selectedEdges = getSelectedEdges(graph);

    [...selectedNodes, ...selectedEdges].forEach(node => {
      graph.setItemState(node, ItemState.Selected, false);
    });

    items.forEach(item => {
      graph.setItemState(item, ItemState.Selected, true);
    });
  });

  graph.emit(EditorEvent.onGraphStateChange, {
    graphState: getGraphState(graph),
  });
}

/** 清除选中状态 */
export function clearSelectedState(graph, shouldUpdate) {
  const selectedNodes = getSelectedNodes(graph);
  const selectedEdges = getSelectedEdges(graph);

  executeBatch(graph, () => {
    [...selectedNodes, ...selectedEdges].forEach(item => {
      if (shouldUpdate(item)) {
        graph.setItemState(item, ItemState.Selected, false);
      }
    });
  });
}

/** 获取回溯路径 - Flow */
export function getFlowRecallEdges(graph, node, targetIds = [], edges = []) {
  const inEdges = node.getInEdges();

  if (!inEdges.length) {
    return [];
  }

  inEdges.map(edge => {
    const sourceId = edge.getModel().source;
    const sourceNode = graph.findById(sourceId);

    edges.push(edge);

    const targetId = node.get('id');

    targetIds.push(targetId);

    if (!targetIds.includes(sourceId)) {
      getFlowRecallEdges(graph, sourceNode, targetIds, edges);
    }
  });

  return edges;
}

/** 获取回溯路径 - Mind */
export function getMindRecallEdges(graph, node, edges = []) {
  const parentNode = node.get('parent');

  if (!parentNode) {
    return edges;
  }

  node.getEdges().forEach(edge => {
    const sourceId = edge.getModel().source;

    if (sourceId === parentNode.get('id')) {
      edges.push(edge);
    }
  });

  return getMindRecallEdges(graph, parentNode, edges);
}
