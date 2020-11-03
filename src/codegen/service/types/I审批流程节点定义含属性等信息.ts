export type NODECATEGORY = 'MANUAL_REVIEW_NODE' | 'RISK_POLICY_NODE' | 'SERVICE_NODE' | 'TIMER_NODE';

export interface I审批流程节点定义含属性等信息 {
  /** 创建时间 */
  createTime?: string;
  /** 主键 */
  id?: number;
  /** 修改时间 */
  lastUpdateTime?: string;
  /** 节点属性 */
  nodeAttrs?: string;
  /** 审批流程节点分类, 用来标识risk子流程节点/人审节点等分类 */
  nodeCategory?: NODECATEGORY;
  /** 节点定义标识,对应流程节点Id */
  nodeId?: string;
  /** 节点显示名 */
  nodeLabel?: string;
  /** 审批流程模板的id */
  workflowDefId?: number;
}
