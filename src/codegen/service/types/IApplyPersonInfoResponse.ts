import { IAntiFraudIvestigateData } from './IAntiFraudIvestigateData';

export interface IApplyPersonInfoResponse {
  data?: IAntiFraudIvestigateData;

  message?: string;
  /** 结果状态 成功 OK, 失败 FAILURE */
  status?: string;
}
