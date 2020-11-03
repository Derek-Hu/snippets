export type FIELDTYPE =
  | 'BOOLEAN'
  | 'INTEGER'
  | 'LONG'
  | 'BIG_DECIMAL'
  | 'STRING'
  | 'DATE'
  | 'ENUM'
  | 'ENUM_LIST'
  | 'STRING_LIST'
  | 'PERCENT'
  | 'ADDRESS'
  | 'DOCUMENT'
  | 'AUTHORIZATION'
  | 'AID'
  | 'CHANNEL'
  | 'PRODUCT'
  | 'MOBILE'
  | 'PHONE'
  | 'ID_CARD'
  | 'EMAIL'
  | 'MONEY';

export interface I进件字段信息 {
  /** 字段分类 */
  category?: string;
  /** 字段code */
  fieldCode?: string;
  /** 字段类型 */
  fieldType?: FIELDTYPE;
  /** 字段显示标签 */
  label?: string;
  /** 字段名name */
  name?: string;
}
