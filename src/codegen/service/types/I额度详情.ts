export type QUOTATYPE = 'CIRCULATION' | 'NON_CIRCULATION';

export type STATUS = 'INEFFECTIVE' | 'EFFECTIVE' | 'FROZEN' | 'EXPIRED' | 'DELETED';

export type TYPE = 'BORROWER' | 'GUARANTOR';

export interface I额度详情 {
  /** 可用额度 */
  availableAmount?: number;
  /** 额度分类 */
  category?: string;
  /** 代码 */
  code?: string;
  /** 创建日期 */
  createDate?: string;
  /** 到期日 */
  expiredDate?: string;
  /** 初始额度 */
  initAmount?: number;
  /** 名称 */
  name?: string;
  /** 额度标记 */
  quotaType?: QUOTATYPE;
  /** 类型描述 */
  quotaTypeDescription?: string;
  /** 建议额度 */
  recommendAmount?: number;
  /** 状态 */
  status?: STATUS;
  /** 状态描述 */
  statusDescription?: string;
  /** 额度主体类型 */
  type?: TYPE;
  /** 主体类型描述 */
  typeDescription?: string;
  /** 已用额度 */
  usedAmount?: number;
}
