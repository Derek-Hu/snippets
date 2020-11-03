import { IGroupDeviceVo } from './IGroupDeviceVo';

export interface IGroupDeviceRes {
  lastUpdateTime?: number;

  list?: Array<IGroupDeviceVo>;

  message?: string;

  status?: string;
}
