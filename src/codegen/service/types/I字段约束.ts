import { ICondition } from './ICondition';

export interface I字段约束 {
  /** 用于描述复杂规则 */
  condition?: ICondition;

  maxLength?: number;

  maxValue?: number;

  minLength?: number;

  minValue?: number;

  regex?: string;

  scale?: number;
}
