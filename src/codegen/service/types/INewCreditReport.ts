export type STATUS = 'QUERYING' | 'WITHDRAW' | 'COMPLETED' | 'OK' | 'FAIL';

export interface INewCreditReport {
  createDate?: string;

  data?: Object;

  id?: string;

  status?: STATUS;

  type?: string;
}
