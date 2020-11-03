export interface ICreditOrderReviewFileBo {
  /** 上传时间 */
  createTime?: string;
  /** 审批订单id */
  creditReviewOrderId?: number;
  /** 审批记录id */
  creditReviewRecordId?: number;
  /** 是否有权限修改：针对前端处理 */
  editable?: boolean;
  /** 文件osskey：提交保存的时候需要传 */
  fileKey?: string;
  /** 文件名称 */
  fileName?: string;
  /** 文件类型：根据提供的选择，或者自己创建 */
  fileType?: string;
  /** 文件类型名称：上传不需要 */
  fileTypeName?: string;
  /** 文件下载url */
  fileUrl?: string;
  /** 文件id */
  id?: number;
  /** 上传岗位id */
  nodeId?: string;
  /** 上传岗位名称 */
  nodeName?: string;
  /** 上传人id */
  userId?: number;
  /** 上传人名称 */
  userName?: string;
}
