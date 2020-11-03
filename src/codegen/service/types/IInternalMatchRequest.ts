import { IMatchContactVo } from './IMatchContactVo';

export interface IInternalMatchRequest {
  companyName?: string;

  companyUniformCreditCode?: string;

  contact?: Array<IMatchContactVo>;

  iid?: string;

  loanBaseId?: string;

  phone?: string;

  ssn?: string;

  tenant?: string;

  uid?: string;
}
