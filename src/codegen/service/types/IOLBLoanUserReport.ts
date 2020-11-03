import { IOLBLoanInfo } from './IOLBLoanInfo';

export interface IOLBLoanUserReport {
  actorId?: string;

  applyLoanCount?: number;

  cellphone?: Array<string>;

  hasPendingAntiFraudOrder?: boolean;

  iid?: string;

  loanList?: Array<IOLBLoanInfo>;

  name?: string;

  registerTime?: number;

  ssn?: string;

  unrepaymentLonBalance?: number;
}
