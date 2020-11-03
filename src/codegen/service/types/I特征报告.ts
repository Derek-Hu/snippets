export type STATUS = 'INIT' | 'PROCESSING' | 'FAILED_LOAD_DATA' | 'FAILED_EXECUTE_SCRIPT' | 'OK' | 'EXCEPTION';

export interface I特征报告 {
  /** 订单号 */
  creditReviewId?: number;
  /** feature信息列表 */
  featuresMap?: Object;
  /** 特征获取信息 */
  message?: string;
  /** 特征获取状态 */
  status?: STATUS;
}
