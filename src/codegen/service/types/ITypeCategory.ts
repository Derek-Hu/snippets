import { ITypeCategoryFile } from './ITypeCategoryFile';

export interface ITypeCategory {
  /** 该类型下的文件 */
  documents?: Array<ITypeCategoryFile>;
  /** 类型名 */
  typeName?: string;
}
