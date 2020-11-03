import { Response } from '../commonType';

import http from '../httpClient';

/**
 * 进件资料查询参考[获取借款信息接口]https://wiki.hubenlv.com/pages/viewpage.action?pageId=31796416
 * 参考[获取借款信息接口]https://wiki.hubenlv.com/pages/viewpage.action?pageId=31796416
 */
export const getApplication = function (
  {
    applicationId,
  }: {
    /** 借款申请ID */
    applicationId: number;
  },
  params?: {
    /** 配置代码 */
    configCode?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/applications/${applicationId}`, {
    params,
    ...config,
  });
};

/**
 * 产品schema查询参考[获取所有支持的字段及其定义]https://wiki.hubenlv.com/pages/viewpage.action?pageId=31796416
 * 参考[获取所有支持的字段及其定义]https://wiki.hubenlv.com/pages/viewpage.action?pageId=31796416
 */
export const getProductList = function (
  params?: {
    /** 配置代码 */
    configCode?: string;
    /** 产品代码 */
    productCode?: string;
    /** 表单类型 */
    dataType?: string;
    /** 是否可读 */
    readable?: boolean;
    /** 是否可写 */
    writeable?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/product-schema`, {
    params,
    ...config,
  });
};
