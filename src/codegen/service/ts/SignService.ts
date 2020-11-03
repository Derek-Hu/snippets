import { Response } from '../commonType';
import { I签约条件 } from '../types/I签约条件';

import http from '../httpClient';

/**
 * 获取当前借款企业对应的核心企业签约条件
 */
export const getCoreFirmCondition = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I签约条件>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/core-enterprise-sign-conditions`, {
    ...config,
  });
};
