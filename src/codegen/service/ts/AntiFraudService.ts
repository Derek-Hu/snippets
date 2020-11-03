import { Response } from '../commonType';
import { I团案操作记录 } from '../types/I团案操作记录';
import { IAntiFraudGroupOperateResponse } from '../types/IAntiFraudGroupOperateResponse';
import { IAntiFraudGroupOperateRecordVo } from '../types/IAntiFraudGroupOperateRecordVo';
import { I反欺诈调查操作记录表 } from '../types/I反欺诈调查操作记录表';
import { IPageBo反欺诈调查操作记录表 } from '../types/IPageBo反欺诈调查操作记录表';
import { IPerformingPhoneResponse } from '../types/IPerformingPhoneResponse';
import { INonperformingPhoneDeleteReq } from '../types/INonperformingPhoneDeleteReq';
import { IBaseResponse } from '../types/IBaseResponse';
import { INonperformingPhoneListPageReq } from '../types/INonperformingPhoneListPageReq';
import { INonperformingPhoneListPageRes } from '../types/INonperformingPhoneListPageRes';
import { INonperformingPhoneReq } from '../types/INonperformingPhoneReq';
import { IPageBo反欺诈调查订单表 } from '../types/IPageBo反欺诈调查订单表';
import { IGraphResult } from '../types/IGraphResult';
import { IApplyPersonInfoResponse } from '../types/IApplyPersonInfoResponse';
import { IBlackListPageRes } from '../types/IBlackListPageRes';
import { IBlackListResponse } from '../types/IBlackListResponse';
import { Itask可分配用户信息 } from '../types/Itask可分配用户信息';
import { I枚举 } from '../types/I枚举';
import { I审批订单列表 } from '../types/I审批订单列表';
import { ISaveBlackTeamDataResponse } from '../types/ISaveBlackTeamDataResponse';
import { I客户借款信息 } from '../types/I客户借款信息';
import { IAntiFraudCaseStatisticsBo } from '../types/IAntiFraudCaseStatisticsBo';
import { IAntiFraudCaseStatisticsDetailBo } from '../types/IAntiFraudCaseStatisticsDetailBo';
import { IUserEntity } from '../types/IUserEntity';
import { IBlackListVipVo } from '../types/IBlackListVipVo';
import { IBlackListVipStatusVo } from '../types/IBlackListVipStatusVo';
import { IBlackListVipEntity } from '../types/IBlackListVipEntity';

import http from '../httpClient';

/**
 * 反欺诈-团伙调查结论提交
 */
export const submitGroupOperateRecord = function (
  data: I团案操作记录,
  config?: { [key: string]: any }
): Promise<Response<IAntiFraudGroupOperateResponse>> {
  return http.post(`/v1/anti-fraud-group-operate`, {
    data,
    ...config,
  });
};

/**
 * 反欺诈-团伙调查结论查询
 */
export const getGroupOperateRecord = function (
  params?: {
    /** 团伙核心aid */
    groupLeaderId?: string;
    /** 暂存模式 */
    stageMode?: 'ALL' | 'NO_STAGE' | 'STAGE_ONLY';
    /** 操作员id */
    userId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IAntiFraudGroupOperateRecordVo>>> {
  return http.get(`/v1/anti-fraud-group-operate/query`, {
    params,
    ...config,
  });
};

/**
 * 反欺诈-团伙调查结论获取
 */
export const getGroupOperateRecordUsingGet = function (
  {
    groupOpId,
  }: {
    groupOpId: number;
  },
  params?: {
    detail?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<IAntiFraudGroupOperateRecordVo>> {
  return http.get(`/v1/anti-fraud-group-operate/${groupOpId}`, {
    params,
    ...config,
  });
};

/**
 * 新增反欺诈调查操作记录
 */
export const submitAntiFraudOperateRecord = function (
  /** 欺诈调查操作记录 */
  data: I反欺诈调查操作记录表,
  config?: { [key: string]: any }
): Promise<Response<number>> {
  return http.post(`/v1/anti-fraud-operate-records`, {
    data,
    ...config,
  });
};

/**
 * 反欺诈调查操作记录查询(无分页,保持与之前的返回值兼容)
 */
export const getAntiFraudOperateRecord = function (
  params?: {
    /** 借款人id, 允许提供0到多个aid */
    iid?: Array<string>;
    /** 借款人ssn, 允许提供0到多个ssn, 建议不与aid同时指定 */
    ssn?: Array<string>;
    /** 关联的主反欺诈调查(关联的团案调查发起的源欺诈调查)id */
    masterId?: number;
    /** 仅查询最新记录,缺省false */
    latestOnly?: boolean;
    /** 包含stage记录 */
    stageMode?: 'ALL' | 'NO_STAGE' | 'STAGE_ONLY';
    /** 页码 */
    page?: number;
    /** 页大小 */
    pagesize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I反欺诈调查操作记录表>>> {
  return http.get(`/v1/anti-fraud-operate-records/query`, {
    params,
    ...config,
  });
};

/**
 * 反欺诈调查操作记录查询
 */
export const getAntiFraudOperateRecordWithPage = function (
  params?: {
    /** 借款人id, 允许提供0到多个aid */
    iid?: Array<string>;
    /** 借款人ssn, 允许提供0到多个ssn, 建议不与aid同时指定 */
    ssn?: Array<string>;
    /** 关联的主反欺诈调查(关联的团案调查发起的源欺诈调查)id */
    masterId?: number;
    /** 仅查询最新记录,缺省false */
    latestOnly?: boolean;
    /** 包含stage记录 */
    stageMode?: 'ALL' | 'NO_STAGE' | 'STAGE_ONLY';
    /** 页码 */
    page?: number;
    /** 页大小 */
    pagesize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<IPageBo反欺诈调查操作记录表>> {
  return http.get(`/v1/anti-fraud-operate-records/query-with-page`, {
    params,
    ...config,
  });
};

/**
 * 反欺诈不良号码库-获取不良号码详情
 */
export const getNonperformingPhoneDetail = function (
  params: {
    phoneNum: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IPerformingPhoneResponse>> {
  return http.get(`/v1/anti-fraud-order/nonperforming/phone`, {
    params,
    ...config,
  });
};

/**
 * 反欺诈不良号码库-移除不良号码
 */
export const deleteNonperformingPhone = function (
  data: Array<INonperformingPhoneDeleteReq>,
  config?: { [key: string]: any }
): Promise<Response<IBaseResponse>> {
  return http.post(`/v1/anti-fraud-order/nonperforming/phone/delete`, {
    data,
    ...config,
  });
};

/**
 * 反欺诈不良号码库-获取不良号码列表
 */
export const getNonperformingPhoneList = function (
  data: INonperformingPhoneListPageReq,
  config?: { [key: string]: any }
): Promise<Response<INonperformingPhoneListPageRes>> {
  return http.post(`/v1/anti-fraud-order/nonperforming/phone/list`, {
    data,
    ...config,
  });
};

/**
 * 反欺诈不良号码库-添加不良号码
 */
export const saveNonperformingPhone = function (
  data: Array<INonperformingPhoneReq>,
  config?: { [key: string]: any }
): Promise<Response<IBaseResponse>> {
  return http.post(`/v1/anti-fraud-order/nonperforming/phone/save`, {
    data,
    ...config,
  });
};

/**
 * 根据条件查询反欺诈调查订单(工作台)列表
 */
export const getAntiFraudOrders = function (
  params: {
    /** 查询类型 */
    queryType: 'MYSELF' | 'UNASSIGN' | 'ALL';
    /** 审批状态 */
    status?: string;
    iid?: string;
    /** 姓名 */
    customerName?: string;
    /** 证件号码 */
    ssn?: string;
    /** 发起人 */
    initiatorName?: string;
    /** 发起调查起始日期 */
    startDate?: number;
    /** 发起调查结束日期 */
    endDate?: number;
    /** 租户 */
    tenant?: 'hubenlv';
    /** 任务用户Id */
    userId?: number;
    /** 是否有流程 */
    hasProcess?: boolean;
    /** 页码 */
    page?: number;
    /** 页大小 */
    pagesize?: number;
    /** undefined */
    userName?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IPageBo反欺诈调查订单表>> {
  return http.get(`/v1/anti-fraud-orders`, {
    params,
    ...config,
  });
};

/**
 * 根据ActorId创建反欺诈调查订单
 */
export const createAntiFraudOrderByActor = function (
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/anti-fraud-orders`, {
    params,
    ...config,
  });
};

/**
 * 知识图谱数据补充--团伙借款人批量展示
 */
export const getGraphRelationWithAntiFraud = function (
  params: {
    iid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IGraphResult>> {
  return http.get(`/v1/anti-fraud-orders/antiFraud/getGraphRelationWithAntiFraud`, {
    params,
    ...config,
  });
};

/**
 * 获取申请用户个人信息
 */
export const getApplyPersonInfo = function (
  params: {
    /** 申请人uid */
    uid: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IApplyPersonInfoResponse>> {
  return http.get(`/v1/anti-fraud-orders/apply-person-info`, {
    params,
    ...config,
  });
};

/**
 * 批量派单操作（多个taskIdId用逗号隔开）
 */
export const batchAssign = function (
  params: {
    taskIdIds: string;
    userId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/anti-fraud-orders/assignment-batch`, {
    params,
    ...config,
  });
};

/**
 * 批量转出操作，转出后回到派单池（多个taskIdId用逗号隔开）
 */
export const batchWithdrawAssign = function (
  params: {
    taskIdIds: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/anti-fraud-orders/assignment-batch`, {
    params,
    ...config,
  });
};

/**
 * 团伙管理-查询团案数据
 */
export const getBlackTeamData = function (
  params?: {
    teamId?: string;
    name?: string;
    ssn?: string;
    /** 团队角色 1:teamleader 2:关联人 */
    teamRole?: number;
    operator?: string;
    /** yyyyMMdd */
    createTime?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IBlackListPageRes>> {
  return http.get(`/v1/anti-fraud-orders/black-team/get-black-team-data`, {
    params,
    ...config,
  });
};

/**
 * 团伙管理-移出团案
 */
export const removeBlackTeamData = function (
  params: {
    /** 团队角色 1:teamleader 2:关联人 */
    teamRole: number;
    /** 团伙编号id */
    teamId: string;
    /** 身份证 */
    ssn: string;
    /** 操作员 */
    operator: string;
    /** 移出原因 */
    reason?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IBlackListResponse>> {
  return http.post(`/v1/anti-fraud-orders/black-team/remove-black-team-data`, {
    params,
    ...config,
  });
};

/**
 * 获取taskIds对应的可分配候选人交集列表
 */
export const getSameCandidateUsers = function (
  params: {
    taskIdIds: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<Itask可分配用户信息>>> {
  return http.get(`/v1/anti-fraud-orders/candidate-users`, {
    params,
    ...config,
  });
};

/**
 * 审批状态集
 */
export const listAntiFraudOrderStatus = function (
  params: {
    queryType: 'MYSELF' | 'UNASSIGN' | 'ALL';
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I枚举>>> {
  return http.get(`/v1/anti-fraud-orders/status`, {
    params,
    ...config,
  });
};

/**
 * 欺诈调查对应订单是否中断流程
 */
export const getInterruptFlag = function (
  {
    antiFraudOrderId,
  }: {
    /** 反欺诈订单ID */
    antiFraudOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.get(`/v1/anti-fraud-orders/${antiFraudOrderId}/interruptFlag`, {
    ...config,
  });
};

/**
 * 中断中的订单信息展示
 */
export const getInterruptedAntiFraudOrders = function (
  {
    antiFraudOrderId,
  }: {
    /** 反欺诈订单ID */
    antiFraudOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批订单列表>>> {
  return http.get(`/v1/anti-fraud-orders/${antiFraudOrderId}/interrupted`, {
    ...config,
  });
};

/**
 * 模糊匹配团案编号
 */
export const getMatchBlackTeamId = function (
  {
    iid,
  }: {
    iid: string;
  },
  params: {
    teamId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<string>>> {
  return http.get(`/v1/anti-fraud-orders/${iid}/get-match-black-team-id`, {
    params,
    ...config,
  });
};

/**
 * 插入团案数据
 */
export const saveBlackTeamData = function (
  {
    iid,
  }: {
    iid: string;
  },
  params?: {
    /** 关联团案时必传 */
    teamId?: string;
    /** 1:新建团案 2：关联团案 */
    opeartorType?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<ISaveBlackTeamDataResponse>> {
  return http.post(`/v1/anti-fraud-orders/${iid}/save-black-team-data`, {
    params,
    ...config,
  });
};

/**
 * 根据SSN查询借款基本信息
 */
export const getLoanBasicInfoBySsn = function (
  {
    ssn,
  }: {
    ssn: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I客户借款信息>>> {
  return http.get(`/v1/anti-fraud-orders/${ssn}/get-loan-basic-info`, {
    ...config,
  });
};

/**
 * 派单操作
 */
export const assign = function (
  {
    taskId,
  }: {
    taskId: string;
  },
  params: {
    userId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/anti-fraud-orders/${taskId}/assignment`, {
    params,
    ...config,
  });
};

/**
 * 转出操作，转出后回到派单池
 */
export const withdrawAssign = function (
  {
    taskId,
  }: {
    taskId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/anti-fraud-orders/${taskId}/assignment`, {
    ...config,
  });
};

/**
 * 获取taskId对应的可分配候选人列表
 */
export const getCandidateUsers = function (
  {
    taskId,
  }: {
    taskId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<Itask可分配用户信息>>> {
  return http.get(`/v1/anti-fraud-orders/${taskId}/candidate-users`, {
    ...config,
  });
};

/**
 * 根据taskId认领反欺诈调查订单
 */
export const claimOrder = function (
  {
    taskId,
  }: {
    taskId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/anti-fraud-orders/${taskId}/claim`, {
    ...config,
  });
};

/**
 * AFC案件统计-调查总详情
 */
export const getCaseStatistics = function (
  params?: {
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IAntiFraudCaseStatisticsBo>>> {
  return http.get(`/v1/antiFraud/case-statistics`, {
    params,
    ...config,
  });
};

/**
 * AFC案件统计-调查人明细
 */
export const getCaseStatisticsDetail = function (
  params?: {
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 调查人id */
    userId?: string;
    /** 产品 魔借：SPEED_LOAN uloan:PL-OCL-ULOAN01-19646-01 */
    productCodes?: Array<string>;
    downloadExcel?: boolean;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IAntiFraudCaseStatisticsDetailBo>>> {
  return http.get(`/v1/antiFraud/case-statistics-detail`, {
    params,
    ...config,
  });
};

/**
 * 查询某个分组下面启用状态的用户名（FRAUD_INVESTIGATION_REVIEW:反欺诈组，TELEPHONE_REVIEW：电核组）
 */
export const getUserNameList = function (
  {
    groupCode,
  }: {
    groupCode: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<string>>> {
  return http.get(`/v1/auth/userNameList/${groupCode}`, {
    ...config,
  });
};

/**
 * 获取ACRC下分组的所有user数据
 */
export const getAcrcGroupUserInfo = function (
  {
    groupId,
  }: {
    groupId: 'TELEPHONE_REVIEW' | 'FRAUD_INVESTIGATION_REVIEW';
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IUserEntity>>> {
  return http.get(`/v1/auth/${groupId}/getAcrcGroupUserInfo`, {
    ...config,
  });
};

/**
 * 黑白灰名单-查询
 */
export const getBlackListNew = function (
  params?: {
    relationKey?: number;
    relationValue?: string;
    operator?: string;
    status?: number;
    /** 入黑时间yyyyMMdd/yyyyMM */
    inTime?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IBlackListVipVo>>> {
  return http.get(`/v1/list-manager/getBlackListNew`, {
    params,
    ...config,
  });
};

/**
 * 黑白灰名单-状态查询
 */
export const getBlackListStatusNew = function (
  params?: {
    relationKey?: number;
    relationValue?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<IBlackListVipStatusVo>> {
  return http.get(`/v1/list-manager/getBlackListStatusNew`, {
    params,
    ...config,
  });
};

/**
 * 黑白灰名单-新增(若存在相同key&amp;value，则自动进行更新操作)
 */
export const saveBlackListNew = function (
  data: Array<IBlackListVipEntity>,
  config?: { [key: string]: any }
): Promise<Response<IBlackListResponse>> {
  return http.put(`/v1/list-manager/saveBlackListNew`, {
    data,
    ...config,
  });
};

/**
 * 黑白灰名单-更改
 */
export const updateBlackListNew = function (
  data: Array<IBlackListVipStatusVo>,
  config?: { [key: string]: any }
): Promise<Response<IBlackListResponse>> {
  return http.post(`/v1/list-manager/updateBlackListNew`, {
    data,
    ...config,
  });
};

/**
 * 黑白灰名单-维度查询byAid
 */
export const getBlackListByAidNew = function (
  {
    iid,
  }: {
    iid: string;
  },
  params?: {
    /** 1:黑 2:灰 3:普通用户 4:白 */
    status?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IBlackListVipVo>>> {
  return http.get(`/v1/list-manager/${iid}/getBlackListByAidNew`, {
    params,
    ...config,
  });
};
