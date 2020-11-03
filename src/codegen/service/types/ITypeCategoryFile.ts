export interface ITypeCategoryFile {
  /** 文件名 */
  fileName?: string;
  /** 文件访问地址 */
  fileUrl?: string;
  /** 文件id,下载用, 用户进件时没有该值 */
  id?: number;
  /** 拍摄地址 */
  photoAddress?: string;
  /** 拍摄设备 */
  photoEquipment?: string;

  time?: string;
}
