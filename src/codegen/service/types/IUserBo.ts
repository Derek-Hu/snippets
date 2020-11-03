import { IPermission } from './IPermission';

export interface IUserBo {
  /** UA账号 */
  account?: string;
  /** 邮箱 */
  email?: string;
  /** 用户ID */
  id?: number;
  /** 姓名 */
  name?: string;
  /** 权限列表 */
  permissionList?: Array<IPermission>;
  /** 员工号 */
  staffNo?: string;

  tenant?: string;
}
