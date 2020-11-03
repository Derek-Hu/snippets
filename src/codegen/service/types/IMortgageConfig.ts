export type MORTGAGETYPEENUM = 'NONE' | 'PARTIAL_MORTGAGE' | 'MORTGAGE';

export interface IMortgageConfig {
  mortgageTypeEnum?: MORTGAGETYPEENUM;

  mortgagedInfoDetail?: { [key: string]: string };

  mortgagedItems?: Array<string>;
}
