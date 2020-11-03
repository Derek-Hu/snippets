export interface ICreditOrderFileReviewBo {
  /** 核查备注 */
  checkRemark?: string;
  /** 核查结果 */
  checkResult?: string;
  /** 审批订单id */
  creditReviewOrderId?: number;
  /** 审批记录id */
  creditReviewRecordId?: number;
  /** 文件类型 */
  fileType?: string;
  /** 文件类型名称 */
  fileTypeName?: string;
  /** 文件总数 */
  total?: number;
}
