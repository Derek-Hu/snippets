export default (data, mode) => {
  if (!data) {
    return;
  }
  const nodeIdMap = {};
  data.nodes &&
    data.nodes.forEach(node => {
      node.mode = mode;
      nodeIdMap[node.id] = node.type;
    });
  data.edges &&
    data.edges.forEach(edge => {
      edge.mode = mode;
      if (mode === 'image' || mode === 'view') {
        edge.label = null;
        return;
      }
      if (nodeIdMap[edge.source] === 'condition') {
        edge.label = '\ue67b';
      }
    });
  return data;
};
