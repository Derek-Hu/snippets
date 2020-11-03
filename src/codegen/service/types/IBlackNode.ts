export interface IBlackNode {
  /** 期限 */
  aging?: number;
  /** 失效时间 */
  outTime?: number;
  /** 原因 */
  reason?: string;
  /** relationKey imei:1
idfv:2
idfa:3
Androidid:4
公司名称:5
数盟id:7
gps地址:9 */
  relationKey?: number;

  relationValue?: string;
  /** 状态 1:黑
2:灰
3:白
4:VIP */
  status?: number;
}
