import { IAddress } from './IAddress';

export interface IJob {
  /** 企业主要经营地址 */
  address?: IAddress;
  /** 职业类别 */
  category?: string;
  /** 公司名称 */
  companyName?: string;
  /** 单位行业分类 */
  companySegment?: string;
  /** 企业类型 */
  companyType?: string;

  id?: number;
  /** 行业分类 */
  industryCode?: string;
  /** 职业类型 */
  occupation?: string;
  /** 公司主要经营地址 */
  operationAddress?: IAddress;
  /** 企业固话 */
  tel?: string;
  /** 用户ID */
  userId?: number;
}
