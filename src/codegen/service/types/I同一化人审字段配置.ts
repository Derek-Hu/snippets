export interface I同一化人审字段配置 {
  /** 字典描述 */
  description?: string;
  /** 审核展示字段列表 */
  fieldCodes?: Array<string>;
  /** 展示字典存储编号, 64个字节长度. 新增/修改的时候此code不填, 后端代码自动生成 */
  nodeFilterCode?: string;
  /** 可补件的字段 */
  patchFieldCodes?: Array<string>;
  /** 补件字典存储编号, 64个字节长度. 新增/修改的时候此code不填, 后端代码自动生成 */
  patchFilterCode?: string;
}
