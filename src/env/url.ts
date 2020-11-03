import { env } from '~/utils/getEnv';

export const URL = {
  yapi: {
    apiBase: 'http://dom001-dev.b8.hubenlv.io:3000/mock/244',
    uniauth: 'http://dom001-dev.b8.hubenlv.io:3000/mock/244',
    swagger: 'https://ftc-saas-rbms-console-demo.corp.hubenlv.com/v2/api-docs?group=dianrong-api',
    linkBase: 'https://ftc-saas-rbms-console-demo.corp.hubenlv.com/swagger-ui.html',
  },
  local: {
    apiBase: 'http://dom001-dev.b8.hubenlv.io:3000/mock/244',
    uniauth: 'http://dom001-dev.b8.hubenlv.io:3000/mock/244',
    swagger: 'https://ftc-saas-rbms-console-stage.corp.hubenlv.com/v2/api-docs?group=dianrong-api',
    linkBase: 'https://ftc-saas-rbms-console-stage.corp.hubenlv.com/swagger-ui.html',
  },
  ftcDev: {
    apiBase: 'https://ftc-saas-rbms-console-dev.corp.hubenlv.com',
    uniauth: 'https://uniauth-dev.corp.hubenlv.com',
  },
  ftcDemo: {
    apiBase: 'https://ftc-saas-rbms-console-demo.corp.hubenlv.com',
    uniauth: 'https://uniauth-demo.corp.hubenlv.com',
  },
  ftcStage: {
    apiBase: 'https://ftc-saas-rbms-console-stage.corp.hubenlv.com',
    uniauth: 'https://uniauth-stage.corp.hubenlv.com',
  },
  ftc: {
    apiBase: 'https://rbms.corp.hubenlv.com',
    uniauth: 'https://uniauth.corp.hubenlv.com',
  },
};

export default URL[env];
