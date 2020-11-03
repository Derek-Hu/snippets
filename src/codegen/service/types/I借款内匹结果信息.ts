import { IMatchLoanVo } from './IMatchLoanVo';
import { IAddressMatchLoanInfo } from './IAddressMatchLoanInfo';
import { I借贷统计数据 } from './I借贷统计数据';

export interface I借款内匹结果信息 {
  /** 关联地址借款信息  */
  addressMatchLoanInfos?: Array<IAddressMatchLoanInfo>;
  /** 企业借款信息  */
  companyMatchLoanInfos?: Array<IMatchLoanVo>;
  /** 关联人借款信息  */
  contactMatchLoanInfos?: Array<IMatchLoanVo>;

  exception?: boolean;
  /** 本人借款信息  */
  matchLoanInfos?: Array<IMatchLoanVo>;

  message?: string;

  status?: string;

  success?: boolean;
  /** 上面的借贷数据统计 */
  summary?: I借贷统计数据;
}
