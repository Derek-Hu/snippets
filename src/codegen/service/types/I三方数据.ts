export interface I三方数据 {
  /** 是否必授权, true=必授权 */
  authRequired?: boolean;
  /** 三方名称 */
  name?: string;
  /** 是否选中 */
  selected?: boolean;
  /** 数据源 */
  source?: string;
  /** 枚举type */
  type?: string;
}
