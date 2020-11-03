import { Response } from '../commonType';
import { ITelephoneReviewRecordBo } from '../types/ITelephoneReviewRecordBo';

import http from '../httpClient';

/**
 * 反欺诈电核审批记录列表
 */
export const getFraudTelephoneReviewRecordList = function(
  {
    iid,
  }: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ITelephoneReviewRecordBo>>> {
  return http.get(`/v1/telephoneReview/record-list/fraud/${iid}`, {
    ...config,
  });
};

/**
 * 电核审批记录列表
 */
export const getTelephoneReviewRecordList = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ITelephoneReviewRecordBo>>> {
  return http.get(`/v1/telephoneReview/record-list/${creditReviewOrderId}`, {
    ...config,
  });
};

/**
 * 添加电核审批记录
 */
export const saveTelephoneReviewRecord = function(
  data: ITelephoneReviewRecordBo,
  config?: { [key: string]: any }
): Promise<Response<number>> {
  return http.post(`/v1/telephoneReview/saveRecord`, {
    data,
    ...config,
  });
};

/**
 * 更新电核审批记录
 */
export const updateTelephoneReviewRecord = function(
  data: ITelephoneReviewRecordBo,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/telephoneReview/saveRecord`, {
    data,
    ...config,
  });
};

/**
 * 删除电核审批记录
 */
export const deleteTelephoneReviewRecord = function(
  {
    id,
  }: {
    id: number;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/telephoneReview/${id}`, {
    ...config,
  });
};

/**
 * 电核日志
 */
export const getTelephoneReviews = function(
  {
    iid,
  }: {
    iid: string;
  },
  params: {
    ssn: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ITelephoneReviewRecordBo>>> {
  return http.get(`/v1/telephoneReview/${iid}/get-telephone-reviews`, {
    params,
    ...config,
  });
};
