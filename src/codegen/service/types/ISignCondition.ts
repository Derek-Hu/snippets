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

export interface ISignCondition {
  /** 条件内容描述 */
  description?: string;
  /** 签约关联人姓名 */
  ownerName?: string;
  /** 签约关联人身份证号 */
  ownerSsn?: string;
  /** 签约关联人类型 */
  ownerType?: OWNERTYPE;
  /** 是否必须 */
  required?: boolean;
  /** 签约条件类型 */
  type?: TYPE;
}
