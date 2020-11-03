import { I动态表单元素描述 } from './I动态表单元素描述';

export interface I审核模块模块配置表单Schema {
  /** 配置项与文本描述项 */
  fields?: Array<I动态表单元素描述>;
  /** 表单头 */
  title?: string;
}
