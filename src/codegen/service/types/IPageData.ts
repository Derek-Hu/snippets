import { IBlackListOperations } from './IBlackListOperations';
import { IBlackListRelations } from './IBlackListRelations';

export interface IPageData {
  /** 操作 */
  blackListOperations?: Array<IBlackListOperations>;
  /** 关联关系 */
  blackListRelations?: Array<IBlackListRelations>;
  /** 黑名单类型 1：欺诈黑名单 2：逾期黑名单 */
  blackType?: string;
  /** 创建时间 */
  createTime?: string;
  /** 入黑原因 */
  inReason?: string;
  /** 入黑时间 */
  inTime?: number;
  /** 出黑原因 */
  outReason?: string;
  /** 出黑时间 */
  outTime?: number;
  /** 来源 1：人工入黑 2：系统规则入黑 3：逾期入黑 4：团伙入黑 */
  source?: string;
  /** 身份证 */
  ssn?: string;
  /** 状态 1：黑 2：灰 */
  status?: number;
  /** 团伙id */
  teamId?: string;
  /** 身份证 */
  timestamp?: string;
  /** 更新时间 */
  updateTime?: string;
}
