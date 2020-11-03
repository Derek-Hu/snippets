import { formatMessage } from '~/locale-tools';
import Graph from './index';

const nodes = [
  {
    id: '1',
    title: formatMessage({ id: 'no-aid' }),
    subTitle: formatMessage({ id: 'contacts' }),
    entityTypes: ['NoAid'],
    layer: {
      type: 'blue',
      label: formatMessage({ id: 'innocence' }),
    },
    relations: [
      {
        id: '2',
        title: formatMessage({ id: 'communication-7-times' }),
        drType: 'telephone',
      },
    ],
  },
  {
    id: '2',
    title: formatMessage({ id: 'overdue-&-blacklist' }),
    subTitle: formatMessage({ id: 'so-and-so' }),
    entityTypes: ['OverDue'],
    layer: {
      type: 'red',
      label: formatMessage({ id: 'innocence' }),
    },
    relations: [
      {
        id: '11',
        title: formatMessage({ id: 'communication-7-times' }),
        drType: 'telephone',
      },
    ],
  },
  {
    id: '3',
    title: formatMessage({ id: 'no-aid' }),
    subTitle: formatMessage({ id: 'zhang-san' }),
    entityTypes: ['NoAid'],
  },
  {
    id: '4',
    title: formatMessage({ id: 'aid-not-real-name' }),
    subTitle: formatMessage({ id: 'li-si' }),
    entityTypes: ['HasAidNotRealName'],
  },
  {
    id: '5',
    title: formatMessage({ id: 'aid-has-real-name' }),
    className: 'rootEntity',
    subTitle: formatMessage({ id: '13-pen' }),
    entityTypes: ['HasAidWithRealName'],
    relations: [
      {
        id: '3',
        title: formatMessage({ id: 'parent' }),
        drType: 'parent',
      },
      {
        id: '4',
        title: formatMessage({ id: 'friend' }),
        drType: 'friend',
      },
      {
        id: '10',
        title: 'GPS',
        drType: 'gps',
      },
      {
        id: '8',
        title: formatMessage({ id: 'purchase-2-times' }),
        drType: 'buy',
      },
      {
        id: '7',
        title: formatMessage({ id: 'cohabitation' }),
        drType: 'house',
      },
      {
        id: '12',
        title: 'xx',
        drType: 'house',
      },
      {
        id: '13',
        title: 'xx',
        drType: 'house',
      },
      {
        id: '14',
        title: 'xx',
        drType: 'house',
      },
    ],
  },
  {
    id: '6',
    title: formatMessage({ id: 'high-risk-users' }),
    subTitle: formatMessage({ id: 'higher-liabilities' }),
    entityTypes: ['HasRisk'],
    relations: [
      {
        id: '11',
        title: formatMessage({ id: 'surface-filling' }),
        drType: 'device',
      },
      {
        id: '4',
        title: formatMessage({ id: 'friend' }),
        drType: 'friend',
      },
    ],
  },
  {
    id: '7',
    title: formatMessage({ id: 'overdue-&-blacklist' }),
    subTitle: formatMessage({ id: 'china-mutual-gold-blacklist' }),
    entityTypes: ['OverDue'],
    drType: 'antiOrg',
  },
  {
    id: '8',
    title: formatMessage({ id: 'fraudulent-gang' }),
    subTitle: formatMessage({ id: 'wenzhou-area' }),
    entityTypes: ['AntiTeam'],
  },
  {
    id: '9',
    title: formatMessage({ id: 'fraud-intermediary' }),
    subTitle: formatMessage({ id: 'shanghai-area' }),
    entityTypes: ['AntiOrg'],
    relations: [
      {
        id: '10',
        title: formatMessage({ id: 'common-equipment' }),
        drType: 'device',
      },
    ],
  },
  {
    id: '10',
    title: formatMessage({ id: 'equipment-&-location' }),
    className: 'gray',
    entityTypes: ['DeviceLocation'],
  },
  {
    id: '11',
    title: 'Tel:18101012345',
    className: 'black',
    entityTypes: ['DeviceLocation'],
  },
  {
    id: '12',
    title: formatMessage({ id: 'innocence' }),
    subTitle: '0/3',
    entityTypes: ['WhiteEntity'],
  },
  {
    id: '13',
    title: formatMessage({ id: 'suspected-gang' }),
    subTitle: formatMessage({ id: 'wenzhou-area' }),
    entityTypes: ['HasSuspectEntity'],
  },
  {
    id: '14',
    title: formatMessage({ id: 'fraudulent-gang' }),
    subTitle: formatMessage({ id: 'wenzhou-area' }),
    entityTypes: ['BlackEntity'],
  },
];

export default nodes;

const graph = new Graph(nodes);

console.log(JSON.stringify(graph.convert2JSON()));
