import { Response } from '../commonType';
import { I审批模块 } from '../types/I审批模块';

import http from '../httpClient';

/**
 * 根据订单查询当前审批节点应该显示的操作模块
 */
export const listReviewModule = function(
  {
    orderId,
  }: {
    /** 审批订单ID */
    orderId: number;
  },
  params?: {
    /** 流程节点ID */
    recordId?: number;
    /** 审批任务ID */
    taskId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批模块>>> {
  return http.get(`/v1/credit-review-orders/${orderId}/review-modules`, {
    params,
    ...config,
  });
};
