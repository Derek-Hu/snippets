export type SOURCE = 'MANUAL' | 'SYSTEM' | 'OTHER';

export type TENANT = 'LOAN_TYPE' | 'COLLECTION_TYPE';

export type TYPE = 'LOAN_TYPE' | 'COLLECTION_TYPE';

export interface INonperformingPhoneReq {
  operator?: string;

  phoneNum?: string;

  reason?: string;

  source?: SOURCE;

  tenant?: TENANT;

  type?: TYPE;

  typeDetail?: string;
}
