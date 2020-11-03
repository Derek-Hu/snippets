const resetURL = (url, { correctApiBase, correntUniauth, pattern }) => {
  delete global.window.location;
  const href = url;
  global.window.location = { href };

  const urls = require('~/constants/url').default;
  const { apiBase, uniauth } = urls;

  jest.resetModules();

  if (pattern) {
    expect(new RegExp(pattern).test(apiBase)).toBe(true);
    expect(new RegExp(pattern).test(uniauth)).toBe(true);
  } else {
    expect(apiBase).toBe(correctApiBase);
    expect(uniauth).toBe(correntUniauth);
  }
  expect(/\/$/.test(apiBase)).toBe(false);
  expect(/\/$/.test(uniauth)).toBe(false);
};

test('生产环境URL', () => {
  resetURL('https://rbms.corp.dalianyun.com/', {
    correctApiBase: 'https://rbms.corp.dalianyun.com',
    correntUniauth: 'https://uniauth.corp.dalianyun.com',
  });
});

test('Stage环境URL', () => {
  resetURL('https://ftc-saas-rbms-console-stage.corp.dalianyun.com/', {
    pattern: '-stage',
  });
});

test('Demo环境URL', () => {
  resetURL('https://ftc-saas-rbms-console-demo.corp.dalianyun.com/', {
    pattern: '-demo',
  });
});

test('Dev环境URL', () => {
  resetURL('https://ftc-saas-rbms-console-dev.corp.dalianyun.com/', {
    pattern: '-dev',
  });
});
