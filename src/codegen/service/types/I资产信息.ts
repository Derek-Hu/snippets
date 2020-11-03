export interface I资产信息 {
  /** 总负债 */
  allDeptAmt?: number;
  /** 近六个月月均发生额 */
  bank6MonthAvgAmt?: number;
  /** 近六个月月均发生额 */
  bankPrevious6MonthAvgAmt?: number;
  /** 近6个月被查询字数 */
  creditQuery180Num?: number;
  /** 最近六个月逾期的账户数 */
  delinquent180AccountNum?: number;
  /** 最近六个月逾期的总金额 */
  delinquent180Amt?: number;
  /** 近6个月最长逾期月数 */
  delinquent180MonthNum?: number;
  /** 最近六个月逾期的笔数 */
  delinquent180Num?: number;
  /** 近12个月最长逾期月数 */
  delinquent360MonthNum?: number;
  /** 近12个月逾期次数 */
  delinquent360Num?: number;

  id?: number;
  /** 还款来源 */
  incomeSource?: Array<string>;
  /** 其它收入来源 */
  otherIncomeSource?: string;
  /** 其他网络借贷平台总借款金额 */
  otherLoanPlatformAmt?: number;
  /** 其他网络借贷平台使用数量 */
  otherLoanPlatformNum?: number;
  /** 是否提供详版征信 */
  provideCreditReport?: string;
}
