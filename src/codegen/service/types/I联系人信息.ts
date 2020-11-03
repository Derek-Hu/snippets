export interface I联系人信息 {
  /** 联系人身份证号 */
  cardNum?: string;
  /** 公司名称 */
  contactCompanyName?: string;
  /** 客户编号 */
  contactId?: number;
  /** 是否紧急联系人 */
  isEmergency?: boolean;
  /** 联系人职位 */
  jobTitle?: string;
  /** 联系人姓名 */
  name?: string;
  /** 家庭地址 */
  permanentAddress?: string;
  /** 联系人手机 */
  phone?: string;
  /** 与本人关系 */
  relation?: string;
  /** 备注 */
  remark?: string;
  /** 工作地址 */
  workAddress?: string;
}
