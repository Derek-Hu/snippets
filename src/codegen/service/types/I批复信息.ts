import { IFeeData } from './IFeeData';
import { ISignConditionConfig } from './ISignConditionConfig';

export interface I批复信息 {
  /** 审批费调整比例 */
  approvalRate?: number;
  /** 批复期限 */
  approvalTerm?: string;
  /** 批复期限单位 */
  approvalTermUnit?: string;
  /** 批复额度 */
  approveAmount?: string;
  /** 可用额度 */
  availableAmount?: number;
  /** 合同额度 */
  contractAmount?: string;
  /** 风险等级 */
  customerLevel?: string;
  /** 产品中心批出来的费项合集 */
  feeDataList?: Array<IFeeData>;
  /** 宽限期 */
  gracePeriod?: number;
  /** 提前还款手续费 */
  handlingFee?: string;
  /** 每期利率 */
  interestRate?: string;
  /** 渠道推介费率 */
  lendingChannelFee?: IFeeData;
  /** 账户管理费率 */
  managementFee?: string;
  /** 人工调整原因 */
  manualAjustReason?: Array<string>;
  /** 人工建议额度 */
  manualCheckAmt?: number;
  /** 审批费率 */
  origFee?: string;
  /** 还款频率 */
  paymentFrequency?: string;
  /** 还款方式 */
  paymentMethod?: string;
  /** 罚息率 */
  penaltyFeeRate?: string;
  /** 风险保障费(随后各期) */
  periodRiskRate?: string;
  /** 分期审批费 */
  prematureOriginationFee?: Object;
  /** 分期风险保障费 */
  prematureRiskGuaranteeFee?: Object;
  /** 分期中吉服务费 */
  prematureRiskServiceFee?: Object;
  /** 到手额度 */
  realityAmount?: string;
  /** 风险保障费(第一期) */
  riskRate?: string;
  /** 规则建议金额 */
  ruleAdviceAmount?: number;
  /** 担保抵押配置信息 */
  signConditionConfig?: ISignConditionConfig;
  /** 服务费(随后各期) */
  termRiskServiceFeeRate?: string;
  /** 服务费(第一期) */
  upfrontRiskServiceFeeRate?: string;
}
