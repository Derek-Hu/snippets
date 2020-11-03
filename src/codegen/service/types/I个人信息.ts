import { IAddress } from './IAddress';

export interface I个人信息 {
  /** 年收入 */
  annualIncome?: number;
  /** 子女情况 */
  childrenStatus?: string;
  /** 授信额度 */
  creditAmount?: string;
  /** 教育程度 */
  educationLevel?: string;
  /** 邮箱 */
  email?: string;
  /** 从事本行业年限 */
  employedYears?: string;
  /** 个人购房情况 */
  housePurchase?: string;
  /** 住房情况 */
  houseStatus?: number;
  /** 申请人id */
  id?: number;
  /** 婚姻情况 */
  maritalStatus?: string;
  /** 主手机号 */
  mobilePhone?: string;
  /** 月收入 */
  monthlyIncome?: string;
  /** 父母情况 */
  parentStatus?: string;
  /** 户籍地址 */
  permanentAddr?: IAddress;
  /** 居住地址 */
  residenceAddr?: IAddress;
  /** 居住年限 */
  residenceYearsLimit?: string;
  /** 微信 */
  wechat?: string;
}
