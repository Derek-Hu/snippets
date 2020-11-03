import { IRuleResult } from './IRuleResult';
import { I进件字段信息 } from './I进件字段信息';
import { I补充涉诉信息 } from './I补充涉诉信息';
import { IFeeData } from './IFeeData';
import { I授信审核担保设置 } from './I授信审核担保设置';
import { I收入负债指标 } from './I收入负债指标';
import { I上标前提前结清 } from './I上标前提前结清';
import { IReviewModuleCompleteStatusBo } from './IReviewModuleCompleteStatusBo';
import { ISignConditionConfig } from './ISignConditionConfig';
import { ISignCondition } from './ISignCondition';
export type GRANULARITY = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY' | 'UNLIMITED';

export type QUOTATYPE = 'CIRCULATION' | 'NON_CIRCULATION';

export type RESULT = 'TEMPORARY' | 'PASS' | 'REJECT' | 'CANCEL' | 'SUPPLY' | 'BACK' | 'FRAUD_INVESTIGATION';

export type TYPE = 'BORROWER' | 'GUARANTOR';

export interface I审批数据变更结果 {
  /** acrc拒绝码 */
  acrcRejectCode?: string;
  /** 补充涉诉信息 */
  additionalRiskStats?: Array<I补充涉诉信息>;
  /** 审批费调整比例 */
  approvalRate?: number;
  /** 批复期限 */
  approvalTerm?: string;
  /** 批复期限单位 */
  approvalTermUnit?: string;
  /** 审核金额 */
  approveAmount?: number;
  /** 审批意见 */
  approveCode?: string;
  /** 审批备注 */
  approveComment?: string;
  /** 审批时间 */
  approveDate?: string;
  /** 审核额度 */
  approveQuota?: number;
  /** 审批结果 */
  approveResult?: string;
  /** 审批人 */
  approver?: string;
  /** 是否代扣还款 */
  autoDeduct?: boolean;
  /** 回退目标结点 */
  backTargetId?: string;
  /** 回退目标结点名称 */
  backTargetName?: string;
  /** 基础额度 */
  baseAmount?: number;
  /** 代收费用 */
  collectFee?: number;
  /** 合同金额 */
  contractAmount?: number;

  creditAmount?: number;
  /** 订单ID */
  creditReviewOrderId?: number;

  creditReviewRecordId?: number;
  /** 客户评级 */
  customerLevel?: string;
  /** 订单有效期 */
  duration?: string;

  feeDataList?: Array<IFeeData>;

  finalAmount?: number;
  /** 宽限期 */
  gracePeriod?: number;
  /** 资产评级 */
  grade?: string;
  /** 额度粒度 */
  granularity?: GRANULARITY;
  /** 担保人信息 */
  guarantorPersonal?: Array<I授信审核担保设置>;
  /** 提前还款手续费 */
  handlingFee?: number;
  /** 收入负债指标 */
  incomeAndDebtQuota?: I收入负债指标;
  /** 借款年利率 */
  interestRate?: number;
  /** 最近交易距今月份数 */
  latestTransactionBefore?: string;
  /** 渠道推介费率 */
  lendingChannelFee?: IFeeData;
  /** 未结清借款 */
  loanInfos?: Array<I上标前提前结清>;
  /** 账户管理费 */
  managementFee?: number;
  /** 人工调整原因 */
  manualAjustReason?: Array<string>;
  /** 人工建议额度 */
  manualCheckAmt?: number;
  /** 期限 */
  maturity?: number;
  /** 期限类型 /周/双周/月 */
  maturityType?: string;
  /** 审批节点 */
  nodeName?: string;
  /** 拒绝/撤销原因 */
  operationReason?: string;
  /** 审批费 */
  origFee?: number;
  /** 逾期手续费 */
  overdueCommissionFeeRate?: number;
  /** 补件条件:只有result=SUPPLY才使用 */
  patches?: Array<I进件字段信息>;
  /** 期限类型 /周/双周/月 */
  paymentFrequency?: string;
  /** 还款方式 */
  paymentMethod?: string;
  /** 罚息费率 */
  penaltyFeeRate?: number;
  /** 期交风险保障金 */
  periodRiskRate?: number;
  /** 分期审批费 */
  prematureOriginationFee?: Object;
  /** 分期风险保障费 */
  prematureRiskGuaranteeFee?: Object;
  /** 分期中吉服务费 */
  prematureRiskServiceFee?: Object;
  /** 类型 */
  quotaType?: QUOTATYPE;

  realityAmount?: string;
  /** 规则拒绝码 */
  rejectCode?: Array<string>;

  result?: RESULT;
  /** 审核状态列表 */
  reviewModuleCompleteStatusBoList?: Array<IReviewModuleCompleteStatusBo>;
  /** 风险评级 */
  riskLevel?: string;
  /** 趸交风险保障金 */
  riskRate?: number;
  /** 决策引擎结果 */
  ruleResults?: Array<IRuleResult>;
  /** 评分卡评分 */
  score?: number;
  /** 出资人服务费 */
  serviceFee?: number;
  /** 产品中心担保抵押配置信息 */
  signConditionConfig?: ISignConditionConfig;
  /** 签约条件 */
  signConditionList?: Array<ISignCondition>;

  taskId?: string;
  /** 中和服务费率期交 */
  termRiskServiceFeeRate?: number;

  transType?: string;
  /** 近3个月存在交易金额 */
  transactionAmountIn3Months?: number;
  /** 近3个月存在交易的天数 */
  transactionDaysIn3Months?: string;
  /** 近3个月存在交易的月份数 */
  transactionIn3Months?: string;
  /** 额度主体类型 */
  type?: TYPE;
  /** 趸交账户管理费 */
  upfrontMgmtFee?: number;
  /** 中和服务费率趸交 */
  upfrontRiskServiceFeeRate?: number;

  userEmail?: string;

  userId?: number;

  userName?: string;
}
