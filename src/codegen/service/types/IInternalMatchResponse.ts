import { IMatchLoanVo } from './IMatchLoanVo';

export interface IInternalMatchResponse {
  companyMatchLoanVos?: Array<IMatchLoanVo>;

  contactMatchLoanVos?: Array<IMatchLoanVo>;

  matchLoanVos?: Array<IMatchLoanVo>;

  message?: string;

  status?: string;
}
