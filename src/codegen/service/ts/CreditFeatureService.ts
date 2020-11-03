import { Response } from '../commonType';
import { I特征报告 } from '../types/I特征报告';

import http from '../httpClient';

/**
 * @deprecated
 * 查询特征信息
 */
export const getFeatureMessageByCreditReviewOrderId = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I特征报告>> {
  return http.get(`/v1/credit-features/${creditReviewOrderId}`, {
    ...config,
  });
};

/**
 * 查询特征报告
 */
export const getFeatureReport = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I特征报告>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/credit-features`, {
    ...config,
  });
};

/**
 * 初始化特征报告
 */
export const initFeatureReports = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/credit-features/init`, {
    ...config,
  });
};
