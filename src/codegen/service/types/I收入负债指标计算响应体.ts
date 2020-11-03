export interface I收入负债指标计算响应体 {
  /** 平均日/月负债 */
  avgDebt?: number;
  /** 平均日/月收入 */
  avgIncome?: number;
  /** 平均日/月可验证收入 */
  avgVerifiableIncome?: number;
  /** 最近一个月实控人信用卡已用额度占（收银/酒管）收入比重 */
  cashierUsedQuotaRatio?: number;
  /** 企业及个人年化负债总额 */
  totalDebt?: number;
  /** 企业合计可验证年收入 */
  totalVerifiableIncome?: number;
  /** 最近一个月实控人信用卡已用额度占收入比重 */
  usedQuotaRatio?: number;
}
