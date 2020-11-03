export interface IAntiFraudCaseStatisticsBo {
  /** 首逾数 */
  firstOverTimeNum?: string;
  /** 欺诈率 */
  fraudProbability?: string;
  /** 清白率 */
  innocenceProbability?: string;
  /** 岗位 */
  job?: string;
  /** 通过单数 */
  passOrderNum?: string;
  /** 通过率 */
  passProbability?: string;
  /** 拒绝单数 */
  rejectOrderNum?: string;
  /** 拒绝率 */
  rejectProbability?: string;
  /** 总逾期数 */
  sumOverTimeNum?: string;
  /** 总处理量 */
  sumSurveyNum?: string;
  /** 调查人 */
  surveyName?: string;
  /** 审核量 */
  surveyNum?: string;
  /** 疑似率 */
  suspectedProbability?: string;
  /** 新建团伙个数 */
  teamCreateNum?: string;
  /** 团伙总人数 */
  teamMembersNum?: string;
}
