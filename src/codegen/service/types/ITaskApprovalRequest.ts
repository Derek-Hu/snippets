import { I进件字段信息 } from './I进件字段信息';
export type RESULT = 'TEMPORARY' | 'PASS' | 'REJECT' | 'CANCEL' | 'SUPPLY' | 'BACK' | 'FRAUD_INVESTIGATION';

export interface ITaskApprovalRequest {
  /** 补件条件:只有result=SUPPLY才使用 */
  patches?: Array<I进件字段信息>;
  /** 审批结果 */
  result: RESULT;
  /** 任务Id */
  taskId: string;
}
