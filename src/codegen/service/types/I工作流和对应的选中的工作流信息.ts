import { IProcConfWorkflowNode } from './IProcConfWorkflowNode';

export interface I工作流和对应的选中的工作流信息 {
  /** 自动化流程 */
  auto?: Array<IProcConfWorkflowNode>;
  /** 复杂人审流程 */
  complex?: Array<IProcConfWorkflowNode>;
  /** 简单人审流程 */
  simple?: Array<IProcConfWorkflowNode>;
  /** 选中的审批流程的id */
  workflowId?: number;
}
