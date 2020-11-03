export interface I人审差异化字段配置 {
  /** 字典描述 */
  description?: string;
  /** 字段列表 */
  fieldCodes?: Array<string>;
  /** 展示字典存储编号, 64个字节长度. 如果是为默认查询配置, nodeFilterCode可以为null */
  nodeFilterCode?: string;
  /** 节点定义标识,对应流程节点Id. 如果是为默认查询配置, nodeId为null */
  nodeId?: string;
  /** 可补件的字段 */
  patchFieldCodes?: Array<string>;
  /** 补件字典存储编号, 64个字节长度. */
  patchFilterCode?: string;
}
