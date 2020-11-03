import { ILoanFeeItemVo } from './ILoanFeeItemVo';

export interface ILoanAppVo {
  appAmount?: number;

  appCity?: string;

  appDate?: number;

  approvalAmount?: number;

  attributes?: string;

  borrowerId?: string;

  borrowerName?: string;

  channelCode?: string;

  contractAmount?: number;

  externalId?: string;

  feeList?: Array<ILoanFeeItemVo>;

  funderIid?: string;

  funderTag?: string;

  issueTime?: number;

  loanAppId?: number;

  maturity?: number;

  maturityType?: string;

  offerAcceptTime?: number;

  paymentFrequency?: string;

  paymentMethod?: string;

  preRejectCodes?: Array<string>;

  productCode?: string;

  productVersion?: number;

  purpose?: string;

  rejectCodes?: Array<string>;

  riskRating?: string;

  status?: string;

  tenant?: string;
}
