// import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import '~/common/polyfill';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import enUS from 'antd/lib/locale-provider/en_US';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import thTH from 'antd/lib/locale-provider/th_TH';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getPages } from '~/decorator/Controller';
import importAll from '~/utils/importAll';
import en from '~/locale/en';
import zh from '~/locale/zh';
import { CURRENT_LANGUAGE } from '~/locale-tools';
import '~/global.css';

const messagesMap = {
  en: en,
  'en-US': en,
  zh: zh,
  'zh-CN': zh,
};

const localeProviderMap = {
  en: enUS,
  'en-US': enUS,
  zh: zhCN,
  'zh-CN': zhCN,
  th: thTH,
};

// @ts-ignore
const localeProvider = localeProviderMap[CURRENT_LANGUAGE];
// @ts-ignore
const messageProvider = messagesMap[CURRENT_LANGUAGE];

function RenderDom(filepath: __WebpackModuleApi.RequireContext) {
  // 绑定路由
  filepath && importAll(filepath);
  const Pages = getPages();
  return ReactDOM.render(
    <Router>
      {/* 
      // @ts-ignore */}
      <ConfigProvider locale={localeProvider}>
        <IntlProvider locale={CURRENT_LANGUAGE} messages={messageProvider}>
          <div>
            <Switch>
              {Object.keys(Pages).map(url => (
                <Route exact key={url} path={url} component={Pages[url].target} />
              ))}
              <Route
                render={() => (
                  <Redirect
                    to={{
                      pathname: `/`,
                    }}
                  />
                )}
              />
            </Switch>
          </div>
        </IntlProvider>
      </ConfigProvider>
    </Router>,
    document.getElementById('root')
  );
}
console.warn(process.env.GIT_COMMIT);

// export default process.env.NODE_ENV === 'development' ? hot(RenderDom) : RenderDom;

if (process.env.NODE_ENV === 'development') {
  // hot(class T extends React.Component { });
}
export default RenderDom;
