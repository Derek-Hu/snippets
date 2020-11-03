import { I反欺诈调查订单操作权限 } from './I反欺诈调查订单操作权限';
export type PRIORITY = 'A0' | 'A1' | 'A2';

export type STATUS = 'CREATED' | 'APPROVED' | 'REJECTED';

export interface I反欺诈调查订单表 {
  /** 借款申请Id */
  applicationId?: string;
  /** 借款审批类型 */
  applicationType?: string;
  /** 所在城市 */
  city?: string;
  /** 单位名称 */
  companyName?: string;
  /** 完成时间 */
  completeDate?: number;
  /** 创建时间 */
  createDate?: number;
  /** 借款审批订单Id */
  creditReviewOrderId?: number;
  /** 姓名 */
  customerName?: string;
  /** 是否有募资中的借款 */
  hasLoanInFunding?: boolean;

  id?: number;

  iid?: string;
  /** 发起人ID */
  initiatorId?: number;
  /** 发起人 */
  initiatorName?: string;
  /** 最新任务ID */
  latestTaskId?: string;
  /** 最新任务分配人Id */
  latestTaskUserId?: number;
  /** 最新任务分配人 */
  latestTaskUserName?: string;
  /** 手机号 */
  mobilePhones?: string;
  /** 操作 */
  operation?: I反欺诈调查订单操作权限;
  /** 优先级 */
  priority?: PRIORITY;
  /** 证件号码 */
  ssn?: string;
  /** 开始时间 */
  startDate?: number;
  /** 审批状态 */
  status?: STATUS;
  /** 租户 */
  tenant?: string;
  /** 审批总时长(秒) */
  totalReviewTimeSec?: number;
  /** 用户来源 */
  userSource?: string;
}
