import { Response } from '../commonType';
import { I菜单 } from '../types/I菜单';
import { I权限信息 } from '../types/I权限信息';
import { I角色信息 } from '../types/I角色信息';
import { I用户信息 } from '../types/I用户信息';
import { IUserBo } from '../types/IUserBo';

import http from '../httpClient';

/**
 * 查询菜单信息(通过管理页面配置的)
 */
export const getAllMenus = function(
  params?: {
    /** 菜单状态 */
    status?: 'ENABLED' | 'DISABLED';
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I菜单>>> {
  return http.get(`/v1.1/menus`, {
    params,
    ...config,
  });
};

/**
 * 查询菜单信息
 */
export const getMenus = function(config?: { [key: string]: any }): Promise<Response<Array<I菜单>>> {
  return http.get(`/v1/menus`, {
    ...config,
  });
};

/**
 * 新建菜单
 */
export const addMenu = function(data: I菜单, config?: { [key: string]: any }): Promise<Response<I菜单>> {
  return http.post(`/v1/menus`, {
    data,
    ...config,
  });
};

/**
 * 导出菜单，csv文件，用于不同环境之间一次性同步配置
 */
export const downLoadMenu = function(config?: { [key: string]: any }): Promise<Response<undefined | null>> {
  return http.get(`/v1/menus/config`, {
    ...config,
  });
};

/**
 * 导入菜单，csv文件，用于不同环境之间一次性同步配置
 */
export const uploadMenu = function(data: File, config?: { [key: string]: any }): Promise<Response<undefined | null>> {
  return http.post(`/v1/menus/config`, {
    data,
    ...config,
  });
};

/**
 * 查询某个菜单属性
 */
export const getMenu = function(
  {
    menuId,
  }: {
    /** 菜单Id */
    menuId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<I菜单>> {
  return http.get(`/v1/menus/${menuId}`, {
    ...config,
  });
};

/**
 * 修改菜单属性，若更改了code或者name或者status需调用UA接口更新相应的菜单权限
 */
export const updateMenu = function(
  {
    menuId,
  }: {
    /** 菜单Id */
    menuId: number;
  },
  data: I菜单,
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.put(`/v1/menus/${menuId}`, {
    data,
    ...config,
  });
};

/**
 * 根据角色id获取权限信息列表
 */
export const getRoles = function(
  {
    roleId,
  }: {
    /** 角色id */
    roleId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I权限信息>>> {
  return http.get(`/v1/role/${roleId}/permissions`, {
    ...config,
  });
};

/**
 * 根据条件查询角色信息列表
 */
export const getRolesUsingGet = function(
  params?: {
    /** 角色类型Id */
    typeId?: number;
    /** 角色名称 */
    name?: string;
    /** 页码,默认1，（0，负数）不可传 */
    page?: number;
    /** 显示记录数，默认Integer.MAX_VALUE */
    pagesize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I角色信息>>> {
  return http.get(`/v1/roles`, {
    params,
    ...config,
  });
};

/**
 * 角色批量关联用户
 */
export const addUsersToRole = function(
  {
    roleId,
  }: {
    /** 角色Id */
    roleId: number;
  },
  params: {
    /** 用户Id */
    userIds: Array<number>;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.post(`/v1/roles/${roleId}/users`, {
    params,
    ...config,
  });
};

/**
 * 角色批量解除关联用户
 */
export const deleteUsersToRole = function(
  {
    roleId,
  }: {
    /** 角色Id */
    roleId: number;
  },
  params: {
    /** 用户Id */
    userIds: Array<number>;
  },
  config?: { [key: string]: any }
): Promise<Response<undefined | null>> {
  return http.delete(`/v1/roles/${roleId}/users`, {
    params,
    ...config,
  });
};

/**
 * 查询用户信息
 */
export const getUsers = function(
  params?: {
    /** 员工号 */
    staffNo?: string;
    /** 邮箱 */
    email?: string;
    /** 姓名 */
    name?: string;
    /** 角色Id */
    roleId?: number;
    /** 页码,默认1，（0，负数）不可传 */
    page?: number;
    /** 显示记录数，默认5000 */
    pagesize?: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I用户信息>>> {
  return http.get(`/v1/users`, {
    params,
    ...config,
  });
};

/**
 * 获取当前登录用户信息
 */
export const getCurrentUser = function(config?: { [key: string]: any }): Promise<Response<IUserBo>> {
  return http.get(`/v1/users/current`, {
    ...config,
  });
};

/**
 * 根据用户Id查询用户相关联的权限信息
 */
export const getPermissions = function(
  {
    userId,
  }: {
    /** 用户Id */
    userId: number;
  },
  config?: { [key: string]: any }
): Promise<Response<Array<I权限信息>>> {
  return http.get(`/v1/users/${userId}/permissions`, {
    ...config,
  });
};
