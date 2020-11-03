import { IDomainDto } from './IDomainDto';

export interface I标签信息 {
  /** 编码 */
  code?: string;
  /** 创建时间 */
  createDate?: string;
  /** 描述 */
  description?: string;
  /** 对应的域信息 */
  domain?: IDomainDto;
  /** 主键id */
  id?: number;
  /** 最近更新时间 */
  lastUpdate?: string;
  /** 状态(0:启用,1:禁用) */
  status?: string;
  /** 辅助字段,判断标签是否与某个组有关联关系 */
  tagGrouprChecked?: boolean;
  /** 标签类型code */
  tagTypeCode?: string;
  /** 标签类型id */
  tagTypeId?: number;
  /** 辅助字段,判断标签是否与某个用户有关联关系 */
  tagUserChecked?: boolean;
  /** 租户code */
  tenancyCode?: string;
  /** 租户id */
  tenancyId?: number;
}
