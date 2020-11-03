import { I车辆信息 } from './I车辆信息';
import { I企业信息 } from './I企业信息';
import { I法人信息 } from './I法人信息';
import { IBankBo } from './IBankBo';
import { I租赁信息 } from './I租赁信息';
import { I联系人信息 } from './I联系人信息';
import { I商户信息 } from './I商户信息';
import { I实际控制人信息 } from './I实际控制人信息';
import { ISCP借款人信息 } from './ISCP借款人信息';
import { I借款信息 } from './I借款信息';

export interface I授信信息聚合model {
  bankList?: Array<IBankBo>;

  business?: I租赁信息;

  car?: I车辆信息;

  company?: I企业信息;

  contactList?: Array<I联系人信息>;

  enterprise?: I商户信息;

  legalPerson?: I法人信息;

  realHolder?: I实际控制人信息;

  user?: ISCP借款人信息;

  userLoan?: I借款信息;
}
