import { ILoanMaturity } from './ILoanMaturity';
import { IPaymentMethod } from './IPaymentMethod';

export interface ILoanMaturityAndPaymentMethodEntity {
  label?: string;

  options?: Array<ILoanMaturity>;

  paymentMethods?: Array<IPaymentMethod>;
}
