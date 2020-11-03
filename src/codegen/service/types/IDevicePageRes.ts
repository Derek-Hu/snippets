import { IPageableBeanDeviceVo } from './IPageableBeanDeviceVo';

export interface IDevicePageRes {
  message?: string;

  pageableBean?: IPageableBeanDeviceVo;

  status?: string;
}
