import { IProcModuleDefNode } from './IProcModuleDefNode';

export interface IModuleWrapper {
  /** 分类code, 分类的唯一标识 */
  categoryCode?: string;
  /** 分类描述 */
  categoryDescription?: string;
  /** 分类名称 */
  categoryName?: string;
  /** 子项 */
  modules?: Array<IProcModuleDefNode>;
}
