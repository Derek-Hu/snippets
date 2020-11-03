import { formatMessage } from '~/locale-tools';
import * as React from 'react';

const Pages: { [key: string]: { params: any; target: React.ComponentClass<any> } } = {};

const Controller = function(url: string, params: any) {
  if (!url) {
    throw new Error(formatMessage({ id: 'appoint-page' }));
  }
  if (Pages[url]) {
    throw new Error(formatMessage({ id: 'url-registered' }) + url);
  }
  return function(target: React.ComponentClass<any>) {
    Pages[url] = {
      params,
      target,
    };
  };
};
const getPages = () => Pages;

export { Controller as default, getPages };
