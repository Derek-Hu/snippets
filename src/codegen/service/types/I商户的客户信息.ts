import { IAddress } from './IAddress';

export interface I商户的客户信息 {
  /** 证件号码 */
  cardNum?: string;
  /** 工作单位名称 */
  companyName?: string;
  /** 是否有驾驶证 */
  hasDrivingLicence?: string;
  /** 姓名 */
  name?: string;
  /** 户籍地址 */
  permanentAddress?: IAddress;
  /** 移动电话 */
  phone?: string;
}
