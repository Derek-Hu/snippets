export type BIZTYPE = 'BUSINESS_LOAN' | 'PERSONAL_LOAN' | 'SUPPLY_CHAIN' | 'ONLINE';

export type CREDITREVIEWTYPE = 'CREDIT' | 'LOAN';

export type STATUS = 'RUNNING' | 'CLOSED';

export type STYLE = 'SIMPLE' | 'COMPLEX';

export interface I审批项目信息 {
  /** 业务类型, 供应链、个贷、商贷、Online等 */
  bizType?: BIZTYPE;
  /** 项目编号, 从P0001开始 */
  confCode?: string;
  /** 项目名称 */
  confName?: string;
  /** 创建时间 */
  createTime?: string;
  /** 进件类型, 表示授信or支用 */
  creditReviewType?: CREDITREVIEWTYPE;
  /** 项目描述 */
  description?: string;
  /** 审批项目配置Id */
  id?: number;
  /** 最后修改时间 */
  lastUpdateTime?: string;
  /** 产品编号 */
  productCode?: string;
  /** 项目总状状态 */
  status?: STATUS;
  /** 页面风格 */
  style?: STYLE;
  /** 租户 */
  tenant?: string;
}
