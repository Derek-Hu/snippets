import { Response } from '../commonType';
import { I操作模块分类 } from '../types/I操作模块分类';
import { I操作模块选项 } from '../types/I操作模块选项';

import http from '../httpClient';

/**
 * 列出所有的操作模块
 */
export const listAllOperationModule = function(config?: {
  [key: string]: any;
}): Promise<Response<Array<I操作模块分类>>> {
  return http.get(`/v1/opeartion-modules`, {
    ...config,
  });
};

/**
 * 列出操作选项
 */
export const getOperationModuleItems = function(
  params?: {
    /** 归属模块编码：撤销码，拒绝码... */
    moduleCode?:
      | 'REJECTED_CODES'
      | 'CANCELED_CODES'
      | 'FILE_REVIEW'
      | 'SIGN_CONDITION'
      | 'ANTI_FRAUD_SURVY_RESULT'
      | 'TELEPHONE_CHECK_LABEL_CODE';
    /** 选项编码：模糊匹配 */
    code?: string;
    /** 选项名称：模糊匹配 */
    name?: string;
    /** 选项归类id */
    pid?: number;
    /** 选项适用业务线 */
    businessType?: 'BUSINESS_LOAN' | 'PERSONAL_LOAN' | 'SUPPLY_CHAIN' | 'ONLINE';
    /** 选项是否可用 */
    enable?: boolean;
    /** 查看页码,默认1，（0，负数不可传） */
    page?: number;
    /** 每页记录数，默认50 */
    pagesize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I操作模块选项>>> {
  return http.get(`/v1/operation-module-items`, {
    params,
    ...config,
  });
};

/**
 * 添加模块选项
 */
export const addOperationModuleItems = function(
  {
    moduleCode,
  }: {
    moduleCode:
      | 'REJECTED_CODES'
      | 'CANCELED_CODES'
      | 'FILE_REVIEW'
      | 'SIGN_CONDITION'
      | 'ANTI_FRAUD_SURVY_RESULT'
      | 'TELEPHONE_CHECK_LABEL_CODE';
  },
  data: I操作模块选项,
  config?: { [key: string]: any }
): Promise<Response<number>> {
  return http.post(`/v1/operation-modules/${moduleCode}/items`, {
    data,
    ...config,
  });
};

/**
 * 操作选项分类（根层级）
 */
export const getOperationCategory = function(
  {
    moduleCode,
  }: {
    moduleCode:
      | 'REJECTED_CODES'
      | 'CANCELED_CODES'
      | 'FILE_REVIEW'
      | 'SIGN_CONDITION'
      | 'ANTI_FRAUD_SURVY_RESULT'
      | 'TELEPHONE_CHECK_LABEL_CODE';
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I操作模块选项>>> {
  return http.get(`/v1/operation-modules/${moduleCode}/items/categorys`, {
    ...config,
  });
};

/**
 * 删除模块选项
 */
export const deleteOperationModuleItem = function(
  {
    moduleCode,
    itemId,
  }: {
    moduleCode:
      | 'REJECTED_CODES'
      | 'CANCELED_CODES'
      | 'FILE_REVIEW'
      | 'SIGN_CONDITION'
      | 'ANTI_FRAUD_SURVY_RESULT'
      | 'TELEPHONE_CHECK_LABEL_CODE';
    itemId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.delete(`/v1/operation-modules/${moduleCode}/items/${itemId}`, {
    ...config,
  });
};

/**
 * 操作选项失效,生效
 */
export const disableItem = function(
  {
    moduleCode,
    itemId,
    enableStatus,
  }: {
    moduleCode:
      | 'REJECTED_CODES'
      | 'CANCELED_CODES'
      | 'FILE_REVIEW'
      | 'SIGN_CONDITION'
      | 'ANTI_FRAUD_SURVY_RESULT'
      | 'TELEPHONE_CHECK_LABEL_CODE';
    itemId: number;
    /** 0失效，1生效，2生效并应用 */
    enableStatus?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.put(`/v1/operation-modules/${moduleCode}/items/${itemId}/enable-status/${enableStatus}`, {
    ...config,
  });
};
