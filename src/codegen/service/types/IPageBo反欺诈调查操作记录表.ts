import { I反欺诈调查操作记录表 } from './I反欺诈调查操作记录表';

export interface IPageBo反欺诈调查操作记录表 {
  /** 总页数 */
  pages?: number;
  /** 分页数据 */
  records?: Array<I反欺诈调查操作记录表>;
  /** 每页数量 */
  size?: number;
  /** 总数量 */
  total?: number;
}
