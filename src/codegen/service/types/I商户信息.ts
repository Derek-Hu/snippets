export interface I商户信息 {
  /** 营业执照号（工商注册号） */
  businessLicense?: string;
  /** 注册资本 */
  capitalInfo?: string;
  /** 币种 */
  currency?: string;
  /** 证件类型 N:三证合一， Y:企业统一信用代码 */
  documentType?: string;
  /** 实际经营地址 */
  enterAddress?: string;
  /** 企业注册地址 */
  enterRegisterAddress?: string;
  /** 企业名称 */
  enterpriseName?: string;
  /** 成立日期 */
  establishDate?: string;
  /** 店名（车商名称） */
  house?: string;
  /** 组织机构代码 */
  organizationCode?: string;
  /** 税务登记号 */
  taxNumber?: string;
  /** 企业统一信用代码 */
  unifiedCreditCode?: string;
}
