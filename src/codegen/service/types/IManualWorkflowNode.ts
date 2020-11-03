export interface IManualWorkflowNode {
  /** 结点下是否允许编辑 */
  editable?: boolean;
  /** 节点code， eg:manualFirstReview | manualFinalReview */
  nodeId?: string;
  /** 节点名称 */
  nodeName?: string;
}
