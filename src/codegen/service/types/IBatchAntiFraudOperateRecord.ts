import { IAntiFraudResult } from './IAntiFraudResult';
import { IBorrowerBo } from './IBorrowerBo';

export interface IBatchAntiFraudOperateRecord {
  antiFraudResult?: IAntiFraudResult;

  borrowers?: Array<IBorrowerBo>;
}
