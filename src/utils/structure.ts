type IAttrbutes = {
  value: string;
  label: string;
};
export const transform2Array = <T extends { [key: string]: any }>(
  obj: { [key: string]: any },
  atrrbutes?: IAttrbutes
): Array<T> => {
  const { value, label } = atrrbutes || { value: 'value', label: 'label' };
  const initial: Array<T> = [];
  return Object.keys(obj).reduce((all, key) => {
    // @ts-ignore
    all.push({ [value]: key, [label]: obj[key] });
    return all;
  }, initial);
};
