import { URL } from '~/constants/url';

test('URL环境支持', () => {
  expect(['test', 'development', 'production'].every(env => typeof URL[env] === 'object')).toBe(true);
});
