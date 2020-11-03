export interface IProcConfWorkflowNode {
  /** 审批流程code */
  defCode?: string;
  /** 审批流程名称 */
  defName?: string;
  /** 审批流程描述 */
  description?: string;

  id?: number;
  /** 是否适用于授信流程 */
  isCreditAvail?: boolean;
  /** 是否通用流程 */
  isGeneric?: boolean;
  /** 是否适用于支用流程 */
  isLoanAvail?: boolean;
  /** 审核岗位数 */
  reviewPositionNum?: number;
  /** 缩略图地址 */
  thumbnailUrl?: string;
  /** 验证岗位数 */
  verifyPositionNum?: number;
}
