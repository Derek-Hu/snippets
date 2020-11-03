import { Response } from '../commonType';
import { ILoanAppVo } from '../types/ILoanAppVo';
import { I渠道基本信息 } from '../types/I渠道基本信息';
import { I下载链接 } from '../types/I下载链接';
import { I枚举 } from '../types/I枚举';
import { I产品基本信息 } from '../types/I产品基本信息';
import { I合同信息 } from '../types/I合同信息';
import { I授信信息聚合model } from '../types/I授信信息聚合model';
import { IDocumentVo } from '../types/IDocumentVo';

import http from '../httpClient';

/**
 * 借款申请列表查询
 */
export const getList = function(
  params?: {
    /** 产品编号 */
    productCodeList?: Array<string>;
    /** 渠道编号 */
    channelIdList?: Array<string>;
    /** 借款状态 */
    status?: Array<number>;
    /** 日期类型(0=申请日期，1=放款日期) */
    dateType?: number;
    /** 开始时间 */
    startDate?: number;
    /** 结束时间 */
    endDate?: number;
    /** 借款人身份证号) */
    idCard?: string;
    /** 借款编号(精确查询某个loanId) */
    loanId?: number;
    /** 页面编码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ILoanAppVo>>> {
  return http.get(`/v1/applications`, {
    params,
    ...config,
  });
};

/**
 * 获取渠道信息
 */
export const getChannelBaseInfo = function(config?: { [key: string]: any }): Promise<Response<Array<I渠道基本信息>>> {
  return http.get(`/v1/applications/channel/infos`, {
    ...config,
  });
};

/**
 * 获取合同下载链接
 */
export const getContractDownloadUrl = function(
  {
    contractId,
  }: {
    /** 合同ID */
    contractId: number;
  },
  params: {
    email: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I下载链接>> {
  return http.get(`/v1/applications/contracts/${contractId}/link`, {
    params,
    ...config,
  });
};

/**
 * 跳转影像件下载地址
 */
export const toDocumentLink = function(
  {
    fileId,
  }: {
    /** 文件编号 */
    fileId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.get(`/v1/applications/document/${fileId}/link`, {
    ...config,
  });
};

/**
 * 查询影像件下载地址
 */
export const getDocumentDownLoadLink = function(
  {
    fileId,
  }: {
    /** 文件编号 */
    fileId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I下载链接>> {
  return http.get(`/v1/applications/document/${fileId}/url`, {
    ...config,
  });
};

/**
 * 获取借款状态
 */
export const getCreditReviewLoanStatus = function(config?: { [key: string]: any }): Promise<Response<Array<I枚举>>> {
  return http.get(`/v1/applications/loan/status`, {
    ...config,
  });
};

/**
 * 获取产品信息
 */
export const getProductBaseInfo = function(config?: { [key: string]: any }): Promise<Response<Array<I产品基本信息>>> {
  return http.get(`/v1/applications/product/infos`, {
    ...config,
  });
};

/**
 * 获取产品模板信息
 */
export const getProductTemplateBaseInfo = function(
  params: {
    templateCode: string;
    namespace: string;
    productCode?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/applications/product/template`, {
    params,
    ...config,
  });
};

/**
 * 查询合同列表
 */
export const getContractList = function(
  {
    applicationId,
  }: {
    /** 借款申请ID */
    applicationId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I合同信息>>> {
  return http.get(`/v1/applications/${applicationId}/contracts`, {
    ...config,
  });
};

/**
 * 获取授信信息
 */
export const getCreditInfo = function(
  {
    applicationId,
  }: {
    /** 借款申请ID */
    applicationId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I授信信息聚合model>> {
  return http.get(`/v1/applications/${applicationId}/credit`, {
    ...config,
  });
};

/**
 * 查询影像件列表
 */
export const getDocumentList = function(
  {
    applicationId,
  }: {
    /** 借款申请ID */
    applicationId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IDocumentVo>>> {
  return http.get(`/v1/applications/${applicationId}/documents`, {
    ...config,
  });
};

/**
 * 查询订单状态
 */
export const getApplicationStatus = function(
  {
    applicationId,
  }: {
    /** 借款申请ID */
    applicationId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/applications/${applicationId}/status`, {
    ...config,
  });
};

/**
 * 获取三方合同批量下载链接
 */
export const getTripartiteContractsDownloadUrl = function(
  {
    applicationId,
  }: {
    /** 申请ID */
    applicationId: number;
  },
  params: {
    /** 合同ID列表 */
    contractIdList?: Array<string>;
    /** 原因 */
    reason?: string;
    email: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I下载链接>> {
  return http.get(`/v1/applications/${applicationId}/tripartite-contracts/link`, {
    params,
    ...config,
  });
};
