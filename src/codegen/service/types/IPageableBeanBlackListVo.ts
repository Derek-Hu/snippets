import { IBlackListVo } from './IBlackListVo';

export interface IPageableBeanBlackListVo {
  currentPage?: number;

  pageCount?: number;

  pageData?: Array<IBlackListVo>;

  pageSize?: number;

  totalCount?: number;
}
