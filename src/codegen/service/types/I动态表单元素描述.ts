import { I字段约束 } from './I字段约束';
import { I选项元素 } from './I选项元素';
export type FIELDTYPE = 'INTEGER' | 'DECIMAL' | 'BOOLEAN' | 'STRING' | 'OBJECT';

export type FORMAT =
  | 'DATE'
  | 'ADDRESS'
  | 'ID_CARD'
  | 'MOBILE'
  | 'PHONE'
  | 'EMAIL'
  | 'MONEY'
  | 'PERCENT'
  | 'CHOICE'
  | 'STYLED_MEMO';

export interface I动态表单元素描述 {
  /** 字段类型为enum时的默认选项 */
  defaultOption?: string;
  /** 描述 */
  description?: string;
  /** 校验规则 */
  extInfo?: I字段约束;

  fieldCode?: string;
  /** 关于输入类型的hint */
  fieldType?: FIELDTYPE;
  /** 当字段类型为Object时的子字段 */
  fields?: Array<I动态表单元素描述>;
  /** 可选：字段格式hint */
  format?: FORMAT;
  /** 字段排序位次 */
  index?: number;
  /** 字段展示标签 */
  label?: string;
  /** 是否是多值，或允许多选 */
  multiple?: boolean;
  /** 字段名，在数据模型hash中的key-value pair中的key */
  name?: string;
  /** 当前字段可用选项 */
  options?: Array<I选项元素>;
  /** 字段是否可编辑 */
  readonly?: boolean;
  /** 是否必选 */
  required?: boolean;
}
