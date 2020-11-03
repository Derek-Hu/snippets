export interface I银行账户信息 {
  /** 账户分支地址 */
  accountBranchAddress?: string;
  /** 持卡人名称 */
  accountName?: string;
  /** 账号 */
  accountNo?: string;
  /** 借款申请id */
  applicationId?: number;
  /** 开户银行 */
  bank?: string;
  /** 开户行所在市 */
  bankCity?: string;
  /** 银行预留身份证号 */
  bankIdCard?: string;
  /** 银行预留手机号 */
  bankPhone?: string;
  /** 开户行所在省 */
  bankProvince?: string;
  /** 银行卡类型 */
  cardType?: string;
  /** 创建时间 */
  createDate?: string;

  id?: number;
  /** 用户aid */
  ownerAid?: string;
  /** 账户持有人类型 */
  ownerType?: string;
  /** 账户用途: 打款, 扣款, 其他, 默认打款 */
  purpose?: string;
  /** 账户类型(1-个人；2-企业) */
  type?: number;
  /** 更新时间 */
  updateDate?: string;
  /** 用户id */
  userId?: number;
}
