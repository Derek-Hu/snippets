import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import getNavData, { IRouteItem, IRouteChild } from './router-config';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import enUS from 'antd/lib/locale-provider/en_US';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import thTH from 'antd/lib/locale-provider/th_TH';
import en from '~/locale/en';
import zh from '~/locale/zh';
import { CURRENT_LANGUAGE } from '~/locale-tools';

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

const generateRoute = (item: IRouteItem | IRouteChild, index: number) => {
  if (!('layout' in item)) {
    return <Route exact key={item.path} path={item.path} component={item.component} />;
  }
  const Layout = item.layout;
  return <Route key={index} path={item.path} render={props => <Layout {...props} navData={item.children}></Layout>} />;
};

// @ts-ignore
const localeProvider = localeProviderMap[CURRENT_LANGUAGE];
// @ts-ignore
const messageProvider = messagesMap[CURRENT_LANGUAGE];

// @ts-ignore
function RouterConfig({ history }) {
  const navData = getNavData;
  return (
    <LocaleProvider locale={localeProvider}>
      <IntlProvider locale={CURRENT_LANGUAGE} messages={messageProvider}>
        <Router history={history}>
          <div>
            <Switch>{navData.map(generateRoute)}</Switch>
          </div>
        </Router>
      </IntlProvider>
    </LocaleProvider>
  );
}

export default RouterConfig;
