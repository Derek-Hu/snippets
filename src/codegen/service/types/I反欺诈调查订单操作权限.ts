export interface I反欺诈调查订单操作权限 {
  /** 分配 */
  canAssign?: boolean;
  /** 认领 */
  canAssignMe?: boolean;
  /** 审核 */
  canReView?: boolean;
  /** 转出 */
  canUnAssign?: boolean;
  /** 查看 */
  canView?: boolean;
}
