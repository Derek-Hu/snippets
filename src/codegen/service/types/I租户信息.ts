import { I角色信息 } from './I角色信息';
import { I用户信息 } from './I用户信息';

export interface I租户信息 {
  checked?: boolean;

  description?: string;

  domainId?: number;

  id?: number;

  permType?: string;

  permTypeId?: number;

  relatedRoles?: Array<I角色信息>;

  relatedUsers?: Array<I用户信息>;

  roleUserListMap?: { [key: string]: Array<I用户信息> };

  status?: string;
  /** 租户code */
  tenancyCode?: string;
  /** 租户id */
  tenancyId?: number;

  value?: string;

  valueExt?: string;
}
