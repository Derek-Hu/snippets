jest.mock('~/utils/fetch', () => {
  return {
    get: jest.fn().mockReturnValue(Promise.resolve({ result: {} })),
    deleteRequest: jest.fn().mockReturnValue(Promise.resolve(1)),
    put: jest.fn().mockReturnValue(Promise.resolve(1)),
    post: jest.fn().mockReturnValue(Promise.resolve(1)),
  };
});

const { get, deleteRequest, put, post } = jest.requireActual('~/utils/fetch');

const files = require.context('../../services/', true, /\.js$/);

const modules = files.keys().map(files);

test('Service文件返回Promise', () => {
  expect(
    modules.every(async item => {
      const mod = item;
      const actions = Object.keys(mod);
      return actions.every(async action => {
        try {
          const resp = await mod[action]([], [], [], [], [], []);
          return resp;
        } catch (e) {
          console.error(e);
        }
      });
    })
  ).toBe(true);
});
