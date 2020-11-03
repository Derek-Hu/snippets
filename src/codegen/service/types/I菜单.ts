export type STATUS = 'ENABLED' | 'DISABLED';

export interface I菜单 {
  /** 编码，权限code */
  code: string;
  /** 启用菜单使用，true除了会启用本身与上级外还有会启用下级 */
  enabledAll?: boolean;
  /** 菜单id */
  id?: number;
  /** 名称 */
  name: string;
  /** 菜单顺序 */
  order: number;
  /** 上級菜单id，不填值会赋默认值(-1)为一级菜单 */
  parentId?: number;
  /** 菜单状态:ENABLED(启用)/DISABLED(禁用) */
  status?: STATUS;
  /** 子菜单列表 */
  subMenuList?: Array<I菜单>;
}
