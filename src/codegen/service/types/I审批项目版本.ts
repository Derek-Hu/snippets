import { I审批项目信息 } from './I审批项目信息';
export type RISKRULETASKTYPE = 'RULE_V1' | 'RULE_V2';

export type STATUS = 'EDITING' | 'ACTIVE' | 'INACTIVE' | 'CHECK' | 'ROLLBACK';

export interface I审批项目版本 {
  /** 调用次数 */
  callCount?: number;
  /** 创建时间 */
  createTime?: string;
  /** 项目配置版本Id */
  id?: number;
  /** 最后修改时间 */
  lastUpdateTime?: string;
  /** 项目信息 */
  procConf?: I审批项目信息;
  /** 项目配置Id */
  procConfId?: number;

  procConfVersionId?: number;
  /** risk规则执行类型 */
  riskRuleTaskType?: RISKRULETASKTYPE;
  /** 退回原因 */
  rollBackReason?: string;

  sameManualReviewDict?: boolean;
  /** 状态 */
  status?: STATUS;
  /** 编辑人UserId */
  userId?: string;
  /** 编辑人姓名 */
  userName?: string;
  /** 版本 */
  version?: number;
  /** 版本描述 */
  versionDesc?: string;
  /** 审批流程模板的id */
  workflowDefId?: number;
}
