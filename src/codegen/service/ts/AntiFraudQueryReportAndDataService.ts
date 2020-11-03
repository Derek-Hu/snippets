import { Response } from '../commonType';
import { ILoanUserListReport } from '../types/ILoanUserListReport';
import { IInternalMatchResponse } from '../types/IInternalMatchResponse';
import { IDevicePageRes } from '../types/IDevicePageRes';
import { IGroupDeviceRes } from '../types/IGroupDeviceRes';

import http from '../httpClient';

/**
 * 地址信息
 */
export const getAddressInfo = function(
  params?: {
    ssn?: string;
    phone?: string;
    uid?: string;
    name?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/address-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 账户信息
 */
export const getBankCardInfo = function(
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/bank-card-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 通讯信息
 */
export const getCommunicationInfo = function(
  params: {
    ssn: string;
    phone: string;
    name: string;
    /** 明细类型[(通话号码汇总)f_contactDetails/(通话明细)conversation_detail/(本地联系人)f_mobile_data_local_cantact_list/(本地通话记录)f_mobile_data_call_history_list/(本地短信记录)f_mobile_data_sms_list] */
    detailType?: string;
    /** 对方号码 */
    personPhone?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/communication-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 教育信息
 */
export const getEducationInfo = function(
  params?: {
    ssn?: string;
    phone?: string;
    uid?: string;
    name?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/education-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同信息
 */
export const getPublicUserInfo = function(
  params?: {
    uid?: string;
    ssn?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_public_user_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱
 */
export const getGraphRelation = function(
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点通话人数信息
 */
export const getRelationCallInfo = function(
  params?: {
    uid?: string;
    ssn?: string;
    phone?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_call_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同公司信息
 */
export const getRelationCompanyInfo = function(
  params?: {
    uid?: string;
    ssn?: string;
    companyName?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_company_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同设备信息
 */
export const getRelationDeviceInfo = function(
  params?: {
    uid?: string;
    ssn?: string;
    deviceType?: string;
    deviceId?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_device_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同GPS信息
 */
export const getRelationGpsInfo = function(
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_gps_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同IP信息
 */
export const getRelationIpInfo = function(
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_ip_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同手机信息
 */
export const getRelationPhoneInfo = function(
  params: {
    uid: string;
    ssn?: string;
    phone: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_phone_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同联系人信息
 */
export const getRelationSameContactInfo = function(
  params?: {
    uid?: string;
    ssn?: string;
    phone?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_same_contact_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点共同联系人信息(右侧)
 */
export const getRelationSameContactRightInfo = function(
  params?: {
    uid?: string;
    ssn?: string;
    phone?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_relation_same_contact_right_info/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点详情
 */
export const getGraphVertex = function(
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_vertex/latest`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱节点关键信息
 */
export const getGraphVertexRelation = function(
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/graph_vertex_relation/latest`, {
    params,
    ...config,
  });
};

/**
 * 查询影像件接口
 */
export const getLoanImages = function(
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/image-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 贷款用户列表信息
 */
export const getLoanUserInfoList = function(
  params?: {
    uid?: string;
    tenant?: string;
    ssn?: string;
    name?: string;
    phone?: string;
    applyLoanCount?: number;
    compareFlag?: string;
    registerTimeStart?: number;
    registerTimeEnd?: number;
    iid?: string;
    page?: number;
    pageSize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<ILoanUserListReport>> {
  return http.get(`/v1/credit-review-orders/antiFraud/loan-user-info-list/latest`, {
    params,
    ...config,
  });
};

/**
 * 平台内借贷情况 订单报告
 */
export const getPlatformOrder = function(
  params?: {
    ssn?: string;
    phone?: string;
    uid?: string;
    companyName?: string;
    loanBaseId?: string;
    companyUniformCreditCode?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IInternalMatchResponse>> {
  return http.get(`/v1/credit-review-orders/antiFraud/order-feature-report/latest`, {
    params,
    ...config,
  });
};

/**
 * 其他平台借贷
 */
export const getOtherPlatformLoanReport = function(
  params: {
    ssn: string;
    name: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/other-platform-loan-report/latest`, {
    params,
    ...config,
  });
};

/**
 * 通讯信息聚合报告通讯统计
 */
export const getPhoneFeatureDetailInfo = function(
  params: {
    ssn: string;
    phone: string;
    name: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/phone-feature-detail-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 通讯信息聚合报告top20
 */
export const getPhoneFeatureInfoTop20 = function(
  params: {
    ssn: string;
    phone: string;
    name: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/phone-feature-top20-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 基础页通信汇总分析
 */
export const getPhoneSummaryInfo = function(
  params: {
    ssn: string;
    phone: string;
    iid: string;
    name: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/phone-summary-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 用户基础信息
 */
export const getUserBasicInfo = function(
  params?: {
    ssn?: string;
    phone?: string;
    uid?: string;
    name?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/user-basic-info/latest`, {
    params,
    ...config,
  });
};

/**
 * 工作信息
 */
export const getWorkInfo = function(
  params?: {
    ssn?: string;
    phone?: string;
    uid?: string;
    name?: string;
    iid?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/antiFraud/work-info/latest`, {
    params,
    ...config,
  });
};

/**
 * IP信息
 */
export const getIpDataReports = function(
  {
    phone,
  }: {
    phone: string;
  },
  params?: {
    ip?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/${phone}/Ip-data-reports/latest`, {
    params,
    ...config,
  });
};

/**
 * IP信息（汇总）
 */
export const getSummaryIpDataReports = function(
  {
    phone,
  }: {
    phone: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/credit-review-orders/${phone}/summary-ip-data-reports/latest`, {
    ...config,
  });
};

/**
 * 设备信息
 */
export const getDeviceDataReports = function(
  {
    ssn,
  }: {
    ssn: string;
  },
  params?: {
    deviceModel?: string;
    deviceId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IDevicePageRes>> {
  return http.get(`/v1/credit-review-orders/${ssn}/device-data-reports/latest`, {
    params,
    ...config,
  });
};

/**
 * 设备信息（汇总）
 */
export const getSummaryDeviceDataReports = function(
  {
    ssn,
  }: {
    ssn: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IGroupDeviceRes>> {
  return http.get(`/v1/credit-review-orders/${ssn}/summary-device-data-reports/latest`, {
    ...config,
  });
};

/**
 * 反欺诈调查内部报告的app记录（基于用户维度）
 */
export const getAntiFraudAppReport = function(
  params: {
    ssn: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/reports/app-data-report/latest`, {
    params,
    ...config,
  });
};

/**
 * 反欺诈外部报告身份验证
 */
export const getAntiFraudSsnVerify = function(
  params: {
    ssn: string;
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/ssn-verify-reports/latest`, {
    params,
    ...config,
  });
};
