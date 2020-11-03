export type GRANULARITY = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY' | 'UNLIMITED';

export type QUOTATYPE = 'CIRCULATION' | 'NON_CIRCULATION';

export type TYPE = 'BORROWER' | 'GUARANTOR';

export interface I审批额度 {
  /** 审核金额 */
  approveAmount?: number;
  /** 审核额度 */
  approveQuota?: number;
  /** 合同金额 */
  contractAmount?: number;
  /** 额度粒度 */
  granularity?: GRANULARITY;
  /** 类型 */
  quotaType?: QUOTATYPE;
  /** 额度主体类型 */
  type?: TYPE;
}
