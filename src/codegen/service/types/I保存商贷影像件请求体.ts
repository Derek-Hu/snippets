export interface I保存商贷影像件请求体 {
  /** 审批记录id */
  creditReviewRecordId?: number;

  fileKey?: string;
  /** 文件名 */
  fileName?: string;
  /** 上传岗位id */
  nodeId?: string;
  /** 拍摄地址 */
  photoAddress?: string;
  /** 拍摄设备 */
  photoEquipment?: string;
}
