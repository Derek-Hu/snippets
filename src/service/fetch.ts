import { rbmsBase } from './requestBase';
import { IFetchOption } from '../types/FetchOption';

export function put(url: string, options: IFetchOption) {
  return rbmsBase(url, { ...options, method: 'PUT' });
}

function deleteRequest(url: string, options: IFetchOption) {
  return rbmsBase(url, { ...options, method: 'DELETE' });
}

export function post(url: string, options: IFetchOption) {
  return rbmsBase(url, { ...options, method: 'POST' });
}

export function get(url: string, options: IFetchOption) {
  return rbmsBase(url, { ...options, method: 'GET' });
}

export default {
  put,
  post,
  get,
  delete: deleteRequest,
};
