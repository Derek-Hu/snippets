import { IAddress } from './IAddress';

export interface I关联企业 {
  /** 关系类型-公司:母公司、分公司、直接间接控制的关联公司、担保公司：GUARANTOR，OTHER */
  affiliateType?: string;
  /** 工商注册号 */
  businessLicenseNum?: string;
  /** 企业名称 */
  certifiedName?: string;
  /** 店名 */
  commonName?: string;
  /** 企业类型 */
  companyType?: string;
  /** 是否3证合一 */
  integratedLicense?: boolean;
  /** 实际经营地址 */
  operationAddr?: IAddress;
  /** 经营年限（年） */
  operationYears?: number;
  /** 组织机构代码 */
  orgCodeCertNum?: string;
  /** 注册地址 */
  registeredAddr?: IAddress;
  /** 税务登记证号码 */
  taxRegCertNum?: string;
  /** 统一社会信用代码 */
  uniformCreditCode?: string;
}
