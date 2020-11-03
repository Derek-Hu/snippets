import { ICountyResult } from './ICountyResult';

export interface ICityResult {
  cityCode?: string;

  cityName?: string;

  counties?: Array<ICountyResult>;
}
