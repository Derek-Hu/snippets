export interface Iossweb上传链接 {
  /** 本次上传动作过期时间，一旦超过参数将失效：毫秒 */
  expire?: number;
  /** 上传成功后提交后端的fileKey参数 */
  fileKey?: string;
  /** 上传表单参数key-value，另外页面的文件参数（参数名：file，自行添加）务必表单最后 */
  params?: { [key: string]: string };
  /** 上传提交地址 */
  url?: string;
}
