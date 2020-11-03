import { I反欺诈调查操作记录表 } from './I反欺诈调查操作记录表';
import { I团案操作记录 } from './I团案操作记录';

export interface IAntiFraudGroupOperateRecordVo {
  /** 本次提交涉及的反欺诈调查结论,按需提供 */
  antiFraudOperateRecords?: Array<I反欺诈调查操作记录表>;
  /** 团伙操作记录id */
  id?: number;
  /** 发起人姓名 */
  initiatorName?: string;
  /** 是否暂存状态 */
  isStaging?: boolean;
  /** 关联的团伙Leader的欺诈调查结论, 按需提供 */
  masterAntiFraudOperateRecord?: I反欺诈调查操作记录表;
  /** 关联的团伙Leader的欺诈调查结论id */
  masterId?: number;
  /** 团伙调查备注 */
  note?: string;
  /** 最后保存的原始请求 */
  request?: I团案操作记录;
  /** 操作记录提交时间 */
  submitDate?: string;
}
