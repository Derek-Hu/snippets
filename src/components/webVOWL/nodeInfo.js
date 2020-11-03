import React from 'react';

export default class NodeInfo extends React.Component {
  render() {
    const { type, element, values } = this.props;
    <>
      <h3 className="accordion-trigger noselect" id="selection-details-trigger">
        {formatMessage({ id: 'node-information' })}
      </h3>
      <div className="accordion-container" id="selection-details">
        {type === 'Node' ? (
          <div id="classSelectionInformation">
            <p className="propDetails">
              Name: <span id="name">{values.name}</span>
            </p>
            <p className="propDetails">
              Type: <span id="typeNode">{values.type}</span>
            </p>
            <p className="propDetails">
              Equiv.: <span id="classEquivUri">{values.equivUri}</span>
            </p>
            <p className="propDetails">
              Disjoint: <span id="disjointNodes">{values.disjointNodes}</span>
            </p>
            <p className="propDetails">
              Charac.: <span id="classAttributes">{values.attributes}</span>
            </p>
            <p className="propDetails">
              Individuals: <span id="individuals">{values.individuals}</span>
            </p>
            <p className="propDetails">
              Description: <span id="nodeDescription">{values.description}</span>
            </p>
            <p className="propDetails">
              Comment: <span id="nodeComment">{values.comment}</span>
            </p>
          </div>
        ) : null}
        {type === 'Property' ? (
          <div id="propertySelectionInformation">
            <p className="propDetails">
              Name: <span id="propname">{values.name}</span>
            </p>
            <p className="propDetails">
              Type: <span id="typeProp">{values.type}</span>
            </p>
            <p id="inverse" className="propDetails">
              Inverse: <span>{values.inverse}</span>
            </p>
            <p className="propDetails">
              Domain: <span id="domain">{values.domain}</span>
            </p>
            <p className="propDetails">
              Range: <span id="range">{values.range}</span>
            </p>
            <p className="propDetails">
              Subprop.: <span id="subproperties">{values.subProperties}</span>
            </p>
            <p className="propDetails">
              Superprop.: <span id="superproperties">{values.superProperties}</span>
            </p>
            <p className="propDetails">
              Equiv.: <span id="propEquivUri">{values.equivUri}</span>
            </p>
            <p id="infoCardinality" className="propDetails">
              Cardinality: <span>{values.infoCardinality}</span>
            </p>
            <p id="minCardinality" className="propDetails">
              Min. cardinality: <span>{values.minCardinality}</span>
            </p>
            <p id="maxCardinality" className="propDetails">
              Max. cardinality: <span>{values.maxCardinality}</span>
            </p>
            <p className="propDetails">
              Charac.: <span id="propAttributes">{values.attributes}</span>
            </p>
            <p className="propDetails">
              Description: <span id="propDescription">{values.description}</span>
            </p>
            <p className="propDetails">
              Comment: <span id="propComment">{values.comment}</span>
            </p>
          </div>
        ) : null}
        {!element ? (
          <div id="noSelectionInformation">
            <p>
              <span>Select an element in the visualization.</span>
            </p>
          </div>
        ) : null}
      </div>
    </>;
  }
}
