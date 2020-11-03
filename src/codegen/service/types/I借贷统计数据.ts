import { I借贷汇总明细 } from './I借贷汇总明细';

export interface I借贷统计数据 {
  /** 个人借款总计 */
  personalSummary?: I借贷汇总明细;
  /** 本人仍有N元未结清 */
  personalUnclearedAmount?: number;
  /** 关联人借款总计 */
  relatedSummary?: I借贷汇总明细;
}
