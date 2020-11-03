export interface IContactPerson {
  /** 证件号 */
  cardNum?: string;
  /** 证件类型 */
  cardType?: string;
  /** 主键id */
  id?: number;
  /** 是否紧急联系人 */
  isEmergency?: boolean;
  /** 借款编号 */
  loanAppId?: number;
  /** 姓名 */
  name?: string;
  /** 联系电话 */
  phone?: string;
  /** 与申请人关系 */
  relation?: string;
  /** 用户id */
  userId?: number;
}
