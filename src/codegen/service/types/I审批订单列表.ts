import { I关联企业 } from './I关联企业';
import { IAppStatusExt } from './IAppStatusExt';
import { I个人信息 } from './I个人信息';
import { IApplication } from './IApplication';
import { IAuthorization } from './IAuthorization';
import { I银行借款申请单信息 } from './I银行借款申请单信息';
import { I品牌信息 } from './I品牌信息';
import { I车辆信息 } from './I车辆信息';
import { I企业信息 } from './I企业信息';
import { IContactPerson } from './IContactPerson';
import { I商户的客户信息 } from './I商户的客户信息';
import { IDeviceInfo } from './IDeviceInfo';
import { IDocument } from './IDocument';
import { IExtra } from './IExtra';
import { I资产信息 } from './I资产信息';
import { IJob } from './IJob';
import { I法人信息 } from './I法人信息';
import { I相关操作人员 } from './I相关操作人员';
import { I抵押信息 } from './I抵押信息';
import { I在渠道表现 } from './I在渠道表现';
import { IOrderBo } from './IOrderBo';
import { IPOS签购单 } from './IPOS签购单';
import { IPreReview } from './IPreReview';
import { I产品金融参数 } from './I产品金融参数';
import { IRuleBo } from './IRuleBo';
import { I账户基本信息 } from './I账户基本信息';
export type SOURCESYSTEM = 'LOANAPP' | 'CREDITAPP';

export type STATUS =
  | 'NEW'
  | 'WAITING_RULE_REVIEW'
  | 'RULE_REVIEWING'
  | 'RULE_APPROVED'
  | 'RULE_REJECTED'
  | 'WAITING_MANUAL_REVIEW'
  | 'MANUAL_REVIEWING'
  | 'MANUAL_APPROVED'
  | 'MANUAL_REJECTED'
  | 'APPROVED'
  | 'REJECTED'
  | 'CANCELED'
  | 'SUPPLYING';

export type TYPE = 'CREDIT' | 'LOAN';

export interface I审批订单列表 {
  /** 申请人aid */
  actorId?: string;
  /** 关联企业 */
  affiliatedCompanyList?: Array<I关联企业>;
  /** 借款申请状态 */
  appStatusExt?: IAppStatusExt;
  /** 借款人ID */
  applicantId?: string;
  /** 借款人姓名，与customerName重复 */
  applicantName?: string;
  /** 申请人信息 */
  applicantVo?: I个人信息;
  /** 借款申请金额 */
  applicationAmount?: number;
  /** 借款申请日期 */
  applicationDate?: string;
  /** 借款申请期限 */
  applicationDuration?: string;
  /** 借款申请期限天数 */
  applicationDurationDays?: number;
  /** 借款申请期限类型 */
  applicationDurationType?: string;
  /** 借款申请id */
  applicationId?: string;
  /** 申请信息 */
  applicationVo?: IApplication;
  /** 融资金额，将废弃，使用applicationAmount */
  applyAmount?: number;
  /** 申请日期，将废弃，使用applicationDate */
  applyDate?: string;
  /** 审批金额 */
  approvalAmount?: number;
  /** 审批人 */
  approver?: string;
  /** 授权信息 */
  authorizationVoList?: Array<IAuthorization>;
  /** （银行借款）申请单信息 */
  bankLoan?: I银行借款申请单信息;
  /** 品牌信息 */
  brandList?: Array<I品牌信息>;
  /** 车辆信息 */
  car?: I车辆信息;
  /** 身份证(个人) 或者三证（企业） */
  cardNum?: string;
  /** 渠道id */
  channelId?: number;
  /** 城市 */
  city?: string;
  /** 工作单位 */
  companyName?: string;
  /** 公司信息 */
  companyVo?: I企业信息;
  /** 联系人信息 */
  contactVoList?: Array<IContactPerson>;
  /** 融资时间 */
  createDate?: string;
  /** 审批结果资料id */
  creditResultLogLatestDataId?: string;
  /** 审批订单资料id */
  creditReviewApplicationId?: string;
  /** 节点记录ID */
  creditReviewRecordId?: number;
  /** 商户的客户信息 */
  customer?: Array<I商户的客户信息>;
  /** 申请人id */
  customerId?: string;
  /** 客户姓名 */
  customerName?: string;
  /** 设备信息 */
  deviceVo?: IDeviceInfo;
  /** 影像附件 */
  documentVoList?: Array<IDocument>;
  /** 扩展信息 */
  extra?: IExtra;
  /** 资产信息 */
  financeInfoVo?: I资产信息;
  /** 担保人id */
  guarantorId?: string;
  /** 担保人姓名 */
  guarantorName?: string;

  id?: number;
  /** 申请人工作信息 */
  jobVo?: IJob;
  /** 法人信息 */
  legalPerson?: I法人信息;
  /** 相关操作人员 */
  loanRefer?: I相关操作人员;
  /** 借款子类型 */
  loanSubType?: string;
  /** 客户类型 */
  memberType?: string;
  /** 手机号 */
  mobilePhone?: string;
  /** 抵押信息 */
  mortgageList?: Array<I抵押信息>;
  /** 审批节点 */
  nodeId?: string;
  /** 审批节点 */
  nodeName?: string;
  /** 在渠道表现 */
  order?: I在渠道表现;
  /** 订单列表 */
  orderList?: Array<IOrderBo>;
  /** 户口所在地 */
  permanentAddress?: string;
  /** POS签购单 */
  posBillList?: Array<IPOS签购单>;
  /** 预审批信息 */
  preReview?: IPreReview;
  /** 项目版本配置id */
  procConfVersionId?: number;
  /** 产品编码 */
  productCode?: string;
  /** 产品信息 */
  productRate?: I产品金融参数;
  /** 关联借款申请编号 */
  relatedApplicationId?: string;
  /** 常住地址 */
  residenceAddress?: string;
  /** 订单审批开始时间 */
  reviewStartDate?: string;
  /** 订单审批限时 */
  reviewTimeLimit?: number;
  /** 规则评分 */
  ruleBo?: IRuleBo;
  /** 审批结果, acrc还在用，r1.0保留，r2.0提供查询审批价格接口，r3.0删除 */
  ruleVo?: IRuleBo;
  /** 股东信息 */
  shareholders?: Array<I法人信息>;
  /** 订单来源 */
  sourceSystem?: SOURCESYSTEM;
  /** 借款人身份证号 */
  ssn?: string;
  /** 审批状态 */
  status?: STATUS;
  /** 任务id */
  taskId?: string;
  /** 任务开始时间 */
  taskStartDate?: string;
  /** 任务限时 */
  taskTimeLimit?: number;
  /** 租户 */
  tenant?: string;
  /** 订单总金额 */
  totalAmount?: number;

  type?: TYPE;
  /** 申请人身份信息 */
  userIdentityVo?: I账户基本信息;
}
