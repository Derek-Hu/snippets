export interface I单个审核模块配置更新请求 {
  /** 具体的配置项字典,逐模块自行定义 */
  configItems?: Object;
  /** 人审岗位 */
  nodeId?: string;
  /** 审批模块code */
  reviewModuleCode?: string;
}
