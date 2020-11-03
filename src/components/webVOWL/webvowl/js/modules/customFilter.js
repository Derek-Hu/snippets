var filterTools = require('../util/filterTools')();

module.exports = function(graph) {
  var filter = {},
    nodes,
    properties,
    filteredNodes,
    filteredProperties;

  /**
   * If enabled, all datatypes and literals including connected properties are filtered.
   * @param untouchedNodes
   * @param untouchedProperties
   */
  filter.filter = function(untouchedNodes, untouchedProperties) {
    nodes = untouchedNodes;
    properties = untouchedProperties;

    if (this.enabled()) {
      removeDatatypesAndLiterals();
    }

    filteredNodes = nodes;
    filteredProperties = properties;
  };

  function removeDatatypesAndLiterals() {
    var filteredData = filterTools.filterNodesAndTidy(nodes, properties, getFilter);

    nodes = filteredData.nodes;
    properties = filteredData.properties;
  }

  filter.enabled = function(p) {
    return true;
  };

  function getFilter(node) {
    return graph.getCustomerFilter()(node.drNode);
  }
  // Functions a filter must have
  filter.filteredNodes = function() {
    return filteredNodes;
  };

  filter.filteredProperties = function() {
    return filteredProperties;
  };

  return filter;
};
