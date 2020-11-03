import { I可选操作项 } from './I可选操作项';
export type CODE =
  | 'DATA_EXAMINE'
  | 'TELEPHONE_REVIEW'
  | 'NOT_EDIT_TELEPHONE_REVIEW'
  | 'FILE_REVIEW'
  | 'PERSONAL_GUARANTEE'
  | 'PRICING'
  | 'APPROVAL_INFORMATION'
  | 'APPROVAL_INFORMATION_NOT_EDIT'
  | 'PRE_SETTLEMENT'
  | 'DEDUCTION_ACCOUNT'
  | 'SIGN_CONDITION'
  | 'PERSONAL_LOAN_MATCH'
  | 'BUSINESS_LOAN_MATCH'
  | 'REVIEW_COMMENT'
  | 'JOB_COMMENT'
  | 'ORDER_OPERATION_LOG'
  | 'BORROWER_ORDER_INFO'
  | 'FILE_UPLOAD';

export interface IProcModuleControlNode {
  /** 模块code, 模块的唯一标识 */
  code?: CODE;
  /** 具体的配置项字典,逐模块自行定义 */
  configItems?: Object;
  /** 对应模块审批节点的配置项 */
  nodeConfigs?: Array<I可选操作项>;
}
