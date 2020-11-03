export type GRANULARITY = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY' | 'UNLIMITED';

export type QUOTATYPE = 'CIRCULATION' | 'NON_CIRCULATION';

export type TYPE = 'BORROWER' | 'GUARANTOR';

export interface IQuotaRequest {
  /** 额度粒度 */
  granularity?: GRANULARITY;
  /** 初始额度 */
  initAmount?: number;
  /** 类型 */
  quotaType?: QUOTATYPE;
  /** 额度主体类型 */
  type?: TYPE;
}
