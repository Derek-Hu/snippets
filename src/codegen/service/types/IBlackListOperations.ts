export interface IBlackListOperations {
  /** 入黑时间 */
  inTime?: number;
  /** 操作员 */
  operator?: string;
  /** 操作时间 */
  operatorTime?: number;
  /** 操作类型 1：入黑 2：出黑入灰 */
  operatorType?: string;
  /** 出黑时间 */
  outTime?: number;
  /** 来源 1：人工入黑 2：系统规则入黑 3：逾期入黑 4：团伙入黑 */
  source?: string;
}
