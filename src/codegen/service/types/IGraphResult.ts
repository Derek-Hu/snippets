import { IGraphVo } from './IGraphVo';

export interface IGraphResult {
  asyncStatus?: string;

  asyncTaskId?: string;

  data?: Array<IGraphVo>;

  exception?: boolean;

  success?: boolean;
}
