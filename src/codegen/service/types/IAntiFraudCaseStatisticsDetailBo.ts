export interface IAntiFraudCaseStatisticsDetailBo {
  /** 是否追加贷 */
  additionalLoan?: string;
  /** 批复金额 */
  approvalAmount?: string;
  /** 进件渠道 */
  channel?: string;
  /** 合同金额 */
  contractAmount?: string;
  /** 首复借 */
  firstOrRepeat?: string;
  /** 岗位 */
  job?: string;
  /** 标签码及说明 */
  labelCode?: string;

  loanAppId?: string;
  /** 产品 */
  productName?: string;
  /** 审核结果 */
  reviewResult?: string;
  /** 调查时间 */
  sumbitDate?: string;
  /** 调查人 */
  surveyName?: string;
  /** 团伙编号 */
  teamId?: string;
  /** 团伙人数 */
  teamMembersNum?: string;
}
