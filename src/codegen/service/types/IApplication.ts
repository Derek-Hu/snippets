import { IProduct } from './IProduct';

export interface IApplication {
  /** 借款金额 */
  appAmount?: number;
  /** 申请时间 */
  appDate?: string;
  /** 过期时间 */
  appExpireDate?: string;
  /** 使用ID替代，applicationId = application.id */
  applicationId?: string;
  /** 渠道Id */
  channel?: number;
  /** 渠道名 */
  channelName?: string;
  /** 授信额度 */
  creditAmount?: number;
  /** 支用对应的最新授信ID */
  creditAppId?: string;
  /** 授信id */
  creditId?: number;
  /** 审核类型 */
  creditReviewType?: string;
  /** 授信类型 */
  creditType?: string;
  /** 借款描述 */
  description?: string;
  /** 借款利率 */
  desiredIntRate?: number;
  /** 外部渠道id */
  externalId?: string;
  /** 创建时间 */
  gmtCreate?: string;
  /** 进件系统借款编号 */
  id?: string;
  /** 业务类型 */
  loanAddType?: string;
  /** 借款天数 */
  maturity?: string;
  /** 借款期限单位(按天) */
  maturityDaily?: number;
  /** 借款期限单位 */
  maturityType?: string;
  /** 支付渠道(ALLINPAY:通联支付,UNIONPAY:银联) */
  payChannel?: string;
  /** 还款频率 */
  paymentFrequency?: string;
  /** 还款方式 */
  paymentMethod?: string;
  /** 产品 */
  product?: IProduct;
  /** 产品代码 */
  productCode?: string;
  /** 借款目的 */
  purpose?: string;
  /** 审批系统 */
  riskSys?: string;
  /** 来源 */
  source?: string;
  /** 再次授信对应的上一次授信ID */
  sourceCreditAppId?: string;
  /** 状态 */
  status?: string;
  /** 进件数据中的租户值 */
  tenant?: string;
  /** 发起审批的租户值 */
  tenantOfReviewStart?: string;
  /** 标题 */
  title?: string;
  /** 进件系统用户ID */
  userId?: number;
  /** 所属客群 */
  userTag?: string;
}
