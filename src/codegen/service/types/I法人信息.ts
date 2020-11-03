import { IAddress } from './IAddress';

export interface I法人信息 {
  /** 联系地址 */
  addr?: IAddress;
  /** 所占股份(%) */
  applicantShare?: number;
  /** 平均月收入 */
  averageMonthlyIncome?: string;
  /** 身份证号码 */
  cardNumber?: string;
  /** 证件类型 */
  cardType?: string;
  /** 子女状况 */
  childrenStatus?: string;
  /** 征信查询日期 */
  creditInquiryDate?: string;
  /** 住房情况 */
  houseStatus?: string;
  /** 户口所在地 */
  hukouAddr?: IAddress;
  /** 工作性质 */
  jobOccupation?: string;
  /** 二手车从业年限 */
  jobTenureYears?: string;
  /** 婚姻状况 */
  maritalStatus?: string;
  /** 手机号 */
  mobile?: string;
  /** 姓名 */
  name?: string;
  /** 父母情况 */
  parentStatus?: string;
  /** 户口所在地 */
  permanentAddress?: IAddress;
  /** 居住地址 */
  residenceAddr?: IAddress;
}
