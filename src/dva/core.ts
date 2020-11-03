import dynamic from 'dva/dynamic';
import { DvaInstance } from 'dva';

let app: DvaInstance | null = null;
export const setApp = (dvaApp: DvaInstance) => {
  app = dvaApp;
};

export const lazy = (component: () => Promise<any>) => {
  // @ts-ignore
  return dynamic({ app, component });
};
