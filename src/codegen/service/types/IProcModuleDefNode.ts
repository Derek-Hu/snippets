import { I可选操作项 } from './I可选操作项';
import { I审核模块模块配置表单Schema } from './I审核模块模块配置表单Schema';

export interface IProcModuleDefNode {
  /** 模块code, 模块的唯一标识 */
  code?: string;
  /** 模块描述 */
  description?: string;
  /** 模块名称 */
  name?: string;
  /** 每个审核节点的初审/终审配置项, 如果没有配置某个nodeid对应的审核配置，可能不存在该nodeid对应的配置 */
  nodeConfigs?: Array<I可选操作项>;
  /** 模板块 */
  reviewModuleConfigSchema?: I审核模块模块配置表单Schema;
  /** 选择中的模板块 */
  selectSchema?: string;
  /** 已选择 */
  selected?: boolean;
}
