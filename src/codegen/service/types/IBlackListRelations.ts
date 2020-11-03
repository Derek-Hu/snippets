export interface IBlackListRelations {
  /** 入黑原因 */
  inReason?: string;
  /** 入黑时间 */
  inTime?: number;
  /** 出黑原因 */
  outReason?: string;
  /** 出黑时间 */
  outTime?: number;
  /** 关联key imei:1 idfv:2 idfa:3 Androidid:4 公司名称:5 */
  relationKey?: number;
  /** 关联value */
  relationValue?: string;
  /** 状态 1：黑 2：灰 */
  status?: number;
}
