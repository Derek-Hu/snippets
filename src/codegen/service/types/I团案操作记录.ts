import { IBatchAntiFraudOperateRecord } from './IBatchAntiFraudOperateRecord';

export interface I团案操作记录 {
  /** 反欺诈调查Order id, 关联时填入 */
  antiFraudOrderId?: number;
  /** 反欺诈调查结论集, 以批量模式提交时提供 */
  batchModeRecords?: Array<IBatchAntiFraudOperateRecord>;
  /** 团伙主干成员aid */
  groupLeaderId?: string;
  /** 团伙调查操作id */
  groupOpId?: number;
  /** 是否暂存 */
  isStaging?: boolean;
  /** 反欺诈调查结果记录id, 关联时填入 */
  masterId?: number;
  /** 调查备注 */
  note?: string;
}
