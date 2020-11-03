export interface I审核模块完成状态 {
  /** 模块编码 */
  moduleCode?: string;
  /** 模板名称 */
  moduleName?: string;
  /** 是否审核完成 0-未完成；1-已完成 */
  reviewComplete: number;
}
