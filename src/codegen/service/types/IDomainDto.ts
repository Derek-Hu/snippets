import { I租户信息 } from './I租户信息';
import { I角色信息 } from './I角色信息';

export interface IDomainDto {
  appId?: string;

  code?: string;

  createDate?: string;

  customLoginPage?: string;

  description?: string;

  displayName?: string;

  domainUrl?: string;

  id?: number;

  lastUpdate?: string;

  logoutAddress?: string;

  permissionDtoList?: Array<I租户信息>;

  roleList?: Array<I角色信息>;

  service?: string;

  status?: string;
}
