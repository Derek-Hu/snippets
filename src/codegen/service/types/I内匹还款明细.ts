export interface I内匹还款明细 {
  /** 应收罚息 */
  defaultInterest?: string;
  /** 到期还款日期 */
  dueDate?: string;
  /** 月管理费 */
  managefee?: Object;
  /** 当前逾期天数 */
  overdueDay?: number;
  /** 期数 */
  period?: string;
  /** 应收本金 */
  principal?: string;
  /** 实收款项 */
  repaymentAmount?: string;
  /** 实际还款日期 */
  repaymentDate?: string;
  /** 应收总额 */
  totalAmount?: string;
  /** 应收利息 */
  totalInterest?: string;
  /** 未结利息 */
  unpayinterest?: string;
  /** 未结本金 */
  unpayprincipal?: string;
}
