import { Response } from '../commonType';
import { I字符串对象 } from '../types/I字符串对象';

import http from '../httpClient';

/**
 * 合约下载链接
 */
export const getContractDownloadLink = function(
  {
    contractId,
  }: {
    /** 合约ID */
    contractId: string;
  },
  params: {
    /** 合约租户 */
    contractTenant: 'SCP' | 'DR_BORROWER' | 'NERVER_LAND';
    /** 原因 */
    reason?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I字符串对象>> {
  return http.get(`/v1/contracts/${contractId}/link`, {
    params,
    ...config,
  });
};

/**
 * 扫描件下载链接
 */
export const getOssDownloadLink = function(
  params: {
    /** 扫描件路径 */
    location: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I字符串对象>> {
  return http.get(`/v1/utilities/document-oss-link`, {
    params,
    ...config,
  });
};
