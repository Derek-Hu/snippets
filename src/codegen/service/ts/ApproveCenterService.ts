import { Response } from '../commonType';
import { I银行账户信息 } from '../types/I银行账户信息';
import { ILabelDataExamineBo } from '../types/ILabelDataExamineBo';
import { I订单操作记录信息 } from '../types/I订单操作记录信息';
import { I字符串对象 } from '../types/I字符串对象';
import { IRuleBo } from '../types/IRuleBo';
import { I授信审核担保设置 } from '../types/I授信审核担保设置';
import { I审批额度 } from '../types/I审批额度';
import { ISignCondition } from '../types/ISignCondition';
import { ITelephoneCheckListVo } from '../types/ITelephoneCheckListVo';
import { IFileCreditResultLogV2 } from '../types/IFileCreditResultLogV2';
import { IFileBo } from '../types/IFileBo';
import { ITeleUploadFiles } from '../types/ITeleUploadFiles';

import http from '../httpClient';

/**
 * 获取一个用户的所有审批电核结果
 */
export const getTelephoneReviewResults = function(
  params: {
    ssn: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<string>>> {
  return http.get(`/v1/credit-review-orders/telephone-review-result`, {
    params,
    ...config,
  });
};

/**
 * 查询代扣卡
 */
export const getBankAccount = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
    latest?: boolean;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I银行账户信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/deduction-account`, {
    params,
    ...config,
  });
};

/**
 * 设置代扣卡
 */
export const saveDeductionAccount = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
  },
  /** 代扣卡 */
  data: I银行账户信息,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/credit-review-orders/${creditReviewOrderId}/deduction-account`, {
    params,
    data,
    ...config,
  });
};

/**
 * 删除代扣卡
 */
export const deleteDeductionAccount = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/credit-review-orders/${creditReviewOrderId}/deduction-account`, {
    params,
    ...config,
  });
};

/**
 * 获取审批核实录入结果
 */
export const getLabelDataExamine = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
    latest?: boolean;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<ILabelDataExamineBo>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/label-data-examine-result`, {
    params,
    ...config,
  });
};

/**
 * 提交审批核实录入结果
 */
export const saveLabelDataExamine = function(
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
  },
  /** 核实录入结果 */
  data: ILabelDataExamineBo,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/credit-review-orders/${creditReviewOrderId}/label-data-examine-result`, {
    params,
    data,
    ...config,
  });
};

/**
 * 查询订单操作记录
 */
export const getOrderOperationLog = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I订单操作记录信息>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/operationLog`, {
    ...config,
  });
};

/**
 * 获取审批电核结果:{'value':'content...'}
 */
export const getTelephoneReview = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
    latest?: boolean;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I字符串对象>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/telephone-review-result`, {
    params,
    ...config,
  });
};

/**
 * 提交审批电核结果
 */
export const saveTelephoneReview = function(
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
  },
  /** 电核结果 */
  data: I字符串对象,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/credit-review-orders/${creditReviewOrderId}/telephone-review-result`, {
    params,
    data,
    ...config,
  });
};

/**
 * 获取规则引擎审批结果
 */
export const ruleEngineResult = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<IRuleBo>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/workflow-review-results/latest`, {
    ...config,
  });
};

/**
 * 电核文件下载
 */
export const downloadReviewFile = function(
  {
    creditReviewOrderId,
    creditReviewRecordId,
    telephoneReviewFileId,
  }: {
    creditReviewOrderId: number;
    creditReviewRecordId: number;
    telephoneReviewFileId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.get(
    `/v1/credit-review-orders/${creditReviewOrderId}/${creditReviewRecordId}/${telephoneReviewFileId}/file-download`,
    {
      ...config,
    }
  );
};

/**
 * 电核文件批量上传
 */
export const batchUploadTelephoneReviewFile = function(
  {
    creditReviewOrderId,
    creditReviewRecordId,
    telephoneReviewRecordId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 电核描述编号 */
    telephoneReviewRecordId: number;
  },
  params?: {
    /** 文件流 */
    files?: Array<File>;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.post(
    `/v1/credit-review-orders/${creditReviewOrderId}/${creditReviewRecordId}/${telephoneReviewRecordId}/file-upload`,
    {
      params,
      ...config,
    }
  );
};

/**
 * 获取授信担保人信息，只返回节点审批提交的
 */
export const getCreditGuarantorPersonal = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
    latest?: boolean;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I授信审核担保设置>>> {
  return http.get(`/v2/credit-review-orders/${creditReviewOrderId}/guarantors`, {
    params,
    ...config,
  });
};

/**
 * 保存授信担保人信息
 */
export const saveCreditGuarantorPersonal = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
  },
  /** 担保人列表 */
  data: Array<I授信审核担保设置>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v2/credit-review-orders/${creditReviewOrderId}/guarantors`, {
    params,
    data,
    ...config,
  });
};

/**
 * 提交贷款审批结果: 定价信息
 */
export const saveRiskPrice = function(
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
  },
  /** 定价信息 */
  data: I审批额度,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v2/credit-review-orders/${creditReviewOrderId}/pricing`, {
    params,
    data,
    ...config,
  });
};

/**
 * 查询审批签约条件，节点审批提交的
 */
export const signCondition = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
    latest?: boolean;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ISignCondition>>> {
  return http.get(`/v2/credit-review-orders/${creditReviewOrderId}/sign-conditions`, {
    params,
    ...config,
  });
};

/**
 * 提交审批签约条件
 */
export const saveSignCondition = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
  },
  /** 签约条件 */
  data: Array<ISignCondition>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v2/credit-review-orders/${creditReviewOrderId}/sign-conditions`, {
    params,
    data,
    ...config,
  });
};

/**
 * 获取审批电核结果v2
 */
export const getTelephoneReviewV2 = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
    latest?: boolean;
    moduleType?: boolean;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<ITelephoneCheckListVo>> {
  return http.get(`/v2/credit-review-orders/${creditReviewOrderId}/telephone-review-result`, {
    params,
    ...config,
  });
};

/**
 * 保存审批电核结果v2
 */
export const saveTelephoneReviewV2 = function(
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  params: {
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 审批任务ID */
    taskId: string;
    moduleType?: boolean;
  },
  /** 电核请求报文 */
  data: IFileCreditResultLogV2,
  config?: { [key: string]: any }
): Promise<Response<number>> {
  return http.put(`/v2/credit-review-orders/${creditReviewOrderId}/telephone-review-result`, {
    params,
    data,
    ...config,
  });
};

/**
 * 电核文件批量上传V2
 */
export const batchUploadTelephoneReviewFileV2 = function(
  {
    creditReviewOrderId,
    creditReviewRecordId,
    telephoneReviewRecordId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
    /** 流程节点流转记录ID */
    creditReviewRecordId: number;
    /** 电核描述编号 */
    telephoneReviewRecordId: number;
  },
  /** 文件信息 */
  data?: Array<IFileBo>,
  config?: { [key: string]: any }
): Promise<Response<Array<ITeleUploadFiles>>> {
  return http.post(
    `/v2/credit-review-orders/${creditReviewOrderId}/${creditReviewRecordId}/${telephoneReviewRecordId}/file-upload`,
    {
      data,
      ...config,
    }
  );
};
