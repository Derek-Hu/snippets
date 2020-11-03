import { Response } from '../commonType';
import { I借款内匹结果信息 } from '../types/I借款内匹结果信息';

import http from '../httpClient';

/**
 * 商贷内匹查询
 */
export const commercialMatchLoan = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I借款内匹结果信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/commercial-related-loans`, {
    ...config,
  });
};

/**
 * 选择商贷内匹数据中的某行
 */
export const selectCommercialLoan = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    /** 该行数据的loanAppId */
    loanAppId?: string;
    /** 选中为true，取消选择为false */
    selected?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/commercial-related-loans`, {
    params,
    ...config,
  });
};

/**
 * 内匹查询,根据不同内匹类型查询不同的内匹数据
 */
export const matchLoanHistory = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I借款内匹结果信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/related-loans`, {
    ...config,
  });
};

/**
 * 内匹查询,根据不同内匹类型查询不同的内匹数据（用户维度）
 */
export const matchAntiFraudLoanHistory = function(
  params: {
    ssn: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I借款内匹结果信息>> {
  return http.get(`/v1/internal-match/related-loans`, {
    params,
    ...config,
  });
};
