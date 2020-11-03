import dva from 'dva';
import './index.less';
import '~/models';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import moment from 'moment';
import Helper from '~/decorator/helper';
import { checkIsInApp } from '~/utils/util';

moment.locale('zh-cn');

require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/object');
require('core-js/es6/array');
require('es6-promise').polyfill();
require('promise.prototype.finally').shim(); // 解决iOS10以下设备，以及其它低版本浏览器webView不支持promise .finally() 语法的兼容性问题

// if (!Promise) {
//   window.Promise = nPromise;
// }

// 1. Initialize
const app = dva({
    initialState: {},
    onReducer: combineReducer => persistReducer(
        {
            key: 'redux-storage',
            storage: storageSession,
            stateReconciler: autoMergeLevel1,
        },
        combineReducer
    ),
});
// 2. Plugins
// app.use({});
if (__MOCK__) {
    app.use(require('dva-logger')());
}
app.use(require('dva-loading')());

// 4. Router
app.router(require('./router'));

Helper.init(app);
// 5. Start
app.start('#root');

const peristor = persistStore(app._store);
peristor.pause(); // 关闭持久化
// peristor.persist();

// 控制anroid设备app嵌入页面样式问题
if (checkIsInApp()) {
    let viewDom = window.document.querySelector('meta[name="viewport"]');
    if (!viewDom) {
        // 添加meta
        viewDom = window.document.createElement('meta');
        viewDom.setAttribute('name', 'viewport');
        window.document.head.appendChild(viewDom);
    }
    // 默认已经有了meta，做属性修改
    viewDom.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1');
    window.document.documentElement.style.fontSize = '50px';
}
// eslint-disable-next-line
console.warn(__GIT_VERSION__);
