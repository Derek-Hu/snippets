import { IPageBean } from './IPageBean';

export interface IBlackListResponse {
  message?: string;

  pageBean?: IPageBean;

  status?: string;
}
