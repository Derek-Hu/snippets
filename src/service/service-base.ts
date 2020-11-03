import Remote, { get, post, put } from '~/utils/fetch';
import { IFetchOption } from '../types/FetchOption';

const transformOptions = function(options: IFetchOption) {
  return {
    ...options,
    data: options.params,
    body: options.data,
    headers: options.headers,
  };
};

export default {
  get: function(url: string, options: IFetchOption) {
    return get(url, transformOptions(options));
  },
  post: function(url: string, options: IFetchOption) {
    return post(url, transformOptions(options));
  },
  put: function(url: string, options: IFetchOption) {
    return put(url, transformOptions(options));
  },
  delete: function(url: string, options: IFetchOption) {
    return Remote.delete(url, transformOptions(options));
  },
};
