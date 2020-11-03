import { Response } from '../commonType';
import { IMenuBo } from '../types/IMenuBo';

import http from '../httpClient';

/**
 * 创建Sample
 */
export const createSample = function(
  params?: {
    id?: number;
    name?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.post(`/createSample`, {
    params,
    ...config,
  });
};

/**
 * 异常类型抛错国际化测试
 */
export const doException = function(
  {
    type,
  }: {
    type: string;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.get(`/exception/${type}`, {
    ...config,
  });
};

/**
 * 正常返回菜单信息报文国际化测试
 */
export const getMenu = function(config?: { [key: string]: any }): Promise<Response<IMenuBo>> {
  return http.get(`/menu1`, {
    ...config,
  });
};

/**
 * 正常返回菜单信息报文国际化测试
 */
export const getMenuV2 = function(config?: { [key: string]: any }): Promise<Response<Array<IMenuBo>>> {
  return http.get(`/menu2`, {
    ...config,
  });
};

/**
 * 正常返回菜单信息报文国际化测试
 */
export const getMenuV3 = function(config?: { [key: string]: any }): Promise<Response<Array<IMenuBo>>> {
  return http.get(`/menu3`, {
    ...config,
  });
};

/**
 * 正常返回菜单信息报文国际化测试
 */
export const test1 = function(config?: { [key: string]: any }): Promise<Response<string>> {
  return http.get(`/test1`, {
    ...config,
  });
};

/**
 * 正常返回菜单信息报文国际化测试
 */
export const test2 = function(config?: { [key: string]: any }): Promise<Response<boolean>> {
  return http.get(`/test2`, {
    ...config,
  });
};

/**
 * 正常返回菜单信息报文国际化测试
 */
export const getMenu1 = function(config?: { [key: string]: any }): Promise<Response<Array<IMenuBo>>> {
  return http.get(`/test3`, {
    ...config,
  });
};

/**
 * 模拟文件下载
 */
export const downloadFile = function(config?: { [key: string]: any }): Promise<Response<string>> {
  return http.get(`/test4`, {
    ...config,
  });
};
