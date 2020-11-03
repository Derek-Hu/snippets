export interface IAuthorization {
  aid?: number;

  attribute?: Object;
  /** 授权时间 */
  authTime?: number;
  /** 授权类型 */
  authType?: string;

  channel?: string;

  source?: string;

  ssn?: string;

  status?: string;
  /** 三方key */
  thirdPartyKey?: string;

  thirdPartyParameters?: Object;
}
