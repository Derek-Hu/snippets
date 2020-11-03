import { IBlackListBo } from './IBlackListBo';
import { IPhoneReviewBo } from './IPhoneReviewBo';
import { I反欺诈调查结论 } from './I反欺诈调查结论';

export interface IAntiFraudResult {
  /** 入黑维度 */
  blackInfo?: IBlackListBo;
  /** 其他情况 */
  otherInfo?: string;
  /** 电核信息 */
  phoneReview?: IPhoneReviewBo;
  /** 清白标记 0涉黑，1清白, 2疑似 */
  pureFlag?: number;
  /** 是否拒绝 0否，1是 */
  rejectFlag?: string;
  /** 关联团案ID */
  relatedGangId?: string;
  /** 调查结论 */
  surveyResult?: I反欺诈调查结论;
}
