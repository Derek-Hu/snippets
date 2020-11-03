export interface IDeviceInfo {
  /** gps城市 */
  gpsCity?: string;
  /** GPS定位纬度 */
  gpslatitude?: number;
  /** GPS定位经度 */
  gpslongitude?: number;
  /** IOS设备IDFA */
  idfa?: string;
  /** IOS设备IDFV */
  idfv?: string;
  /** IMEI */
  imei?: string;
  /** 是否越狱 */
  isPrisonBreak?: boolean;
  /** 是否ROOT */
  isRoot?: boolean;
  /** MCA地址 */
  macAddress?: string;
  /** IOS设备UDID */
  openUDID?: string;
  /** 提交设备类型 */
  submittedDeviceModel?: string;
  /** 设备操作系统 */
  submittedDeviceOS?: string;
  /** 提交设备SN */
  submittedDeviceSN?: string;
  /** 提交设备ip */
  submittedIp?: string;
}
