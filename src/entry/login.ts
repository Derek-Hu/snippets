import { formatMessage } from '~/locale-tools';
import RenderDom from '~/entry';

document.title = formatMessage({ id: 'sign-in' }) + ' ' + formatMessage({ id: 'wind-control-center' });

RenderDom(require.context('~/pages/login/', true, /\.(js|ts|tsx)$/));
