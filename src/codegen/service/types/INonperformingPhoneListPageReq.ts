export type TYPE = 'LOAN_TYPE' | 'COLLECTION_TYPE';

export interface INonperformingPhoneListPageReq {
  endCreateTime?: number;

  operator?: string;

  page?: number;

  pageSize?: number;

  phoneNum?: string;

  startCreateTime?: number;

  tenant?: string;

  type?: TYPE;
}
