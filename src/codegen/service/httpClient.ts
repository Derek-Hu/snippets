import { rbmsCodegen } from '~/utils/requestBase';
import { FetchOption } from '../../types/FetchOption';

export function put(url: string, options: FetchOption) {
  return rbmsCodegen(url, { ...options, method: 'PUT' });
}

function deleteRequest(url: string, options: FetchOption) {
  return rbmsCodegen(url, { ...options, method: 'DELETE' });
}

export function post(url: string, options: FetchOption) {
  return rbmsCodegen(url, { ...options, method: 'POST' });
}

export function get(url: string, options: FetchOption) {
  return rbmsCodegen(url, { ...options, method: 'GET' });
}

export default {
  put,
  post,
  get,
  delete: deleteRequest,
};
