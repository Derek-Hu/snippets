import Helper from '~/decorator/helper';
import Model from '~/decorator/model';

test('dva使用@Model注册', () => {
  Model({
    namespace: 'global',
  });

  const modules = [];
  const app = {
    model(m) {
      modules.push(m);
    },
  };
  Helper.init(app);

  expect(modules[0].namespace).toBe('global');
});
