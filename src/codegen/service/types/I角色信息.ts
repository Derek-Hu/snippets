import { I租户信息 } from './I租户信息';
import { IDomainDto } from './IDomainDto';
import { I用户信息 } from './I用户信息';
import { I组信息 } from './I组信息';

export interface I角色信息 {
  checked?: boolean;
  /** 描述 */
  description?: string;
  /** 对应的域信息 */
  domain?: IDomainDto;
  /** 角色所在域的id */
  domainId?: number;

  groupList?: Array<I组信息>;
  /** 主键id */
  id?: number;
  /** 名称 */
  name?: string;

  permDtoMap?: { [key: string]: Array<I租户信息> };

  permMap?: { [key: string]: Array<string> };

  permissionId?: number;
  /** 角色编码 */
  roleCode?: string;
  /** 角色类型的id */
  roleCodeId?: number;
  /** 状态(0,1) */
  status?: string;
  /** 租户code */
  tenancyCode?: string;
  /** 租户id */
  tenancyId?: number;
  /** 角色类型 */
  type?: string;
  /** 角色类型的id */
  typeId?: number;

  userDtoList?: Array<I用户信息>;
}
