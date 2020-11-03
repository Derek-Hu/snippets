import { ICollectionField } from './ICollectionField';

export interface IReportCollectionSchema {
  channel?: string;

  fields?: Array<ICollectionField>;

  url?: string;

  urlDesc?: string;
}
