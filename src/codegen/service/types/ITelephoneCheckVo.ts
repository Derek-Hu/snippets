import { ITelephoneCheckFileVo } from './ITelephoneCheckFileVo';

export interface ITelephoneCheckVo {
  /** 审批订单id */
  creditReviewOrderId?: number;
  /** 电核描述内容 */
  remark?: string;
  /** 电核时间 */
  reviewTime?: string;
  /** 电访员姓名 */
  reviewUser?: string;
  /** 文件列表 */
  telephoneCheckFileVoList?: Array<ITelephoneCheckFileVo>;
}
