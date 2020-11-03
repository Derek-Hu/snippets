import { INonperformingPhoneVo } from './INonperformingPhoneVo';

export interface IPageableBeanNonperformingPhoneVo {
  currentPage?: number;

  pageCount?: number;

  pageData?: Array<INonperformingPhoneVo>;

  pageSize?: number;

  totalCount?: number;
}
