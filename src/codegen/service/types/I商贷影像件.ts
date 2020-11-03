import { ITypeCategory } from './ITypeCategory';

export interface I商贷影像件 {
  /** 审核进件 */
  reviewDocuments?: Array<ITypeCategory>;
  /** 用户进件 */
  userDocuments?: Array<ITypeCategory>;
}
