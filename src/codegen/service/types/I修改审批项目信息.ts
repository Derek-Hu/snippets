export type BIZTYPE = 'BUSINESS_LOAN' | 'PERSONAL_LOAN' | 'SUPPLY_CHAIN' | 'ONLINE';

export type CREDITREVIEWTYPE = 'CREDIT' | 'LOAN';

export type STATUS = 'RUNNING' | 'CLOSED';

export interface I修改审批项目信息 {
  /** 业务类型, 供应链、个贷、商贷、Online等 */
  bizType?: BIZTYPE;
  /** 项目名称 */
  confName?: string;
  /** 进件类型, 表示授信or支用 */
  creditReviewType?: CREDITREVIEWTYPE;
  /** 项目描述 */
  description?: string;

  procConfId?: number;
  /** 产品编号 */
  productCode?: string;
  /** 项目总状状态 */
  status?: STATUS;
}
