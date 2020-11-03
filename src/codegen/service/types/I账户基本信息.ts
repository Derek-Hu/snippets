export interface I账户基本信息 {
  /** 主库用户ID */
  actorId?: string;
  /** 借款人性质 */
  borrowerProperty?: string;
  /** 是否是企业 */
  business?: boolean;
  /** 证件有效期 */
  cardDeadline?: string;
  /** 证件号码 */
  cardNum?: string;
  /** 证件签发地址 */
  cardSignPlace?: string;
  /** 证件类型 */
  cardType?: string;
  /** 人脸得分 */
  faceRecognitionScore?: number;
  /** 性别 */
  gender?: string;
  /** 主键id */
  id?: number;
  /** 国籍 */
  nation?: string;
  /** 真实姓名 */
  realName?: string;
  /** 用户主体类型 */
  subjectType?: string;
}
