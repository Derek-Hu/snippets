import { IGuaranteeConfig } from './IGuaranteeConfig';
import { IMortgageConfig } from './IMortgageConfig';

export interface ISignConditionConfig {
  guaranteeConfig?: IGuaranteeConfig;

  mortgageConfig?: IMortgageConfig;
}
