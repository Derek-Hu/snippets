export interface I字段基本描述信息 {
  /** 子元素 */
  children?: Array<I字段基本描述信息>;
  /** 内部编码，为formCode或fieldCode */
  code?: string;
  /** 描述标签 */
  label?: string;
  /** 字段类型 */
  type?: string;
}
