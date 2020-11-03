const files = require.context('../../models/', true, /\.js$/);

const modules = files.keys().map(files);

test('dva Model文件必须包含namspace, state, reducers, effects属性', () => {
  expect(
    modules.every(item => {
      const mod = item.default;
      return (
        mod.namespace !== undefined &&
        mod.state !== undefined &&
        mod.reducers !== undefined &&
        mod.effects !== undefined
      );
    })
  ).toBe(true);
});
