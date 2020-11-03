export interface I上标前提前结清 {
  /** 是否提前结清, true=提前结清 */
  advancePayment?: boolean;
  /** 放款金额 */
  amount?: string;
  /** 放款时间 */
  amountDate?: string;
  /** 借款编号(贷后id) */
  loanId?: string;
  /** 借款状态 */
  loanStatus?: string;
  /** 借款人 */
  name?: string;
  /** 产品类型 */
  productType?: string;
  /** 放款期限 */
  terms?: string;
  /** 剩余未还本金 */
  unclearedPrincipal?: string;
}
