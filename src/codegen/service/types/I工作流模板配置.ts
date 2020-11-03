export interface I工作流模板配置 {
  /** 创建时间 */
  createTime?: string;

  id?: string;
  /** 是否存在 0不存在 1存在 */
  isExist?: number;

  version?: number;
  /** 模板定义 */
  workflowModuleDefine?: string;
  /** 工作流模板名称 */
  workflowModuleName?: string;
}
