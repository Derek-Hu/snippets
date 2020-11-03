export interface I车辆信息 {
  /** 车辆颜色 */
  carColor?: string;
  /** 车商名称 */
  carDealerName?: string;
  /** 车辆类型 */
  carType?: string;
  /** 车辆型号 */
  certificateModel?: string;
  /** 车公里数 */
  distance?: string;
  /** 车评估价值(渠道) */
  estimateAmount?: string;
  /** 车辆评估价值(点融) */
  estimateAmountDr?: string;
  /** 车出厂时间 */
  factoryDate?: number;
  /** 车架号 */
  frameNum?: string;
  /** 车辆状况 */
  info?: string;
  /** 车上牌时间 */
  licensingDate?: number;
  /** 车上牌区域 */
  licensingRegion?: string;
  /** 车型 */
  model?: string;
  /** 车所有权人 */
  ownership?: string;
  /** 车牌号 */
  plateNumber?: string;
  /** 第三方查询结果 */
  queryResults?: string;
  /** 车所在地区 */
  region?: string;
  /** 车系 */
  series?: string;
  /** 车使用性质 */
  useProperty?: string;
}
