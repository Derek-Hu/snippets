export interface I租赁信息 {
  /** 客户号 */
  custNumber?: string;
  /** 每月应还租金金额 */
  monthPayAmount?: number;
  /** 合同到期日 */
  rentContractEndDate?: string;
  /** 合同起租日 */
  rentContractStartDate?: string;
  /** 合同期限 */
  rentContractTerm?: number;
  /** 合同期限单位 DAY(1, 天),WEEK(2, 周),MONTH(3, 月),BIWEEK(4, 双周),QUARTER(5, 季),YEAR(6, 年) */
  rentContractTermUnit?: string;
}
