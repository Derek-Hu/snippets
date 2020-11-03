import { I角色信息 } from './I角色信息';
import { I标签信息 } from './I标签信息';
import { I用户信息 } from './I用户信息';

export interface I组信息 {
  /** 组code */
  code?: string;
  /** 组的创建时间 */
  createDate?: string;
  /** 组描述 */
  description?: string;
  /** 子组列表 */
  groups?: Array<I组信息>;
  /** 主键id */
  id?: number;
  /** 是否是根组 */
  isRootGrp?: boolean;
  /** 组最近更新的时间 */
  lastUpdate?: string;
  /** 组名称 */
  name?: string;
  /** 辅助字段,判断某个人是否是该组的owner */
  ownerMarkup?: boolean;
  /** 父组id */
  parentId?: number;
  /** 父组id集合 */
  parentIds?: Array<number>;
  /** 辅助字段,判断组是否与某个角色有关联关系 */
  roleChecked?: boolean;
  /** 组对应的角色信息 */
  roles?: Array<I角色信息>;
  /** 组的状态(0:启用,1:禁用) */
  status?: string;
  /** 辅助字段,判断组是否与某个标签有关联关系 */
  tagChecked?: boolean;
  /** 组对应的标签信息 */
  tags?: Array<I标签信息>;
  /** 租户code */
  tenancyCode?: string;
  /** 租户id */
  tenancyId?: number;
  /** 与组关联的用户 */
  users?: Array<I用户信息>;
}
