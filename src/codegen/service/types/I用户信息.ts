import { I角色信息 } from './I角色信息';
import { I标签信息 } from './I标签信息';
import { IUserLastLoginInfoDto } from './IUserLastLoginInfoDto';

export interface I用户信息 {
  /** 用户对应的账号 */
  account?: string;
  /** 账号类型 */
  accountType?: string;
  /** 创建时间 */
  createDate?: string;

  displayName?: string;
  /** 邮箱 */
  email?: string;
  /** 连续登陆失败次数 */
  failCount?: string;
  /** 主键id */
  id?: number;

  ipaAccount?: string;
  /** 最近的一次登陆ip */
  lastLoginIp?: string;
  /** 最近的一次登陆时间 */
  lastLoginTime?: string;
  /** 最新更新时间 */
  lastUpdate?: string;

  ldapDn?: string;
  /** 姓名 */
  name?: string;
  /** 新员工号 */
  newStaffNo?: string;
  /** 辅助字段,原始密码 */
  originalPassword?: string;
  /** 密码 */
  password?: string;
  /** 密码盐 */
  passwordSalt?: string;
  /** 电话 */
  phone?: string;
  /** 辅助字段,判断是否与某个角色有关联关系 */
  roleChecked?: boolean;
  /** 用户对应的角色信息 */
  roles?: Array<I角色信息>;
  /** 员工号 */
  staffNo?: string;
  /** 状态(0:启用,1:禁用) */
  status?: string;
  /** 辅助字段,判断是否与某个标签有关联关系 */
  tagChecked?: boolean;
  /** 用户对应的标签 */
  tagDtos?: Array<I标签信息>;
  /** 租户code */
  tenancyCode?: string;
  /** 租户id */
  tenancyId?: number;
  /** 用户关联的三方账号信息 */
  thirdAccountInfo?: { [key: string]: string };
  /** 用户类型:0 普通用户,1 系统账号 */
  type?: string;
  /** 用户与组的关联关系(普通关联,OWNER关系) */
  userGroupType?: string;

  userGuid?: string;
  /** 用户经常登录的系统信息 */
  userLastLoginInfoDtoList?: Array<IUserLastLoginInfoDto>;
}
