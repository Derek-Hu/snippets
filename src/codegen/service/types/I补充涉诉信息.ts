export interface I补充涉诉信息 {
  /** 是否提供执行完凭证 */
  caseCompletedOrNot?: string;
  /** 案件内容 */
  caseContent?: string;
  /** 案号 */
  caseNo?: string;
  /** 立案状态 */
  filingStatus?: string;
  /** 立案/执行时间 */
  filingTime?: string;
  /** 涉案金额 */
  involvedAmount?: number;
}
