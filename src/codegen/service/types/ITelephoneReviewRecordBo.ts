export interface ITelephoneReviewRecordBo {
  /** 订单id */
  creditReviewOrderId?: number;

  id?: number;

  iid?: string;

  loanAppId?: string;
  /** 备注 */
  remark?: string;
  /** 电核时间 */
  reviewTime?: string;
  /** 电访员 */
  reviewUser?: string;

  source?: string;

  ssn?: string;
  /** 是否电核 */
  telephoneCheck?: number;
  /** 用户id */
  userId?: number;

  validity?: number;
}
