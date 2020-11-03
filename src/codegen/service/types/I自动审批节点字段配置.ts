import { I传输报告配置 } from './I传输报告配置';

export interface I自动审批节点字段配置 {
  /** 字段集合, 值为fieldCode数组 */
  fieldCodes?: Array<string>;
  /** 节点字典存储编号, 64个字节长度 */
  nodeFilterCode?: string;
  /** 节点定义标识,对应流程节点Id */
  nodeId?: string;
  /** policy name */
  policyName?: string;
  /** 传输报告 */
  reports?: Array<I传输报告配置>;
  /** 进件渠道调用policy的username */
  riskAuthName?: string;
  /** 进件渠道调用policy的password */
  riskAuthPwd?: string;
}
