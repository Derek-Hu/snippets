export type TENANT = 'RL' | 'DR' | 'DLXD' | 'BHXT' | 'DLMJJD' | 'MNW' | 'magicdata' | 'deyunsheng' | 'ftc';

export interface IReservationLogRespVo {
  /** 预占用额度 */
  amount?: number;
  /** 业务主键 */
  bizId?: string;
  /** 业务类型 */
  bizType?: string;
  /** 时间粒度 */
  granularity?: string;
  /** 额度id */
  quotaId?: number;
  /** 剩余额度id */
  remainingQuotaId?: string;
  /** 预占用id */
  reservationId?: string;
  /** 创建时间 */
  reservationTime?: string;
  /** 状态 */
  status?: string;
  /** 租户 */
  tenant?: TENANT;
}
