import { ICityResult } from './ICityResult';

export interface ICityInfo {
  cites?: Array<ICityResult>;

  provinceCode?: string;

  provinceName?: string;
}
