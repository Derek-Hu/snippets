import { IGraphRelationVo } from './IGraphRelationVo';

export interface IGraphVo {
  id?: string;

  label?: string;

  props?: Object;

  relations?: Array<IGraphRelationVo>;

  title?: string;
}
