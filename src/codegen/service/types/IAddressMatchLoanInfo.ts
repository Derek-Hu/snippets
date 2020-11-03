export interface IAddressMatchLoanInfo {
  /** 匹配的内容 */
  conditions?: string;
  /** 最后一期还款日 */
  lastDueDate?: string;
  /** 借款申请id */
  loanBaseId?: string;
  /** 借款id */
  loanId?: string;
  /** 匹配内容-商贷 */
  matchContent?: string;
  /** 最大逾期天数 */
  maxOverdueDays?: string;
  /** 关联关系 */
  relation?: string;
  /** 商贷内匹选中 */
  selected?: boolean;

  surplusDays?: number;
  /** 合计逾期天数 */
  totalOverdueDays?: string;

  unclear?: boolean;
  /** 剩余未还本金 */
  unclearedPrincipal?: string;
}
