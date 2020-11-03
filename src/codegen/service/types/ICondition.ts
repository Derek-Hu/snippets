export type COMPARISON = 'EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'CONTAINS';

export interface ICondition {
  comparison?: COMPARISON;

  fieldName?: string;

  formName?: string;

  value?: string;
}
