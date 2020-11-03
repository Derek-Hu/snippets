import { formatMessage } from '~/locale-tools/index';
import en from '~/locale/transformEn';
import zh from '~/locale/zh';

test('zh文件包含中文', () => {
  expect(
    Object.keys(zh).every(key => {
      if (!/[\u4e00-\u9fa5）]/.test(zh[key])) {
        console.log(key);
      }
      return /[\u4e00-\u9fa5）]/.test(zh[key]);
    })
  ).toBe(true);
});

test('locale文件Key数量相同', () => {
  expect(Object.keys(en).length === Object.keys(zh).length).toBe(true);
});

test('formatMessage正常返回', () => {
  const keys = Object.keys(zh);
  expect(formatMessage({ id: keys[0] })).toBe(en[keys[0]]);
});
