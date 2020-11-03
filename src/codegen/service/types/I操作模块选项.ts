export type BUSINESSTYPE = 'BUSINESS_LOAN' | 'PERSONAL_LOAN' | 'SUPPLY_CHAIN' | 'ONLINE';

export interface I操作模块选项 {
  /** 业务线类型 */
  businessType?: BUSINESSTYPE;
  /** 子级选项，树化的时候才有 */
  children?: Array<I操作模块选项>;
  /** 选项编号:新增必填 */
  code?: string;
  /** 选项描述(一般少用，用name标识)，新增选填，不填则同名称 */
  description?: string;
  /** 选项是否可用 */
  enable?: boolean;
  /** 模块选项id */
  id?: number;
  /** 选项模块编码：新增必填（module code,id二选一） */
  moduleCode?: string;
  /** 选项模块id：新增必填（module code,id二选一） */
  moduleId?: number;
  /** 选项名称:新增必填 */
  name?: string;
  /** 默认排序为0 */
  order?: number;
  /** 选项父级id,选填，不填则为根分类 */
  pid?: number;
}
