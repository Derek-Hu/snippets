import * as uniAuthBase from '~/utils/uniauthBase';
import serviceBase from '~/utils/service-base';
import * as requestBase from '~/utils/requestBase';

test('RBMS Service Base接口', () => {
  expect('get' in serviceBase).toBe(true);
  expect('post' in serviceBase).toBe(true);
  expect('put' in serviceBase).toBe(true);
  expect('delete' in serviceBase).toBe(true);
});

test('Uniauth Service Base接口', () => {
  expect('get' in uniAuthBase).toBe(true);
  expect('post' in uniAuthBase).toBe(true);
  expect('put' in uniAuthBase).toBe(true);
  expect('deleteRequest' in uniAuthBase).toBe(true);
});

test('Service Base接口', () => {
  expect('rbmsBase' in requestBase).toBe(true);
  expect('uniAuthBase' in requestBase).toBe(true);
});
