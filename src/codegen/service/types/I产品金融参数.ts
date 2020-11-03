export interface I产品金融参数 {
  /** 借款年利率 */
  IntRt?: number;
  /** 是否自动放款 */
  autoIssue?: boolean;
  /** 是否自动代扣 */
  autoWithhold?: boolean;
  /** 借款人履约互保准备金率 */
  borrowerPaysRiskRate?: number;
  /** 风险评级 */
  creditRisk?: string;
  /** 代扣第三方服务费率一期 */
  firstMonthThirdServiceFee?: number;
  /** 管理费是否趸交 */
  fullPayManagementFee?: boolean;
  /** 宽限期 */
  gracePeriod?: string;
  /** 出资人服务费率 */
  investServiceFee?: number;
  /** 融资比例 */
  loanPerc?: number;
  /** 账户管理费率 */
  managementFee?: number;
  /** 人工审批放款前期条件 */
  manualApprovalCon?: Array<string>;
  /** 费率 */
  marginRt?: number;
  /** 审批费率 */
  origFeeFraction?: number;
  /** 代扣第三方服务费随后每个月 */
  otherMonthThirdServiceFee?: number;
  /** 收取方式 */
  payMethod?: string;
  /** 罚息率 */
  penaltyRate?: number;
  /** 订单有效期 */
  poPeriod?: string;
  /** 订单有效期单位 */
  poPeriodUnit?: string;
  /** 产品code */
  productCode?: string;
  /** 产品编号 */
  productId?: string;
  /** 是否可见 */
  visiable?: boolean;
}
