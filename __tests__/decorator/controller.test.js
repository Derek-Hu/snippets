import Controller, { getPages } from '~/decorator/Controller';

test('@Controller组件', () => {
  @Controller('/login')
  class Login {}

  const Pages = getPages();

  expect(Pages['/login']).not.toBe(undefined);
});

test('@Controller使用错误', () => {
  expect(() => {
    @Controller()
    class Login {}
  }).toThrow();
});

test('@Controller重复注册', () => {
  expect(() => {
    @Controller('/user')
    class UserA {}
    @Controller('/user')
    class UserB {}
  }).toThrow();
});
