export interface ITaskBo {
  /** 结束时间 */
  endDate?: string;
  /** 流程节点ID */
  nodeId?: string;
  /** 流程节点名称，中文描述 */
  nodeName?: string;
  /** 2019年5月15日后删除 */
  nodeType?: string;
  /** 流程实例ID */
  processId?: string;
  /** 开始时间 */
  startDate?: string;
  /** 审批任务ID */
  taskId?: string;
  /** 审批任务限时 */
  timeLimit?: number;
  /** UA用户ID */
  userId?: number;
  /** UA用户姓名，来自UA */
  userName?: string;
}
