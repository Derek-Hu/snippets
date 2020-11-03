export interface I订单操作记录信息 {
  /** 操作时间 yyyyMMdd HH:mm:ss */
  createDate?: string;
  /** 订单ID */
  creditReviewOrderId?: number;

  id?: number;
  /** 操作内容 */
  operationContent?: string;
  /** 操作用户编号 */
  userId?: number;
  /** 操作用户名 */
  userName?: string;
}
