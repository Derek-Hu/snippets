export interface I银行借款申请单信息 {
  /** 借款金额(元) */
  amount?: number;
  /** 申请单编号 */
  appId?: string;
  /** 信贷员审批日期 */
  creditOfficerApprovalDate?: string;
  /** 首付款 */
  downPayment?: number;
  /** 有无信贷记录 */
  hasCreditRecords?: string;
  /** 放款渠道 */
  lendingChannel?: string;
  /** 贷前资料提交日期 */
  loanInfoSubmitDate?: string;
  /** 还款期限(月) */
  repaymentPeriod?: string;
  /** 批复总借款金额(元) */
  reviewedAmount?: string;
  /** 批复首付款 */
  reviewedDownPayment?: number;
  /** 批复首付款比例 */
  reviewedDownPaymentPercent?: number;
  /** 批复借款年利率 */
  reviewedIntRate?: string;
  /** 批复还款期限(月) */
  reviewedRepaymentPeriod?: string;
  /** 提交日期 */
  submitDate?: string;
  /** 系统审批结果 */
  sysApprovalResult?: string;
}
