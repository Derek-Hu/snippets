import { Response } from '../commonType';
import { ICityInfoListReport } from '../types/ICityInfoListReport';
import { IMatrixResultListReportCollectionSchema } from '../types/IMatrixResultListReportCollectionSchema';
import { INewCreditReport } from '../types/INewCreditReport';

import http from '../httpClient';

/**
 * 核实录入城市信息
 */
export const getCityInfoList = function(config?: { [key: string]: any }): Promise<Response<ICityInfoListReport>> {
  return http.get(`/v1/credit-review-orders/antiFraud/cityinfolist-report/latest`, {
    ...config,
  });
};

/**
 * 三方报告schema接口
 */
export const getThirdReportSch = function(
  params: {
    url: string;
    queryOption?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IMatrixResultListReportCollectionSchema>> {
  return http.get(`/v1/credit-review-orders/third-report-schema`, {
    params,
    ...config,
  });
};

/**
 * 三方报告详情接口
 */
export const getThirdReport = function(
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    reportType: string;
  },
  config?: { [key: string]: any }
): Promise<Response<INewCreditReport>> {
  return http.get(`/v1/proc-conf-versions/${creditReviewOrderId}/report/detail`, {
    params,
    ...config,
  });
};
