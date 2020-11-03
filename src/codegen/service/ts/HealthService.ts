import { Response } from '../commonType';

import http from '../httpClient';

/**
 * 健康检测
 */
export const healthCheck = function(config?: { [key: string]: any }): Promise<Response<string>> {
  return http.get(`/healthcheck`, {
    ...config,
  });
};
