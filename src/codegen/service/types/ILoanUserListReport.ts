import { IOLBLoanUserInfosReport } from './IOLBLoanUserInfosReport';

export interface ILoanUserListReport {
  currentPage?: number;

  data?: IOLBLoanUserInfosReport;

  message?: string;

  pageSize?: number;

  status?: string;

  totalCount?: number;
}
