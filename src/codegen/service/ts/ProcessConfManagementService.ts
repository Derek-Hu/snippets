import { Response } from '../commonType';
import { I文件核查项 } from '../types/I文件核查项';
import { IActGroupVo } from '../types/IActGroupVo';
import { I工作流模板配置 } from '../types/I工作流模板配置';
import { I三方数据 } from '../types/I三方数据';
import { I设置三方模块 } from '../types/I设置三方模块';
import { IProcConfCreditReportSource } from '../types/IProcConfCreditReportSource';
import { I默认查询字段配置 } from '../types/I默认查询字段配置';
import { I人审差异化字段配置 } from '../types/I人审差异化字段配置';
import { I文件核查配置 } from '../types/I文件核查配置';
import { I审批流程节点定义含属性等信息 } from '../types/I审批流程节点定义含属性等信息';
import { I审核结点上审核模块开关属性配置 } from '../types/I审核结点上审核模块开关属性配置';
import { I审批模块编辑配置项 } from '../types/I审批模块编辑配置项';
import { I单个审核模块配置更新请求 } from '../types/I单个审核模块配置更新请求';
import { I审核模块模块配置表单Schema } from '../types/I审核模块模块配置表单Schema';
import { I审批模块 } from '../types/I审批模块';
import { I新增修改审批模块 } from '../types/I新增修改审批模块';
import { I自动审批节点字段配置 } from '../types/I自动审批节点字段配置';
import { I同一化人审字段配置 } from '../types/I同一化人审字段配置';
import { I工作流和对应的选中的工作流信息 } from '../types/I工作流和对应的选中的工作流信息';
import { I工作流对应的节点信息和工作流的缩略图url } from '../types/I工作流对应的节点信息和工作流的缩略图url';
import { I审批项目信息 } from '../types/I审批项目信息';
import { I加审批项目信息 } from '../types/I加审批项目信息';
import { ILongBo } from '../types/ILongBo';
import { I修改审批项目信息 } from '../types/I修改审批项目信息';
import { I审批项目版本 } from '../types/I审批项目版本';
import { I新增审批项目版本 } from '../types/I新增审批项目版本';
import { IWorkflowDefinitionRequest } from '../types/IWorkflowDefinitionRequest';
import { ISaveWorkflowResult } from '../types/ISaveWorkflowResult';

import http from '../httpClient';

/**
 * 查询所有文件核查项定义Issue History: RC-1835
 * Issue History: RC-1835
 */
export const getFileReviewDefinitions = function(config?: {
  [key: string]: any;
}): Promise<Response<Array<I文件核查项>>> {
  return http.get(`/v1/file-review-definitions`, {
    ...config,
  });
};

/**
 * 删除工作流模板配置
 */
export const deleteWorkflowModule = function(
  params: {
    moduleId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/proc-conf-versions/deleteWorkflowModule`, {
    params,
    ...config,
  });
};

/**
 * 获取所有审批权限组信息
 */
export const getAllGroupInfo = function(config?: { [key: string]: any }): Promise<Response<Array<IActGroupVo>>> {
  return http.get(`/v1/proc-conf-versions/getAllGroupInfo`, {
    ...config,
  });
};

/**
 * 查询所有工作流模板配置
 */
export const getWorkflowModules = function(config?: { [key: string]: any }): Promise<Response<Array<I工作流模板配置>>> {
  return http.get(`/v1/proc-conf-versions/getWorkflowModules`, {
    ...config,
  });
};

/**
 * 保存workflow新流程图进配置
 */
export const saveWorkflowConfig = function(
  params: {
    workflowName: string;
  },
  config?: { [key: string]: any }
): Promise<Response<string>> {
  return http.post(`/v1/proc-conf-versions/saveWorkflowConfig`, {
    params,
    ...config,
  });
};

/**
 * 项目管理复制功能
 */
export const copyProcConfig = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/copyProcConfig`, {
    ...config,
  });
};

/**
 * 查询可用三方展示（模块）列表
 */
export const getCreditReportConfigs = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  params?: {
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I三方数据>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/credit-report-configs`, {
    params,
    ...config,
  });
};

/**
 * 保存项目三方展示（模块）配置
 */
export const saveCreditReportConfigs = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  /** 需要授权的三方名称, 值为可用三方列表里返回的type */
  data?: Array<I设置三方模块>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/credit-report-configs`, {
    data,
    ...config,
  });
};

/**
 * 获取支持的三方报告源类型(传输报告设置)
 */
export const getCreditReportSources = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<IProcConfCreditReportSource>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/credit-report-sources`, {
    ...config,
  });
};

/**
 * 查询已配置的默认查询字段[Done]Issue History: RC-2055
 * Issue History: RC-2055
 */
export const getDefaultQueryFields = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I默认查询字段配置>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/default-query-dicts`, {
    ...config,
  });
};

/**
 * 保存默认查询配置, 含新增和修改. [Done]Issue History: RC-2055
 * Issue History: RC-2055
 */
export const saveDefaultQueryFields = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  data: I默认查询字段配置,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/default-query-dicts`, {
    data,
    ...config,
  });
};

/**
 * 查询已配置的差异化人审岗字段[Done]Issue History: RC-1396
 * Issue History: RC-1396
 */
export const getManualReviewNodeFields = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  params?: {
    /** node标识 */
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I人审差异化字段配置>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/diff-manual-review-dicts`, {
    params,
    ...config,
  });
};

/**
 * 保存差异化人审岗字段配置, 含新增和修改. 一次配置多个节点则列表中含多个node[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const saveDiffManualReviewNodeFields = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  data: Array<I人审差异化字段配置>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/diff-manual-review-dicts`, {
    data,
    ...config,
  });
};

/**
 * 查询已经配置的文件核查项[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const getFileReviewCodes = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  params?: {
    /** node标识 */
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I文件核查配置>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/file-reviews`, {
    params,
    ...config,
  });
};

/**
 * 保存文件核查项, 含新增和修改Issue History: RC-1835
 * Issue History: RC-1835
 */
export const saveFileReviews = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  params?: {
    /** node标识 */
    nodeId?: string;
  },
  /** 文件核查项code */
  data?: Array<string>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/file-reviews`, {
    params,
    data,
    ...config,
  });
};

/**
 * 查询当前versionId的模板配置
 */
export const getWorkflowModule = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I工作流模板配置>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/getWorkflowModule`, {
    ...config,
  });
};

/**
 * 查询指定的项目版本所有的人审岗[Done]Issue History: RC-1396
 * Issue History: RC-1396
 */
export const getManualReviewNodes = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批流程节点定义含属性等信息>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/manual-review-nodes`, {
    ...config,
  });
};

/**
 * 获取procConfVerdion在某个审批节点的审核配置项及其配置
 */
export const getNodeReviewModuleConfigs = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  params?: {
    /** 人审节点nodeid, 默认查询不需要传该参数 */
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审核结点上审核模块开关属性配置>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/node-review-modules-config`, {
    params,
    ...config,
  });
};

/**
 * 获取指定项目配置版本下指定审核模块的配置数据
 */
export const getReviewModuleConfig = function(
  {
    procConfVersionId,
    reviewModuleCode,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
    /** 模块code */
    reviewModuleCode?: string;
  },
  params: {
    nodeId: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I审批模块编辑配置项>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/node-review-modules/${reviewModuleCode}/config`, {
    params,
    ...config,
  });
};

/**
 * 保存指定项目配置版本下指定审核模块的配置数据
 */
export const saveReviewModuleConfig = function(
  {
    procConfVersionId,
    reviewModuleCode,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
    /** 模块code */
    reviewModuleCode?: string;
  },
  /** 模块配置参数 */
  data?: I单个审核模块配置更新请求,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/node-review-modules/${reviewModuleCode}/config`, {
    data,
    ...config,
  });
};

/**
 * 获取指定项目配置版本下指定审核模块的配置数据的schema
 */
export const getReviewModuleConfigSchema = function(
  {
    procConfVersionId,
    reviewModuleCode,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
    /** 模块code */
    reviewModuleCode?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I审核模块模块配置表单Schema>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/node-review-modules/${reviewModuleCode}/config-schema`, {
    ...config,
  });
};

/**
 * 查询指定产品的进件字段列表(根据项目是授信还是支用返回不同的字段)[Done]Issue History: RC-1396
 * Issue History: RC-1396
 */
export const getProductFields = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Object>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/product-fields`, {
    ...config,
  });
};

/**
 * 查询所有审核模块定义Issue History: RC-1835
 * Issue History: RC-1835
 */
export const getReviewModuleDefinitions = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  params?: {
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<I审批模块>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/review-module-definitions`, {
    params,
    ...config,
  });
};

/**
 * 查询审批节点已经配置的审核模块[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const getReviewModuleCodes = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  params?: {
    /** node标识 */
    nodeId?: string;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批模块>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/review-node-modules`, {
    params,
    ...config,
  });
};

/**
 * 新增/修改审批模块Issue History: RC-1835
 * Issue History: RC-1835
 */
export const addReviewModules = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  /** 审批模块配置项 */
  data?: I新增修改审批模块,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/review-node-modules`, {
    data,
    ...config,
  });
};

/**
 * 查询已配置的自动审批节点的字段[Done]Issue History: RC-2031
 * Issue History: RC-2031
 */
export const getRiskPolicyNodes = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I自动审批节点字段配置>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/risk-policy-dicts`, {
    ...config,
  });
};

/**
 * 保存自动审批节点的字段配置, 含新增和修改. 可一次配置一个节点或多个节点 [Done]Issue History: RC-2012
 * Issue History: RC-2012
 */
export const saveRiskPolicyNodes = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  data: Array<I自动审批节点字段配置>,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/risk-policy-dicts`, {
    data,
    ...config,
  });
};

/**
 * 查询指定的项目版本所有自动审批节点[Done]Issue History: RC-2009
 * Issue History: RC-2009
 */
export const getRiskPolicyReviewNodes = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批流程节点定义含属性等信息>>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/risk-policy-nodes`, {
    ...config,
  });
};

/**
 * 查询已配置的同一化人审岗字段[Done]Issue History: RC-1396
 * Issue History: RC-1396
 */
export const getSameManualReviewNodeFields = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I同一化人审字段配置>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/same-manual-review-dicts`, {
    ...config,
  });
};

/**
 * 保存同一化人审岗字段配置, 含新增和修改.[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const saveSameManualReviewNodeFields = function(
  {
    procConfVersionId,
  }: {
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  data: I同一化人审字段配置,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/same-manual-review-dicts`, {
    data,
    ...config,
  });
};

/**
 * 保存工作流模板配置
 */
export const saveWorkflowModule = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  data: I工作流模板配置,
  config?: { [key: string]: any }
): Promise<Response<I工作流模板配置>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/saveWorkflowModule`, {
    data,
    ...config,
  });
};

/**
 * 查询所有流程和已选择流程相关信息Issue History: RC-1390
 * Issue History: RC-1390
 */
export const getWorkflow = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I工作流和对应的选中的工作流信息>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/workflow`, {
    ...config,
  });
};

/**
 * 设置工作流
 */
export const workflow = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  params?: {
    workflowId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/proc-conf-versions/${procConfVersionId}/workflow`, {
    params,
    ...config,
  });
};

/**
 * 获取某个流程的所有节点和流程信息
 */
export const getWorkflowNodesDefine = function(
  {
    procConfVersionId,
  }: {
    procConfVersionId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I工作流对应的节点信息和工作流的缩略图url>> {
  return http.get(`/v1/proc-conf-versions/${procConfVersionId}/workflow-nodes`, {
    ...config,
  });
};

/**
 * 查询项目配置列表[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const getProcConfs = function(
  params?: {
    /** 进件类型 */
    bizType?: 'BUSINESS_LOAN' | 'PERSONAL_LOAN' | 'SUPPLY_CHAIN' | 'ONLINE';
    /** 业务类型 */
    creditReviewType?: 'CREDIT' | 'LOAN';
    /** 查看页码,默认1，（0，负数不可传） */
    page?: number;
    /** 每页记录数，默认50 */
    pagesize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批项目信息>>> {
  return http.get(`/v1/proc-confs`, {
    params,
    ...config,
  });
};

/**
 * 新增项目配置[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const addProcConf = function(
  data: I加审批项目信息,
  config?: { [key: string]: any }
): Promise<Response<ILongBo>> {
  return http.post(`/v1/proc-confs`, {
    data,
    ...config,
  });
};

/**
 * 修改项目配置[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const updateProcConf = function(
  {
    procConfId,
  }: {
    /** 项目配置Id */
    procConfId?: number;
  },
  data: I修改审批项目信息,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/proc-confs/${procConfId}`, {
    data,
    ...config,
  });
};

/**
 * 获取项目最新版本id
 */
export const getProcConfVersionId = function(
  {
    procConfId,
  }: {
    procConfId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<number>> {
  return http.get(`/v1/proc-confs/${procConfId}/getProcConfVersionId`, {
    ...config,
  });
};

/**
 * 查询项目版本列表[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const getProcConfVersions = function(
  {
    procConfId,
  }: {
    /** 项目配置Id */
    procConfId?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I审批项目版本>>> {
  return http.get(`/v1/proc-confs/${procConfId}/proc-conf-versions`, {
    ...config,
  });
};

/**
 * 新增项目版本[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const addProcConfVersion = function(
  {
    procConfId,
  }: {
    /** 项目配置Id */
    procConfId?: number;
  },
  data: I新增审批项目版本,
  config?: { [key: string]: any }
): Promise<Response<ILongBo>> {
  return http.post(`/v1/proc-confs/${procConfId}/proc-conf-versions`, {
    data,
    ...config,
  });
};

/**
 * 修改项目版本[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const updateProcConfVersion = function(
  {
    procConfId,
    procConfVersionId,
  }: {
    /** 项目配置Id */
    procConfId?: number;
    /** 项目版本Id */
    procConfVersionId?: number;
  },
  data: I审批项目版本,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/proc-confs/${procConfId}/proc-conf-versions/${procConfVersionId}`, {
    data,
    ...config,
  });
};

/**
 * 全配置化自动生成工作流
 */
export const addWorkflow = function(
  data: IWorkflowDefinitionRequest,
  config?: { [key: string]: any }
): Promise<Response<ISaveWorkflowResult>> {
  return http.post(`/v1/workflow-config/addWorkflow`, {
    data,
    ...config,
  });
};

/**
 * 删除工作流模板
 */
export const deleteWorkflow = function(
  {
    procConfWorkflowId,
  }: {
    procConfWorkflowId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/workflow/${procConfWorkflowId}/workflow`, {
    ...config,
  });
};

/**
 * 获取工作流大图
 */
export const getWorkflowGraph = function(
  {
    workflowId,
  }: {
    workflowId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.get(`/v1/workflow/${workflowId}/graph`, {
    ...config,
  });
};

/**
 * 查询项目版本列表[Done]Issue History: RC-1835
 * Issue History: RC-1835
 */
export const getProcConfVersion = function(
  {
    procConfId,
  }: {
    /** 项目配置Id */
    procConfId?: number;
  },
  params: {
    version: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I审批项目版本>> {
  return http.get(`/v2/proc-confs/${procConfId}/proc-conf-versions`, {
    params,
    ...config,
  });
};
