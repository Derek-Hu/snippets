export interface ISCP借款人信息 {
  /** 客户编号 */
  actorId?: string;
  /** (个人时)居住地址/实际经营地址 */
  address?: string;
  /** 银行名称 */
  bankName?: string;
  /** 证件号码 */
  cardNumber?: string;
  /** 证件类型 */
  cardType?: string;
  /** 客户类别 */
  custType?: string;
  /** 学历 */
  highestEducation?: string;
  /** 是否本地户籍 */
  isLocalRegister?: boolean;
  /** 担任职位 */
  jobTitle?: string;
  /** 目前在点融的借款余额 */
  loanBalance?: number;
  /** 婚姻状况 */
  marriage?: string;
  /** 手机号 */
  phone?: string;
  /** 客户名称（中文） */
  realName?: string;
  /** (个人时)户籍地址/企业注册地址 */
  registerAddress?: string;
  /** 住所 */
  residence?: string;
  /** 道路许可证号码 */
  roadLicense?: string;
  /** 道路许可证有效结束日期 */
  roadLicenseEndDate?: string;
  /** 道路许可证有效期限开始日期 */
  roadLicenseStartDate?: string;
  /** 借款人平台三方编号 */
  rpId?: string;
  /** 受托人证件号码 */
  trustCardNumber?: string;
  /** 受托人公司名 */
  trusteeCompany?: string;
  /** 类型 */
  type?: string;
}
