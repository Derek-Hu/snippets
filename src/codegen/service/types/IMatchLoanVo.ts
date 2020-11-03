import { IRepaymentDetailVo } from './IRepaymentDetailVo';

export interface IMatchLoanVo {
  amount?: string;

  amountDate?: number;

  applyAmount?: string;

  applyTime?: number;

  biddate?: string;

  contractAmount?: string;

  daysRemaining?: number;

  lastDueDate?: string;

  loanApplyStatus?: string;

  loanBaseId?: string;

  loanStatus?: string;

  maturity?: string;

  maxOverdueDays?: number;

  name?: string;

  paidOff?: boolean;

  productType?: string;

  rejectCode?: Array<string>;

  relation?: string;

  remainingDays?: number;

  repaymentDetail?: Array<IRepaymentDetailVo>;

  request?: string;

  terms?: string;

  totalOverdueDays?: number;

  unclearedPrincipal?: string;
}
