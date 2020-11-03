import { IFileCreditRequest } from './IFileCreditRequest';

export interface IFileCreditResultLogV2 {
  /** 审批结果数据 */
  content?: string;

  creditReviewRecordId?: number;
  /** 文件文本列表 */
  fileTextList?: Array<IFileCreditRequest>;
  /** 审批任务id */
  taskId?: string;
  /** 电核文件ID */
  telephoneReviewFileId?: number;
  /** 电核描述记录 */
  telephoneReviewRecordId?: number;

  userId?: number;

  userName?: string;
  /** json格式form表单 */
  value?: string;
}
