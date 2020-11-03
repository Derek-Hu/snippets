import { Response } from '../commonType';
import { I审批订单列表 } from '../types/I审批订单列表';
import { I枚举 } from '../types/I枚举';
import { ITaskApprovalRequest } from '../types/ITaskApprovalRequest';
import { ITaskRequest } from '../types/ITaskRequest';
import { ITaskBo } from '../types/ITaskBo';
import { Itask可分配用户信息 } from '../types/Itask可分配用户信息';
import { ILoanAppIssueInfoVo } from '../types/ILoanAppIssueInfoVo';
import { I工作流节点信息 } from '../types/I工作流节点信息';
import { I回退任务结点 } from '../types/I回退任务结点';
import { I订单资料参数值 } from '../types/I订单资料参数值';
import { I额度信息 } from '../types/I额度信息';
import { I审批数据变更结果 } from '../types/I审批数据变更结果';
import { I收入负债指标所有字段 } from '../types/I收入负债指标所有字段';
import { I收入负债比计算请求体 } from '../types/I收入负债比计算请求体';
import { I收入负债比计算响应体 } from '../types/I收入负债比计算响应体';
import { I担保人信息 } from '../types/I担保人信息';
import { I收入负债指标 } from '../types/I收入负债指标';
import { I收入负债指标计算请求体 } from '../types/I收入负债指标计算请求体';
import { I收入负债指标计算响应体 } from '../types/I收入负债指标计算响应体';
import { I抵押信息 } from '../types/I抵押信息';
import { I审核结点上审核模块开关属性配置 } from '../types/I审核结点上审核模块开关属性配置';
import { IQuotaRequest } from '../types/IQuotaRequest';
import { IRuleBo } from '../types/IRuleBo';
import { I上标前提前结清 } from '../types/I上标前提前结清';
import { I批复信息 } from '../types/I批复信息';
import { IPageRespVoReservationLogRespVo } from '../types/IPageRespVoReservationLogRespVo';
import { I审批模块编辑配置项 } from '../types/I审批模块编辑配置项';
import { I字段基本描述信息 } from '../types/I字段基本描述信息';
import { I审批意见信息 } from '../types/I审批意见信息';
import { I审核模块完成状态 } from '../types/I审核模块完成状态';
import { I股东信息 } from '../types/I股东信息';
import { I支持的审批操作 } from '../types/I支持的审批操作';
import { I未结清贷款返回 } from '../types/I未结清贷款返回';
import { IReviewModuleCompleteStatusBo } from '../types/IReviewModuleCompleteStatusBo';
import { ILoanTypeData } from '../types/ILoanTypeData';
import { IProcConfCreditReportData } from '../types/IProcConfCreditReportData';
import { ICreditVerifyInfoData } from '../types/ICreditVerifyInfoData';
import { ICreditVerifyInfoBo } from '../types/ICreditVerifyInfoBo';
import { IOrderWorkFlowInfo } from '../types/IOrderWorkFlowInfo';
import { I审批订单详情V3 } from '../types/I审批订单详情V3';

import http from '../httpClient';

/**
 * 根据条件查询审批订单(工作台)列表
 */
export const getCreditReviewBacklogs = function (
  params: {
    /** 订单编号 */
    creditReviewOrderId?: number;
    /** 审批订单类型 */
    type?: 'CREDIT' | 'LOAN';
    /** 查询来源,0-我的；1-派单池 */
    tabType?: number;
    /** 借款人编号 */
    applicantId?: string;
    /** 借款申请编号 */
    applicationId?: string;
    /** 借款人姓名 */
    applicantName?: string;
    /** 借款人身份证号 */
    ssn?: string;
    /** 申请起始日期 */
    startDate?: number;
    /** 申请结束如期 */
    endDate?: number;
    /** 关联借款申请编号 */
    relatedApplicationId?: string;
    userId?: number;
    /** 待办事项状态 */
    status: 'CLAIM' | 'PENDING' | 'APPROVED';
    /** 订单编号, 将废弃 */
    id?: string;
    /** 页码 */
    page?: number;
    /** 页大小 */
    pagesize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批订单列表>>> {
  return http.get(`/v1/credit-review-backlogs`, {
    params,
    ...config,
  });
};

/**
 * 待办事项状态集
 */
export const listCreditReviewBacklogStatus = function (config?: {
  [key: string]: any;
}): Promise<Response<Array<I枚举>>> {
  return http.get(`/v1/credit-review-backlogs/status`, {
    ...config,
  });
};

/**
 * 根据taskId审批订单
 */
export const approvalOrder = function (
  {
    creditReviewOrderId,
  }: {
    /** 订单Id */
    creditReviewOrderId?: number;
  },
  data: ITaskApprovalRequest,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/credit-review-backlogs/${creditReviewOrderId}/approval`, {
    data,
    ...config,
  });
};

/**
 * 根据taskId认领审批订单
 */
export const claimOrder = function (
  {
    creditReviewOrderId,
  }: {
    /** 订单Id */
    creditReviewOrderId?: number;
  },
  data: ITaskRequest,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/credit-review-backlogs/${creditReviewOrderId}/claim`, {
    data,
    ...config,
  });
};

/**
 * 查询当前审批任务信息
 */
export const getTask = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单ID */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<ITaskBo>> {
  return http.get(`/v1/credit-review-backlogs/${creditReviewOrderId}/task`, {
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
  params?: {
    userId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/credit-review-backlogs/${taskId}/assignment`, {
    params,
    ...config,
  });
};

/**
 * 转出操作，转出后回到派单池Issue History: RC-1417
 * Issue History: RC-1417
 */
export const withdrawAssign = function (
  {
    taskId,
  }: {
    taskId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/credit-review-backlogs/${taskId}/assignment`, {
    ...config,
  });
};

/**
 * 获取taskId对应的可分配候选人列表Issue History: RC-1280
 * Issue History: RC-1280
 */
export const getCandidateUsers = function (
  {
    taskId,
  }: {
    taskId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<Itask可分配用户信息>>> {
  return http.get(`/v1/credit-review-backlogs/${taskId}/candidate-users`, {
    ...config,
  });
};

/**
 * 审批订单列表Issue History: RC-516
 * Issue History: RC-516
 */
export const getCreditReviewOrders = function (
  params?: {
    /** 审批订单ID */
    creditReviewOrderId?: number;
    /** 借款人姓名 */
    customerName?: string;
    /** 担保人姓名/核心企业 */
    guarantorName?: string;
    /** 借款编号 */
    applicationId?: string;
    /** 租户 */
    tenant?: 'hubenlv';
    /** 审批订单类型 */
    type?: 'CREDIT' | 'LOAN';
    /** 审批状态 */
    status?:
    | 'NEW'
    | 'WAITING_RULE_REVIEW'
    | 'RULE_REVIEWING'
    | 'RULE_APPROVED'
    | 'RULE_REJECTED'
    | 'WAITING_MANUAL_REVIEW'
    | 'MANUAL_REVIEWING'
    | 'MANUAL_APPROVED'
    | 'MANUAL_REJECTED'
    | 'APPROVED'
    | 'REJECTED'
    | 'CANCELED'
    | 'SUPPLYING';
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
    /** 产品代码 */
    productCode?: string;
    /** 借款人身份证号 */
    ssn?: string;
    /** 关联借款编号 */
    relatedApplicationId?: string;
    /** 借款人ID */
    applicantId?: string;
    /** 借款人姓名，与customerName重复 */
    applicantName?: string;
    /** 常住地址 */
    residenceAddress?: string;
    /** 户籍所在地 */
    permanentAddress?: string;
    /** 手机号 */
    mobilePhone?: string;
    /** 工作单位 */
    companyName?: string;
    /** 页面编码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批订单列表>>> {
  return http.get(`/v1/credit-review-orders`, {
    params,
    ...config,
  });
};

/**
 * 审批订单状态集
 */
export const listCreditReviewStatus = function (config?: { [key: string]: any }): Promise<Response<Array<I枚举>>> {
  return http.get(`/v1/credit-review-orders/status`, {
    ...config,
  });
};

/**
 * 审批订单类型
 */
export const listCreditReviewType = function (config?: { [key: string]: any }): Promise<Response<Array<I枚举>>> {
  return http.get(`/v1/credit-review-orders/type`, {
    ...config,
  });
};

/**
 * @deprecated
 * 审批订单详情Issue History: RC-517
 * Issue History: RC-517
 */
export const getCreditReviewOrderDetail = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I审批订单列表>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}`, {
    ...config,
  });
};

/**
 * 查询审批订单借款主体的已放款信息
 */
export const getIssueApps = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ILoanAppIssueInfoVo>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/IssueApps`, {
    ...config,
  });
};

/**
 * 当前订单流程人审节点执行情况
 */
export const getActivityAllNodeInfoByOrderId = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I工作流节点信息>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/activity-all-node-info`, {
    ...config,
  });
};

/**
 * 查询可回退目标结点(未完成)
 */
export const getBackTaskTargets = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    taskId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I回退任务结点>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/back-task-targets`, {
    params,
    ...config,
  });
};

/**
 * 订单资料变更-补件条件
 */
export const getConditionPatches = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I订单资料参数值>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/condition-patch-options`, {
    ...config,
  });
};

/**
 * 获取该order对应的需要展示的三方列表
 */
export const getConfiguredCreditReports = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    nodeId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<string>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/configured-credit-reprots`, {
    params,
    ...config,
  });
};

/**
 * 查询审批订单关联的核心企业额度
 */
export const getCoreEnterpriseQuota = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I额度信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/core-enterprise-quota`, {
    ...config,
  });
};

/**
 * 查询审批历史记录
 */
export const getCreditReviewRecords = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批数据变更结果>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/credit-review-records`, {
    ...config,
  });
};

/**
 * 收入负债比计算
 */
export const getDebtRatio = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I收入负债指标所有字段>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/debt-ratio`, {
    ...config,
  });
};

/**
 * 收入负债比计算
 */
export const computeDebtRatio = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    creditReviewRecordId?: number;
    taskId?: string;
  },
  data: I收入负债比计算请求体,
  config?: { [key: string]: any }
): Promise<Response<I收入负债比计算响应体>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/debt-ratio`, {
    params,
    data,
    ...config,
  });
};

/**
 * 获取授信担保人信息Issue History: RC-1188
 * Issue History: RC-1188
 */
export const getCreditGuarantorPersonal = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I担保人信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/guarantors`, {
    params,
    ...config,
  });
};

/**
 * 获取收入负债指标
 */
export const getIncomeDebtIndicators = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I收入负债指标>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/income-debt-index`, {
    ...config,
  });
};

/**
 * 收入负债指标计算
 */
export const incomeDebtIndicators = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    creditReviewRecordId?: number;
    taskId?: string;
  },
  data: I收入负债指标计算请求体,
  config?: { [key: string]: any }
): Promise<Response<I收入负债指标计算响应体>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/income-debt-index`, {
    params,
    data,
    ...config,
  });
};

/**
 * 获取抵押信息
 */
export const getMortgageInfo = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I抵押信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/mortgage`, {
    ...config,
  });
};

/**
 * 获取orderId在某个审批节点的审核配置项及其配置
 */
export const getNodeReviewModuleConfigs = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId?: number;
  },
  params?: {
    /** 人审节点nodeid, 默认查询不需要传该参数 */
    nodeId?: string;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审核结点上审核模块开关属性配置>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/node-review-modules-config`, {
    params,
    ...config,
  });
};

/**
 * 查询审批订单借款主体的授信额度
 */
export const getQuota = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I额度信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/quota`, {
    ...config,
  });
};

/**
 * @deprecated
 * 保存审批订单借款主体的授信额度, 请使用保存定价信息接口/pricing
 */
export const saveQuota = function (
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
  /** 额度参数 */
  data: IQuotaRequest,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/quota`, {
    params,
    data,
    ...config,
  });
};

/**
 * 根据批复金额计算得手金额
 */
export const getRealityAmount = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  params: {
    approveAmount: string;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/realityAmount`, {
    params,
    ...config,
  });
};

/**
 * 系统评估参考Issue History: RC-1354
 * Issue History: RC-1354
 */
export const refreshAssess = function (
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
): Promise<Response<IRuleBo>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/refresh-assess`, {
    params,
    ...config,
  });
};

/**
 * 获取上标前提前结清列表
 */
export const getLoanInfo = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I上标前提前结清>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/related-unsettled-loans`, {
    ...config,
  });
};

/**
 * 获取批复信息
 */
export const getReply = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I批复信息>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/reply`, {
    params,
    ...config,
  });
};

/**
 * 刷新批复信息
 */
export const refreshReply = function (
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
): Promise<Response<I批复信息>> {
  return http.post(`/v1/credit-review-orders/${creditReviewOrderId}/reply`, {
    params,
    ...config,
  });
};

/**
 * 查询预占用日志
 */
export const getReservations = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<IPageRespVoReservationLogRespVo>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/reservations`, {
    ...config,
  });
};

/**
 * 获取指定order的审核模块（编辑项）配置
 */
export const getConfiguredReviewModuleConfig = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params: {
    /** 审核模块名 */
    module?:
    | 'DATA_EXAMINE'
    | 'TELEPHONE_REVIEW'
    | 'NOT_EDIT_TELEPHONE_REVIEW'
    | 'FILE_REVIEW'
    | 'PERSONAL_GUARANTEE'
    | 'PRICING'
    | 'APPROVAL_INFORMATION'
    | 'APPROVAL_INFORMATION_NOT_EDIT'
    | 'PRE_SETTLEMENT'
    | 'DEDUCTION_ACCOUNT'
    | 'SIGN_CONDITION'
    | 'PERSONAL_LOAN_MATCH'
    | 'BUSINESS_LOAN_MATCH'
    | 'REVIEW_COMMENT'
    | 'JOB_COMMENT'
    | 'ORDER_OPERATION_LOG'
    | 'BORROWER_ORDER_INFO'
    | 'FILE_UPLOAD';
    nodeId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批模块编辑配置项>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/review-modules-config`, {
    params,
    ...config,
  });
};

/**
 * 获取指定order在指定流程结点上依表单组织的允许退回修改(补件)的字段列表
 */
export const getPatchableFields = function (
  {
    creditReviewOrderId,
    nodeId,
  }: {
    creditReviewOrderId: number;
    nodeId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I字段基本描述信息>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/review/${nodeId}/patchable-fields`, {
    ...config,
  });
};

/**
 * 提交审批意见
 */
export const saveDecision = function (
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
  /** 审批备注 */
  data: I审批意见信息,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/credit-review-orders/${creditReviewOrderId}/risk-decision`, {
    params,
    data,
    ...config,
  });
};

/**
 * 模板完成状态
 */
export const saveRiskModuleStatusBoList = function (
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
    /** 审批任务节点ID */
    nodeId: string;
  },
  /** 模块审核完成状态列表 */
  data: Array<I审核模块完成状态>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/credit-review-orders/${creditReviewOrderId}/risk-module-status`, {
    params,
    data,
    ...config,
  });
};

/**
 * 查询股东列表
 */
export const listShareholder = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I股东信息>>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/shareholders`, {
    ...config,
  });
};

/**
 * 获取某人审岗的审批按钮
 */
export const getSupportedReviewOperation = function (
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
): Promise<Response<I支持的审批操作>> {
  return http.get(`/v1/credit-review-orders/${creditReviewOrderId}/supported-review-buttons`, {
    params,
    ...config,
  });
};

/**
 * 通过loanId查询未结清借款
 */
export const getLoanInfoByLoanId = function (
  {
    loanId,
  }: {
    loanId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I未结清贷款返回>> {
  return http.get(`/v1/credit-review-orders/${loanId}/loanid-unsettled-loans`, {
    ...config,
  });
};

/**
 * 根据orderId查询审批流程图
 */
export const getGraphics = function (
  {
    orderId,
  }: {
    orderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.get(`/v1/credit-review-orders/${orderId}/flow-chart`, {
    ...config,
  });
};

/**
 * 查询审批意见
 */
export const getDecision = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I审批意见信息>> {
  return http.get(`/v1/creditReviewOrders/${creditReviewOrderId}/risk-decision`, {
    params,
    ...config,
  });
};

/**
 * 模板完成状态
 */
export const getRiskModuleStatusBoList = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    /** 流程节点流ID */
    nodeId?: string;
    startTime?: number;
    endTime?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IReviewModuleCompleteStatusBo>>> {
  return http.get(`/v1/creditReviewOrders/${creditReviewOrderId}/risk-module-status`, {
    params,
    ...config,
  });
};

/**
 * 获取产品中心配置的申请期限列表
 */
export const getProductMaturities = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/product-codes/${creditReviewOrderId}/maturity`, {
    ...config,
  });
};

/**
 * 获取借款类型枚举列表
 */
export const getLoanTypeEnumList = function (
  {
    enumName,
  }: {
    enumName: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<ILoanTypeData>>> {
  return http.get(`/v2/credit-review-orders/loan-type/${enumName}`, {
    ...config,
  });
};

/**
 * 审批订单详情V2Issue History: RC-888
 * Issue History: RC-888
 */
export const getCreditReviewOrderDetailV2 = function (
  {
    creditReviewOrderId,
  }: {
    /** 审批订单编号 */
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I审批订单列表>> {
  return http.get(`/v2/credit-review-orders/${creditReviewOrderId}`, {
    ...config,
  });
};

/**
 * 获取该order对应的需要展示的三方列表
 */
export const getConfiguredCreditReportsV2 = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IProcConfCreditReportData>>> {
  return http.get(`/v2/credit-review-orders/${creditReviewOrderId}/configured-credit-reprots`, {
    params,
    ...config,
  });
};

/**
 * @deprecated
 * 一次性提交贷款审批结果
 */
export const saveCreditResultLog = function (
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
  /** 审批结果 */
  data: I审批数据变更结果,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v2/credit-review-orders/${creditReviewOrderId}/credit-result-logs`, {
    params,
    data,
    ...config,
  });
};

/**
 * 获取核实信息
 */
export const getVerifyInfo = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<ICreditVerifyInfoData>> {
  return http.get(`/v2/credit-review-orders/${creditReviewOrderId}/verify-info`, {
    ...config,
  });
};

/**
 * 刷新核实信息
 */
export const refreshVerifyInfo = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  data: ICreditVerifyInfoBo,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v2/credit-review-orders/${creditReviewOrderId}/verify-info`, {
    data,
    ...config,
  });
};

/**
 * 获取工作流配置信息
 */
export const getOrderWorkFlowInfo = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<IOrderWorkFlowInfo>> {
  return http.get(`/v2/credit-review-orders/${creditReviewOrderId}/workflow-info`, {
    ...config,
  });
};

/**
 * 审批订单详情V3Issue History: RC-1268
 * Issue History: RC-1268
 */
export const getCreditReviewOrderDetailV3 = function (
  {
    creditReviewOrderId,
  }: {
    creditReviewOrderId: number;
  },
  params?: {
    taskId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I审批订单详情V3>> {
  return http.get(`/v3/credit-review-orders/${creditReviewOrderId}`, {
    params,
    ...config,
  });
};

/**
 * 一次性提交贷款审批结果
 */
export const saveCreditResultLogV3 = function (
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
    /** 审批结果 */
    result: 'TEMPORARY' | 'PASS' | 'REJECT' | 'CANCEL' | 'SUPPLY' | 'BACK' | 'FRAUD_INVESTIGATION';
  },
  /** 审批数据 */
  data: I审批数据变更结果,
  config?: { [key: string]: any }
): Promise<Response<boolean>> {
  return http.post(`/v3/credit-review-orders/${creditReviewOrderId}/credit-result-logs`, {
    params,
    data,
    ...config,
  });
};
