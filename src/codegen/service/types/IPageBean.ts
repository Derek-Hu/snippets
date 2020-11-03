import { IPageData } from './IPageData';

export interface IPageBean {
  currentPage?: number;

  pageCount?: number;

  pageData?: Array<IPageData>;

  pageSize?: number;

  totalCount?: number;
}
