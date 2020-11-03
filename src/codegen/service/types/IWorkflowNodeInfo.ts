export interface IWorkflowNodeInfo {
  /** 节点类型, eg:人审节点/风控节点 */
  category?: string;
  /** 节点类型内部表示, eg:MANUAL_REVIEW_NODE/RISK_POLICY_NODE */
  categoryCode?: string;
  /** 节点名称 */
  name?: string;
  /** 对应流程节点的key */
  nodeId?: string;
}
