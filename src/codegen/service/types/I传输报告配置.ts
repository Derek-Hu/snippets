export interface I传输报告配置 {
  /** 数据源 */
  authType?: string;
  /** 数据源名称 */
  authTypeDesc?: string;
  /** 是否必授权 */
  authorized?: boolean;
  /** 已选授权 */
  creditReportName?: string;
  /** 三方名称类型 */
  creditReportType?: string;
  /** 传输 */
  needed?: boolean;
  /** 必传 */
  required?: boolean;
}
