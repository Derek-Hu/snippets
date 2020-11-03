import { formatMessage } from '~/locale-tools';
import EntityTypes from './entity';
import Relations from './relation';
import uuidv1 from 'uuid/v1';

const supporttedRelactionTypes = Object.keys(Relations);
const supporttedEntityTypes = Object.keys(EntityTypes);
class NodeEntity {
  constructor({ id, title, subTitle = '', entityTypes, relations, layer, className }) {
    if (id === undefined) {
      console.error(formatMessage({ id: 'attribute-hiatus-receive' }), arguments[0]);
    }
    this.id = id;
    this.title = title;
    this.layer = layer || {};
    this.className = className;
    this.subTitle = subTitle;
    if (!entityTypes || !entityTypes.length) {
      this.entityTypes = null;
      this.type = null;
    } else {
      // 按权重排序，优先显示
      this.entityTypes = entityTypes
        .filter(enType => {
          const isSupportted = supporttedEntityTypes.indexOf(enType) !== -1;
          if (!isSupportted) {
            console.error(
              `${formatMessage({ id: 'sustain-1' })}${supporttedEntityTypes}${formatMessage({
                id: 'actual-reception',
              })}${enType}`
            );
          }
          return isSupportted;
        })
        .sort((a, b) => EntityTypes[b].weight - EntityTypes[a].weight);
      this.type = this.entityTypes[0];
    }
    if (relations) {
      this.relations = relations
        .filter(relation => {
          const isSupportted = supporttedRelactionTypes.indexOf(relation.drType) !== -1;
          if (!isSupportted) {
            console.error(
              `${formatMessage({ id: 'supported-relationship-types-are' })}${supporttedRelactionTypes}${formatMessage({
                id: 'actual-reception',
              })}${relation.drType}`
            );
          }
          return isSupportted;
        })
        .map(relation => {
          const ActualCls = Relations[relation.drType];
          return new ActualCls({ fromId: id, toId: relation.id, nodeInfo: relation });
        });
    } else {
      this.relations = [];
    }
  }
}

export default class Graph {
  constructor(nodes) {
    if (Object.prototype.toString.call(nodes) === '[object Array]') {
      this.nodes = nodes
        .filter(v => v !== null && v !== undefined)
        .map(node => new NodeEntity(node))
        .filter(node => node.type);
    } else {
      console.warn(formatMessage({ id: 'relevance-a-collection-of-illustrative-plates-array-reality' }), nodes);
      this.nodes = [];
    }
  }
  convert2JSON = () => {
    const data = {
      property: [],
      namespace: [],
    };
    // console.log(this.nodes);
    data.class = this.nodes.map(node => {
      const drType = node.type[0].toLowerCase() + node.type.substring(1);
      return {
        id: node.id,
        type: drType === 'deviceLocation' ? 'rdfs:Literal' : 'owl:Class',
        drType,
      };
    });
    data.classAttribute = this.nodes.map(node => {
      return {
        label: {
          undefined: node.title,
        },
        ...node,
      };
    });
    data.propertyAttribute = this.nodes.reduce((propAttrs, node) => {
      return propAttrs.concat(
        node.relations
          .map(relation => {
            relation.id = uuidv1();

            const toNode = this.nodes.find(node => node.id === relation.toId);
            if (!toNode) {
              return null;
            }
            const typeValue = toNode.type === 'DeviceLocation' ? 'datatype' : 'object';

            data.property.push({
              id: relation.id,
              type: `owl:${typeValue}Property`,
            });
            return {
              iri: 'http://blankdots.com/open/personasonto.owl#hasDisability',
              baseIri: 'http://blankdots.com/open/personasonto.owl',
              drType: Relations[relation.nodeInfo.drType].type,
              range: relation.toId,
              description: {
                undefined: 'A person might have a disability.',
              },
              label: {
                undefined: relation.title,
              },
              domain: relation.fromId,
              attributes: [typeValue],
              id: relation.id,
            };
          })
          .filter(v => v)
      );
    }, []);
    return data;
  };
}
