import { Decimal } from 'decimal.js';

const isEmpty = (value: any) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  return false;
};
/**
 *
 * 解决 1.4/100 = 0.013999999999999999 问题
 *
 **/
export const divideBy100 = (value: number | string) => {
  if (isEmpty(value)) {
    return null;
  }
  return new Decimal(value).dividedBy(100).toString();
};

export const multiple100 = (value: number | string | null | undefined) => {
  if (isEmpty(value)) {
    return null;
  }
  return new Decimal(value).mul(100).toString();
};
