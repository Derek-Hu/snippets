import { IAddress } from './IAddress';
import { IMortgageHouse } from './IMortgageHouse';

export interface I抵押信息 {
  /** 债务到期日(批复时间+18个月) */
  debtExpireDate?: string;
  /** 企业类型 */
  houseStatus?: string;
  /** 房屋担保联动信息 */
  mortgageHouses?: Array<IMortgageHouse>;
  /** 实际经营地址 */
  operationAddr?: IAddress;
  /** 经营年限（年） */
  operationYears?: number;
  /** 设置的房屋担保信息 */
  savedMortgageHouse?: IMortgageHouse;
}
