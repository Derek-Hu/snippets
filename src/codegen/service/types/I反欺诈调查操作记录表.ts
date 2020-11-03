import { IBlackListBo } from './IBlackListBo';
import { IPhoneReviewBo } from './IPhoneReviewBo';
import { I反欺诈调查结论 } from './I反欺诈调查结论';

export interface I反欺诈调查操作记录表 {
  /** 反欺诈订单ID */
  antiFraudOrderId?: number;
  /** 拒绝备注 */
  approveComment?: string;
  /** 入黑维度 */
  blackInfo?: IBlackListBo;
  /** 创建时间 */
  createDate?: string;
  /** 关联调查id */
  groupOpId?: number;

  id?: number;
  /** 借款人iid */
  iid?: string;
  /** 发起人ID */
  initiatorId?: number;
  /** 发起人姓名 */
  initiatorName?: string;
  /** 是否暂存模式 */
  isStaging?: boolean;
  /** 借款人姓名 */
  name?: string;
  /** 其他情况 */
  otherInfo?: string;
  /** 电核信息 */
  phoneReview?: IPhoneReviewBo;
  /** 清白标记 0涉黑，1清白, 2疑似 */
  pureFlag?: number;
  /** olb拒绝码 */
  rejectCode?: string;
  /** 是否拒绝 0否，1是 */
  rejectFlag?: string;
  /** 关联团案ID */
  relatedGangId?: string;
  /** 借款人ssn */
  ssn?: string;
  /** 发起时间 */
  startDate?: string;
  /** 结论提交时间 */
  submitDate?: string;
  /** 调查结论 */
  surveyResult?: I反欺诈调查结论;
  /** 更新时间 */
  updateDate?: string;
}
