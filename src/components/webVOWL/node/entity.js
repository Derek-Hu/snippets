import { formatMessage } from '~/locale-tools';
class Entity {
  getNodeDetail() {
    return [
      'ActorId',
      formatMessage({ id: 'full-name' }),
      formatMessage({ id: 'user-nature' }),
      formatMessage({ id: 'channel-sources' }),
      formatMessage({ id: 'registration-time' }),
      formatMessage({ id: 'current-borrowing' }),
      formatMessage({ id: 'current-balance-outstanding' }),
      formatMessage({ id: 'history-hit-deny-code' }),
      formatMessage({ id: 'maximum-continuous-overdue-days' }),
    ];
  }
  getTitle() {}
}
class DeviceLocation extends Entity {
  static weight = 4;
  static description = formatMessage({ id: 'main-body-relevance-content-share-device' });
}
class NoAid extends Entity {
  static weight = 5;
  static description = formatMessage({ id: 'surname-and-personal-name-contact-contact-way' });
  getNodeDetail() {
    return [formatMessage({ id: 'full-name' }), 'ssn', formatMessage({ id: 'cell-phone-number' })];
  }
}
class HasAidNotRealName extends Entity {
  static weight = 6;
  static description = formatMessage({ id: 'user' });
  getNodeDetail() {
    return [
      'ActorId',
      formatMessage({ id: 'full-name' }),
      formatMessage({ id: 'user-nature' }),
      formatMessage({ id: 'channel-sources' }),
      formatMessage({ id: 'registration-time' }),
    ];
  }
}
class HasAidWithRealName extends Entity {
  static weight = 7;
  static description = formatMessage({ id: 'user-1' });
}
class HasRisk extends Entity {
  static weight = 8;
  static description = formatMessage({ id: 'suspected-high-risk-users' });
}
class OverDue extends Entity {
  static weight = 9;
  static description = formatMessage({
    id: 'uncollectible-accounts-user-exceed-the-time-limit-order-for-goods',
  });
}
class AntiOrg extends Entity {
  static weight = 10;
  static description = formatMessage({ id: 'fraud-intermediary' });
}
class AntiTeam extends Entity {
  static weight = 11;
  static description = formatMessage({ id: 'fraudulent-gang' });
}

class WhiteEntity extends Entity {
  static weight = 12;
  static description = formatMessage({ id: 'innocence' });
}

class HasSuspectEntity extends Entity {
  static weight = 13;
  static description = formatMessage({ id: 'suspected' });
}

class BlackEntity extends Entity {
  static weight = 13;
  static description = formatMessage({ id: 'cheat' });
}
export default {
  NoAid,
  HasAidNotRealName,
  HasAidWithRealName,
  HasRisk,
  OverDue,
  AntiTeam,
  AntiOrg,
  DeviceLocation,

  WhiteEntity,
  HasSuspectEntity,
  BlackEntity,
};
