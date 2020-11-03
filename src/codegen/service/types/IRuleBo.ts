import { IRuleResult } from './IRuleResult';

export interface IRuleBo {
  /** 批复期限 */
  approvalTerm?: string;
  /** 批复期限单位 */
  approvalTermUnit?: string;
  /** 提额预计 */
  approveAmount?: number;
  /** 审批结果 */
  approveResult?: string;
  /** 基础额度 */
  baseAmount?: number;
  /** 业务类型 */
  businessType?: string;
  /** 合约金额 */
  contractAmount?: number;
  /** 评级 */
  customerLevel?: string;
  /** 数据来源 */
  dataSource?: string;
  /** 还款宽限期 */
  gracePeriod?: number;
  /** 提前还款手续费 */
  handlingFee?: string;
  /** 提前还款利率 */
  interest?: string;
  /** 借款年利率 */
  interestRate?: number;
  /** 提前还款违约金 */
  liquidatedDamages?: string;
  /** 账户管理费(月) */
  managementFee?: number;
  /** 婚姻状况 */
  maritalStatus?: string;
  /** 建议期限 */
  maturity?: number;
  /** 建议期限单位 */
  maturityType?: string;
  /** 审批费 */
  origFee?: number;
  /** 逾期手续费，单位%，示例返回0.4，表示罚息费率为0.4% */
  overdueCommissionFeeRate?: string;
  /** 建议还款方式 */
  paymentMethod?: string;
  /** 罚息率 */
  penaltyFeeRate?: number;
  /** 风险保障费（每期） %，pc值的单位为期化 */
  periodRiskRate?: number;
  /** 常住地址 */
  permanentAddress?: string;
  /** 管理费 */
  prepaymentMgMtFee?: string;
  /** 原因码 */
  rejectCode?: string;
  /** 关联申请编号 */
  relatedApplicationId?: Array<string>;
  /** 命中人 */
  riskPerson?: string;
  /** 风险保障费（一次性） %，pc值的单位为一次性 */
  riskRate?: number;
  /** 命中规则 */
  riskRule?: string;
  /** 规则建议金额 */
  ruleAdviceAmount?: number;
  /** 决策引擎结果 */
  ruleResults?: Array<IRuleResult>;
  /** 评分卡评分 */
  score?: number;
  /** 出资人服务费 */
  serviceFee?: number;
  /** 固定电话 */
  telephone?: string;
  /** 中合服务费（期缴） % */
  termRiskServiceFeeRate?: number;
  /** 转人工标识 */
  transType?: string;
  /** 趸交账户管理费 */
  upfrontMgmtFee?: number;
  /** 中合服务费（一次性） % */
  upfrontRiskServiceFeeRate?: number;
  /** 生肖 */
  zodiac?: string;
}
