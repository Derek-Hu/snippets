import { IItemVo } from './IItemVo';

export interface IRepaymentDetailVo {
  dueDate?: number;

  managefee?: { [key: string]: IItemVo };

  repaymentAmount?: string;

  repaymentDate?: number;

  serial?: number;

  totalAmount?: string;
}
