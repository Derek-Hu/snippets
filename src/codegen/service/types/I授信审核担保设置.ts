export type OWNERTYPE = 'BORROWER' | 'TRUSTEE' | 'MORTGAGOR' | 'AGENT' | 'GUARANTOR';

export type TYPE =
  | 'DOCUMENT'
  | 'ISSUE_CARD'
  | 'DEDUCT_CARD'
  | 'FIELD'
  | 'LITE_SIGN'
  | 'DEPOSITORY'
  | 'GUARANTEE'
  | 'MORTGAGE'
  | 'TRUSTEE'
  | 'FACE_RECOGNITION'
  | 'AUTHORIZATION'
  | 'SQV'
  | 'CUSTOM';

export interface I授信审核担保设置 {
  /** 证件号码 */
  cardNum?: string;
  /** 家庭电话 */
  familyPhone?: string;
  /** 手机号 */
  mobilePhone?: string;
  /** 担保人姓名 */
  name?: string;
  /** 签约关联人类型 */
  ownerType?: OWNERTYPE;
  /** 与借款人关系 */
  relationship?: Object;
  /** 担保申贷公司持股比例 */
  shares?: number;
  /** 签约条件类型 */
  type?: TYPE;
}
