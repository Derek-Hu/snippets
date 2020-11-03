import { I额度详情 } from './I额度详情';

export interface I额度信息 {
  /** 综合额度信息 */
  generalQuota?: I额度详情;
  /** 产品额度信息 */
  productQuotaList?: Array<I额度详情>;
}
