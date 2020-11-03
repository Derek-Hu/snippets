export type RISKRULETASKTYPE = 'RULE_V1' | 'RULE_V2';

export interface I新增审批项目版本 {
  procConfId?: number;
  /** risk规则执行类型 */
  riskRuleTaskType?: RISKRULETASKTYPE;
  /** 用户ID */
  userId?: number;
  /** 用户名 */
  userName?: string;
  /** 版本号 */
  version?: number;
  /** 版本描述 */
  versionDesc?: string;
  /** 审批流程模板的id */
  workflowDefId?: number;
}
