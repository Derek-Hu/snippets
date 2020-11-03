export interface I收入负债指标 {
  /** 企业(收银/酒管)系统年营业额 */
  annualTurnover?: number;
  /** 平均日/月负债 */
  avgDebt?: number;
  /** 平均日/月收入 */
  avgIncome?: number;
  /** 平均日/月可验证收入 */
  avgVerifiableIncome?: number;
  /** 最近一个月实控人信用卡已用额度占（收银/酒管）收入比重 */
  cashierUsedQuotaRatio?: number;
  /** 近一个月(收银/酒管)收入 */
  latestCashierIncome?: number;
  /** 近一个月可验证收入 */
  latestVerifiableIncome?: number;
  /** 企业其他可验证年收入 */
  otherVerifiableIncome?: number;
  /** 企业及个人年化负债总额 */
  totalDebt?: number;
  /** 企业合计可验证年收入 */
  totalVerifiableIncome?: number;
  /** 最近一个月实控人信用卡已用额度占收入比重 */
  usedQuotaRatio?: number;
  /** 企业可验证年收入 */
  verifiableAnnualIncome?: number;
}
