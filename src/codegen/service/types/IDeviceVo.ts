export type ACTORROLE = 'ANY' | 'LENDER' | 'BORROWER' | 'GUARANTEE';

export interface IDeviceVo {
  /** 原本的actionType */
  actionType?: string;

  actorRole?: ACTORROLE;

  aid?: string;

  brand?: string;
  /** 原本的cellphone */
  cellphone?: string;

  comId?: string;

  deviceId?: string;
  /** 原本的deviceModel */
  deviceModel?: string;

  eid?: string;

  os?: string;

  pageId?: string;

  provider?: string;
  /** 原本的simOperatorName */
  simOperatorName?: string;

  source?: string;
  /** 原本的sourceId */
  sourceId?: string;

  ssn?: string;
  /** 原本的createTime和updateTime */
  timestamp?: number;
}
