import RenderDom from '~/entry';

if (process.env.NODE_ENV !== 'production') {
  RenderDom(require.context('~/pages/', true, /\.(js|ts|tsx)$/));
}
