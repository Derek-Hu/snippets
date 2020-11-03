/*
 * 格式化数值
 * Default: 展示千分位数值，保留2位小数
 * 参数说明：
 * number：格式化的数值
 * minimumFractionDigits：保小留几位小数
 * maximumFractionDigits：保大留几位小数
 * useGrouping: 使用分组分隔符
 */
export function numberFormat(
  number: number | string | null | undefined,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
  useGrouping = true
) {
  if (number === null || number === undefined) {
    return '';
  }
  const originalNumber = number;
  try {
    if (typeof number === 'string') {
      number = parseFloat(number.replace(/[^0-9+-Ee.]/g, ''));
    }

    if (number === 0) {
      minimumFractionDigits = 0;
    }

    return parseFloat(number.toFixed(maximumFractionDigits)).toLocaleString('zh', {
      minimumFractionDigits,
      maximumFractionDigits,
      useGrouping,
    });
  } catch (e) {
    return originalNumber;
  }
}
