export interface I收入负债比计算响应体 {
  /** 借款人（含关联方）本次申请额度（元） */
  applyCredit?: number;
  /** 借款人（含关联方）本次申请决策引擎额度（元）, 需要前端判断一下：若该订单仍未调用规则引擎，显示为空 */
  approveAmount?: number;
  /** 内部DBR达到60%（75%）时的批复额度 */
  dbrApprovalAmount?: number;
  /** 外部DBR */
  externalDbr?: number;
  /** 内部DBR */
  internalDbr?: number;
  /** 借款人（含关联方）本次可放款金额 */
  loanableAmount?: number;
  /** 是否需要配偶做保 */
  needGuarantee?: boolean;
  /** 借款人（含关联方）计划提前结清金额 */
  settlementAmount?: number;
  /** 借款人（含关联方）剩余本金（元） */
  surplusAmount?: number;
  /** 借款人（含关联方）本次总额度 */
  totalAmount?: number;
}
