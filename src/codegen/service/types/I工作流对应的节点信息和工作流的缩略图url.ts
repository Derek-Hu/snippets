import { IWorkflowNodeInfo } from './IWorkflowNodeInfo';

export interface I工作流对应的节点信息和工作流的缩略图url {
  /** 流程defCode, eg:rc_workflow_scorecard_credit */
  defCode?: string;
  /** 流程名称 */
  name?: string;
  /** 该工作流下所有的节点 */
  nodes?: Array<IWorkflowNodeInfo>;
  /** 缩略图url */
  thumbnailUrl?: string;
}
