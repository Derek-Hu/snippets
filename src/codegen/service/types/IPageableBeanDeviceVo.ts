import { IDeviceVo } from './IDeviceVo';

export interface IPageableBeanDeviceVo {
  currentPage?: number;

  pageCount?: number;

  pageData?: Array<IDeviceVo>;

  pageSize?: number;

  totalCount?: number;
}
