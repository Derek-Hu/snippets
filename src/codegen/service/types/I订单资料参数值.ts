import { I进件字段信息 } from './I进件字段信息';

export interface I订单资料参数值 {
  /** 分类下级参数 */
  fields?: Array<I进件字段信息>;
  /** 分类名称：用户基本信息 */
  label?: string;
  /** 上级分类名编号：user */
  name?: string;
}
