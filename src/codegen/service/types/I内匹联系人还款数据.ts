import { I内匹还款明细 } from './I内匹还款明细';

export interface I内匹联系人还款数据 {
  /** 放款金额 */
  amount?: string;
  /** 放款时间 */
  amountDate?: string;
  /** 申请金额 */
  applyAmount?: string;
  /** 申请时间 */
  applyTime?: number;
  /** 上标日期 */
  biddate?: string;
  /** 匹配的内容 */
  conditions?: string;
  /** 最后一期还款日 */
  lastDueDate?: string;
  /** 借款申请状态 */
  loanApplyStatus?: string;
  /** 借款申请id */
  loanBaseId?: string;
  /** 借款id */
  loanId?: string;
  /** 借款状态 */
  loanStatus?: string;
  /** 匹配内容-商贷 */
  matchContent?: string;
  /** 最大逾期天数 */
  maxOverdueDays?: string;
  /** 借款人姓名 */
  name?: string;
  /** 产品类型 */
  productType?: string;
  /** 与借款人的关系 */
  relation?: string;
  /** 还款明细 */
  repaymentDetail?: Array<I内匹还款明细>;
  /** 商贷内匹选中 */
  selected?: boolean;

  surplusDays?: number;
  /** 放款期限 */
  terms?: string;
  /** 合计逾期天数 */
  totalOverdueDays?: string;

  unclear?: boolean;
  /** 剩余未还本金 */
  unclearedPrincipal?: string;
}
