export interface I收入负债指标计算请求体 {
  /** 企业(收银/酒管)系统年营业额(元) */
  annualTurnover?: number;
  /** 近第一个月(收银/酒管)收入(元) */
  latestCashierIncome?: number;
  /** 近第一个月可验证收入 */
  latestVerifiableIncome?: number;
  /** 企业其他可验证年收入(元) */
  otherVerifiableIncome?: number;
  /** 企业可验证年收入(元) */
  verifiableAnnualIncome?: number;
}
