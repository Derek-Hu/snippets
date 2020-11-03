import { Response } from '../commonType';
import { I操作模块选项 } from '../types/I操作模块选项';

import http from '../httpClient';

/**
 * 获取反欺诈调查结论目录
 */
export const getAntiFraudSurvyResult = function(
  {
    operationConfigCode,
  }: {
    operationConfigCode: string;
  },
  params?: {
    /** true关联的，false未关联的（默认true) */
    related?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I操作模块选项>>> {
  return http.get(`/v1/product-codes/${operationConfigCode}/antiFraudSurvyResult`, {
    params,
    ...config,
  });
};

/**
 * 获取电核标签码
 */
export const getTelephoneCheckCodeResult = function(
  {
    operationConfigCode,
  }: {
    operationConfigCode: string;
  },
  params?: {
    /** true:允许一级节点下无二级节点 false:不允许 */
    related?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I操作模块选项>>> {
  return http.get(`/v1/product-codes/${operationConfigCode}/telephoneCheckCodeResult`, {
    params,
    ...config,
  });
};

/**
 * 获取产品审核撤销码，操作撤销的时候提供树形选项
 */
export const getCancelCodes = function(
  {
    productCode,
  }: {
    productCode: string;
  },
  params?: {
    /** true关联的，false未关联的（默认true) */
    related?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I操作模块选项>>> {
  return http.get(`/v1/product-codes/${productCode}/canceled-codes`, {
    params,
    ...config,
  });
};

/**
 * 关联产品撤销码
 */
export const configCancelCode = function(
  {
    productCode,
  }: {
    productCode: string;
  },
  data: Array<number>,
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.put(`/v1/product-codes/${productCode}/canceled-codes`, {
    data,
    ...config,
  });
};

/**
 * 删除产品某些撤销码
 */
export const removeCancelCode = function(
  {
    productCode,
  }: {
    productCode: string;
  },
  data: Array<number>,
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.delete(`/v1/product-codes/${productCode}/canceled-codes`, {
    data,
    ...config,
  });
};

/**
 * 获取产品审核拒绝码，操作拒绝的时候提供树形选项,关联的或者未关联的
 */
export const getRejectCodes = function(
  {
    productCode,
  }: {
    productCode: string;
  },
  params?: {
    /** true关联的，false未关联的（默认true) */
    related?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I操作模块选项>>> {
  return http.get(`/v1/product-codes/${productCode}/rejected-codes`, {
    params,
    ...config,
  });
};

/**
 * 关联产品拒绝码,只需要选择未关联的即可，已经关联的
 */
export const configRejectCode = function(
  {
    productCode,
  }: {
    productCode: string;
  },
  data: Array<number>,
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.put(`/v1/product-codes/${productCode}/rejected-codes`, {
    data,
    ...config,
  });
};

/**
 * 删除产品拒绝码
 */
export const removeRejectCode = function(
  {
    productCode,
  }: {
    productCode: string;
  },
  data: Array<number>,
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.delete(`/v1/product-codes/${productCode}/rejected-codes`, {
    data,
    ...config,
  });
};
