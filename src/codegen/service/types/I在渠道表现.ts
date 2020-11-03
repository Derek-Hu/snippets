export interface I在渠道表现 {
  /** 订单金额 */
  advanceAmount?: string;
  /** 借款利率 */
  desiredIntRate?: number;
  /** 上下游重合对手数 */
  numberOfCoincidenceOpponents?: string;
  /** 订单信息 */
  orderInfo?: string;
  /** 订单编号 */
  orderNo?: string;
  /** 订单时间 */
  orderTime?: number;
  /** 在渠道客户id */
  platformCustomerID?: string;
  /** 在渠道注册日期 */
  platformCustomerRegistrationDate?: number;
  /** 在渠道首单交易日期 */
  platformFirstTransactionDate?: number;
  /** 销售波动 */
  salesFluctuation?: string;
  /** 在渠道销售增长 */
  salesGrowth?: string;
  /** 交易表现 */
  transactionInformation?: string;
  /** 首要交易对象占销售额比例 */
  transactionObjectProportion?: string;
}
