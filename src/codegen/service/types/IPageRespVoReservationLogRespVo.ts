import { IReservationLogRespVo } from './IReservationLogRespVo';

export interface IPageRespVoReservationLogRespVo {
  data?: Array<IReservationLogRespVo>;

  pageNum?: number;

  pageSize?: number;

  pages?: number;

  total?: number;
}
