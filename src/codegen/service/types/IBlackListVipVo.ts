import { IBlackListOperationVo } from './IBlackListOperationVo';

export interface IBlackListVipVo {
  createTime?: number;

  inTime?: number;

  operations?: Array<IBlackListOperationVo>;

  operator?: string;

  outTime?: number;

  reason?: string;

  relationKey?: number;

  relationValue?: string;

  source?: number;

  status?: number;

  updateTime?: number;
}
