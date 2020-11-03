import { IBlackListOperationVo } from './IBlackListOperationVo';
import { IBlackListRelationVo } from './IBlackListRelationVo';

export interface IBlackListVo {
  blackListOperations?: Array<IBlackListOperationVo>;

  blackListRelations?: Array<IBlackListRelationVo>;

  blackType?: number;

  createTime?: number;

  inTeamTime?: number;

  inTime?: number;

  name?: string;

  outTime?: number;

  source?: number;

  ssn?: string;

  status?: number;

  teamId?: string;

  teamRole?: number;

  updateTime?: number;
}
