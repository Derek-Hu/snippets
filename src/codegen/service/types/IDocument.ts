export interface IDocument {
  /** 类目 */
  category?: string;
  /** 删除标记 */
  deleted?: number;
  /** 文档id */
  id?: number;
  /** 存储位置 */
  location?: string;
  /** 文档名称 */
  name?: string;
  /** 文档状态 */
  status?: string;
  /** 文件类型 */
  type?: string;
  /** 文件类型名字 */
  typeName?: string;
  /** 存储位置url */
  url?: string;
  /** 用户id */
  userId?: number;
}
