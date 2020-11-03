export interface I借款信息 {
  /** 推送金额 */
  appAmount?: number;
  /** 平均车价 */
  averageCarPrice?: number;
  /** 平均库存天数 */
  averageInventoryDays?: number;
  /** 借款人教育情况 */
  borrowerEducation?: string;
  /** 借款人年收入 */
  borrowerIncome?: number;
  /** 借款人总负债 */
  borrowerIndebtedness?: number;
  /** 借款人所属行业 */
  borrowerIndustry?: string;
  /** 借款人主体性质 */
  borrowerMainProperty?: string;
  /** 借款人性别 */
  borrowerSex?: string;
  /** 经营年限 */
  businessLife?: string;
  /** 车位数 */
  carNumber?: number;
  /** 核心企业客户号 */
  coreEnterpriseId?: number;
  /** 授信额度 */
  creditLine?: string;
  /** 利率 */
  frequency?: string;
  /** 最近半年逾期账户数 */
  halfYearOverdueAccounts?: number;
  /** 最近半年逾期总金额 */
  halfYearOverdueAmount?: number;
  /** 最近半年逾期次数 */
  halfYearOverdueNumber?: number;
  /** 是否有企业 */
  haveEnterprise?: boolean;
  /** 初次借款时间 */
  initBorrowTime?: string;
  /** 利率 */
  inteRate?: string;
  /** 工作性质 */
  jobNature?: string;
  /** 借款余额 */
  lmLoanBalance?: string;
  /** 二手车交易市场名称 */
  marketName?: string;
  /** 客户类型 PERSONAL-个人、BUSINESS-企业 */
  memberType?: string;
  /** 其他网络平台借款总金额 */
  otherBorrowingAmount?: number;
  /** 其他网络平台借款数 */
  otherBorrowingNumber?: number;
  /** 个人购房情况 */
  personalPurchase?: string;
  /** 产品id */
  productCode?: string;
  /** 产品类型 */
  productId?: string;
  /** 借款目的 */
  purposeOfBorrow?: string;
  /** 售卖车辆POS码 */
  salePos?: string;
  /** 配偶姓名 */
  spouseName?: string;
  /** 配偶身份证号码 */
  spouseSsn?: string;
  /** 近半年经营流水总额 */
  totalAmount?: number;
}
