export interface I签约条件 {
  /** 签约代码 */
  code?: string;
  /** 签约名称模板 */
  codeName?: string;
  /** 模板值1：替换模板第1个@ */
  codeValue?: string;
  /** 模板值2：替换模板第2个@ */
  codeValue2?: string;
  /** 模板值3：替换模板第3个@ */
  codeValue3?: string;
  /** 模板替换后的文本值 */
  description?: string;
  /** 是否有效:effect 或ineffect */
  effect?: string;
  /** 签约条件类型，枚举值有： DOCUMENT, ISSUE_CARD, DEDUCT_CARD... */
  type?: string;
  /** 模板值4:替换[IMAGE_BLANK] */
  uploadCount?: number;
  /** 可见性：visiable，invisiable */
  visable?: string;
}
