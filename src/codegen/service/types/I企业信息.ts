import { IAddress } from './IAddress';

export interface I企业信息 {
  /** 月平均采购车辆数量 */
  averageMonthlyPurchaseVolume?: string;
  /** 月平均销售车辆数量 */
  averageMonthlySalesVolume?: string;
  /** 月平均库存车辆数量 */
  averageMonthlyStockVolume?: string;
  /** 营业执照到期日 */
  businessEndDate?: string;
  /** 工商注册号 */
  businessLicenseNum?: string;
  /** 企业类型 */
  businessLicenseType?: string;
  /** 经营范围 */
  businessScope?: string;
  /** 库存车平均售价 */
  carAveragePrice?: string;
  /** 盘库正查表现 */
  carInventoryCheck?: string;
  /** 盘库倒查表现 */
  carInventoryInversion?: string;
  /** 还款表现 */
  carRepaymentPerformance?: string;
  /** 车辆存放地 */
  carStorageArea?: string;
  /** 变更历史 */
  changeHistory?: string;
  /** 在渠道的贷款余额 */
  channelLoanBalance?: string;
  /** 渠道智能pos刷卡台数 */
  channelPOSNum?: string;
  /** 授信额度 */
  creditAmount?: string;
  /** 经销商属性 */
  dealerClass?: string;
  /** 在职员工人数 */
  employeeNumber?: string;
  /** 成立日期 */
  establishDate?: number;
  /** 初次借款时间 */
  firstLoanTime?: number;
  /** 进件系统ID */
  id?: string;
  /** 行业分类 */
  industryCode?: string;
  /** 库存平均周转天数 */
  inventoryAverageDays?: number;
  /** 公司名称 */
  name?: string;
  /** 近半年经营流水 */
  operatingStreamSixMonths?: string;
  /** 实际经营地址 */
  operationAddress?: IAddress;
  /** 场地经营面积 */
  operationArea?: string;
  /** 经营场地 */
  operationAreaType?: string;
  /** 经营年限 */
  operationYears?: string;
  /** 组织机构代码证编号 */
  orgCodeCert?: string;
  /** 实缴资本(元) */
  paidCapital?: string;
  /** 车位数 */
  parkingNum?: string;
  /** 商户名称 */
  regName?: string;
  /** 注册地址 */
  registeredAddress?: IAddress;
  /** 注册资本(元) */
  registeredCapital?: number;
  /** 企业行业分类 */
  segment?: string;
  /** 公司规模 */
  size?: string;
  /** 经销商店铺地址 */
  storeLocation?: string;
  /** 税务登记号 */
  taxRegCertNum?: string;
  /** 手机号 */
  telephone?: string;
  /** 是否三证合一 */
  threeCertificateTogether?: string;
  /** 总营业收入 */
  totalIncome?: number;
  /** 平均周转天数 */
  turnoverAverageDays?: string;
  /** 统一社会信用代码 */
  uniformCreditCode?: string;
  /** 借款次数 */
  useMoneyNum?: string;
}
