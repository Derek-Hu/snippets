import { I授信审核担保设置 } from './I授信审核担保设置';
import { I枚举 } from './I枚举';

export interface I担保人信息 {
  /** 担保人联动信息 */
  guarantorPersonals?: Array<I授信审核担保设置>;
  /** 关联关系列表 */
  relationship?: Array<I枚举>;
  /** 设置的担保人列表 */
  savedGuarantors?: Array<I授信审核担保设置>;
}
