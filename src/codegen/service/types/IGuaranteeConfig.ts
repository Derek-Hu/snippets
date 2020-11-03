export type GUARANTEETYPE = 'NONE' | 'PARTIAL_GUARANTEE' | 'GUARANTEED';

export interface IGuaranteeConfig {
  guaranteeInfo?: Array<string>;

  guaranteeInfoDetail?: { [key: string]: string };

  guaranteeType?: GUARANTEETYPE;
}
