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

export interface I审核结点上审核模块开关属性配置 {
  /** 模块code, 模块的唯一标识 */
  code?: CODE;
  /** 是否可编辑 */
  editable?: boolean;
  /** 是否展示 */
  visible?: boolean;
}
