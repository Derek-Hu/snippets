export interface I收入负债比计算请求体 {
  /** 借款人（含关联方）本次申请额度（元） */
  applyCredit?: number;
  /** 年化负债 */
  debtPerYear?: number;
  /** 年化收入 */
  incomePerYear?: number;
  /** “系统评估参考”/“规则引擎调用结果”/“建议额度” */
  recommendAmount?: number;
  /** 借款人（含关联方）剩余本金（元） */
  repayAmount?: number;
  /** 借款人（含关联方）计划提前结清金额 */
  settlementAmount?: number;
  /** 企业及个人年化负债总额(收入负债指标里返回该值) */
  totalDebt?: number;
  /** 本次loan企业合计可验证年收入(收入负债指标里计算返回的该值) */
  totalVerifiableIncome?: number;
}
