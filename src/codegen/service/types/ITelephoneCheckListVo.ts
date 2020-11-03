import { ITelephoneCheckVo } from './ITelephoneCheckVo';

export interface ITelephoneCheckListVo {
  /** 电核描述列表 */
  telephoneCheckVoList?: Array<ITelephoneCheckVo>;
  /** json格式字符串 */
  value?: string;
}
