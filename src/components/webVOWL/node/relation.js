import { formatMessage } from '~/locale-tools';
const RelationTypes = {
  relation: 'relation', // 关系关联
  action: 'action', // 行为关联
  deviceLocation: 'deviceLocation', // 设备地点关联
};
class Relation {
  constructor({ fromId, toId, nodeInfo = {} }) {
    this.fromId = fromId;
    this.toId = toId;
    this.nodeInfo = nodeInfo;
    this.title = this.nodeInfo.title || '';
  }
}
class ParentRelation extends Relation {
  static title = formatMessage({ id: 'parent' });
  static type = RelationTypes.relation;
}
class ChildrenRelation extends Relation {
  static title = formatMessage({ id: 'children' });
  static type = RelationTypes.relation;
}
class FriendRelation extends Relation {
  static title = formatMessage({ id: 'friend' });
  static type = RelationTypes.relation;
}
class WorkmateRelation extends Relation {
  static title = formatMessage({ id: 'colleague' });
  static type = RelationTypes.relation;
}

class TelephoneRelation extends Relation {
  static title = formatMessage({ id: 'communication' });
  static type = RelationTypes.action;
}
class MoneyRelation extends Relation {
  static title = formatMessage({ id: 'transfer-accounts' });
  static type = RelationTypes.action;
}
class BuyRelation extends Relation {
  static title = formatMessage({ id: 'buying-on-behalf-of' });
  static type = RelationTypes.action;
}
class JobRelation extends Relation {
  static title = formatMessage({ id: 'work' });
  static type = RelationTypes.action;
}

class TelNumberRelation extends Relation {
  static title = formatMessage({ id: 'share-number' });
  static type = RelationTypes.deviceLocation;
}
class DeviceRelation extends Relation {
  static title = formatMessage({ id: 'common-equipment' });
  static type = RelationTypes.deviceLocation;
}
class GPSRelation extends Relation {
  static title = 'GPS';
  static type = RelationTypes.deviceLocation;
}
class HouseRelation extends Relation {
  static title = formatMessage({ id: 'cohabitation' });
  static type = RelationTypes.deviceLocation;
}
class HuKouRelation extends Relation {
  static title = formatMessage({ id: 'same-household-register' });
  static type = RelationTypes.deviceLocation;
}

const Relations = {
  parent: ParentRelation,
  children: ChildrenRelation,
  device: DeviceRelation,
  friend: FriendRelation,
  workmate: WorkmateRelation,

  telephone: TelephoneRelation,
  money: MoneyRelation,
  buy: BuyRelation,
  job: JobRelation,

  telnumber: TelNumberRelation,
  gps: GPSRelation,
  house: HouseRelation,
  hukou: HuKouRelation,
};

export default Relations;
