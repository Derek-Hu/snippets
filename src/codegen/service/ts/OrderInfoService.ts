import { Response } from '../commonType';
import { I保存商贷影像件请求体 } from '../types/I保存商贷影像件请求体';
import { I商贷上传审核资料后的响应体 } from '../types/I商贷上传审核资料后的响应体';
import { I商贷影像件 } from '../types/I商贷影像件';
import { Iossweb上传链接 } from '../types/Iossweb上传链接';
import { ICreditOrderReviewFileBo } from '../types/ICreditOrderReviewFileBo';
import { ICreditOrderFileReviewBo } from '../types/ICreditOrderFileReviewBo';
import { IFileBo } from '../types/IFileBo';
import { I文件上传地址链接 } from '../types/I文件上传地址链接';

import http from '../httpClient';

/**
 * 电话核查批量文件上传确认
 */
export const submitFileByIds = function(
  data: Array<string>,
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.post(`/v1/credit-review-orders/tele-file-submit`, {
    data,
    ...config,
  });
};

/**
 * 删除商贷审核资料Issue History: RC-2204
 * Issue History: RC-2204
 */
export const deleteCommercialFile = function(
  {
    creditReviewOrderId,
    fileId,
  }: {
    creditReviewOrderId: number;
    fileId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.delete(`/v1/credit-review-orders/${creditReviewOrderId}/commercial-files/${fileId}`, {
    ...config,
  });
};

/**
 * 保存商贷审核资料
 */
export const saveCommercialDocument = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  data: I保存商贷影像件请求体,
  config?: { [key: string]: any }
): Promise<Response<I商贷上传审核资料后的响应体>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/commercial-loan-file`, {
    data,
    ...config,
  });
};

/**
 * 获取商贷文件下载url, 用户进件除外(用户进件返回的url就是下载url, 只有审核资料里上传的需要转换)
 */
export const downloadCommercialDocument = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    fileId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/commercial-loan-file/download`, {
    params,
    ...config,
  });
};

/**
 * 获取商贷影像件
 */
export const getCommercialLoanDocumentInfos = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I商贷影像件>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/commercial-loan-files`, {
    ...config,
  });
};

/**
 * 审批订单-资料核查-文件预览url（订单上传的及进件的文件）Issue History: RC-1186
 * Issue History: RC-1186
 */
export const getDownUrlByType = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    fileType: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<string>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/file-preview`, {
    params,
    ...config,
  });
};

/**
 * 获取文件预览ID
 */
export const getFileIdsByOrderId = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<string>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/file-upload-id`, {
    ...config,
  });
};

/**
 * 审批订单-资料核查-上传文件urlIssue History: RC-1186
 * Issue History: RC-1186
 */
export const getUploadUrl = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    fileName: string;
    md5?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Iossweb上传链接>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/file-upload-url`, {
    params,
    ...config,
  });
};

/**
 * 审批订单-资料核查-上传保存:fileKey,fileName,fileType,creditRecordId必须Issue History: RC-1186
 * Issue History: RC-1186
 */
export const saveFiles = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  data: Array<ICreditOrderReviewFileBo>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/files`, {
    data,
    ...config,
  });
};

/**
 * 审批订单-资料核查-查看上传的文件（只有上传的文件）Issue History: RC-1186
 * Issue History: RC-1186
 */
export const getCreditOrderFiles = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    fileType?: string;
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ICreditOrderReviewFileBo>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/files-detail`, {
    params,
    ...config,
  });
};

/**
 * 审批订单-资料核查-概要及总数（订单进件及上传的文件）Issue History: RC-1186
 * Issue History: RC-1186
 */
export const getCreditOrderFileTypes = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ICreditOrderFileReviewBo>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/files-summary`, {
    params,
    ...config,
  });
};

/**
 * 审批订单-资料核查-下载文件（只有上传的文件）Issue History: RC-1186
 * Issue History: RC-1186
 */
export const getDownUrl = function(
  {
    creditReviewOrderId,
    fileId,
  }: {
    creditReviewOrderId: number;
    fileId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/files/${fileId}`, {
    ...config,
  });
};

/**
 * 审批订单-资料核查-删除文件（只有Issue History: RC-1186
 * Issue History: RC-1186
 */
export const deleteFile = function(
  {
    creditReviewOrderId,
    fileId,
  }: {
    creditReviewOrderId: number;
    fileId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.delete(`/v1/credit-review-orders/${creditReviewOrderId}/files/${fileId}`, {
    ...config,
  });
};

/**
 * 获取影像件列表
 */
export const getGeneralLoanDocumentInfos = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I商贷影像件>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/general-loan-files`, {
    ...config,
  });
};

/**
 * 审批订单-资料核查-核查:fileType,checkResult,checkRemark,creditRecordId必须Issue History: RC-1186
 * Issue History: RC-1186
 */
export const reviewFiles = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  data: ICreditOrderFileReviewBo,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/credit-review-orders/${creditReviewOrderId}/review-file`, {
    data,
    ...config,
  });
};

/**
 * 创建文件上传地址
 */
export const getFileUploadUrl = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  data: IFileBo,
  config?: { [key: string]: any }
): Promise<Response<I文件上传地址链接>> {
  return http.post(`/v2/credit-review-orders/${creditReviewOrderId}/file-upload-url`, {
    data,
    ...config,
  });
};

/**
 * 获取文件预览url
 */
export const getFileById = function(
  {
    fileId,
  }: {
    fileId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.get(`/v2/credit-review-orders/${fileId}/file-preview`, {
    ...config,
  });
};

/**
 * 文件上传确认
 */
export const submitFileById = function(
  {
    fileId,
  }: {
    fileId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.post(`/v2/credit-review-orders/${fileId}/file-submit`, {
    ...config,
  });
};
