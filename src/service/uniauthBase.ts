import { uniAuthBase } from './requestBase';
import queryString from 'query-string';
import { IFetchOption } from '../types/FetchOption';

export function put(url: string, options: IFetchOption) {
  return uniAuthBase(url, { ...options, method: 'PUT' });
}

function deleteRequest(url: string, options: IFetchOption) {
  return uniAuthBase(url, { ...options, method: 'DELETE' });
}

export function post(url: string, options: IFetchOption) {
  const { headers: customHeades, body, ...optionExceptHeaders } = options || {};

  return uniAuthBase(url, {
    ...optionExceptHeaders,
    bodyTransformed: true,
    body: queryString.stringify(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...customHeades,
    },
    method: 'POST',
  });
}

export function get(url: string, options: IFetchOption) {
  return uniAuthBase(url, { ...options, method: 'GET' });
}

export default {
  get,
  put,
  post,
  delete: deleteRequest,
};
