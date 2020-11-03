export interface I借贷汇总明细 {
  /** 申请总数 */
  applyCount?: number;
  /** 申请通过总数 */
  approvedCount?: number;
  /** 放款总数 */
  issuedCount?: number;
  /** 逾期总数 */
  overdueTimes?: number;
  /** 拒绝总数 */
  rejectedCount?: number;
  /** 未结清总数 */
  unclearedCount?: number;
  /** 撤销总数 */
  withdrawCount?: number;
}
