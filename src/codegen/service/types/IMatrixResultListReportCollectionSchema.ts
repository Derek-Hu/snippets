import { IReportCollectionSchema } from './IReportCollectionSchema';

export interface IMatrixResultListReportCollectionSchema {
  data?: Array<IReportCollectionSchema>;

  message?: string;

  status?: string;

  success?: boolean;
}
