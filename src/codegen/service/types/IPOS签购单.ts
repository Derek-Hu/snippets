export interface IPOS签购单 {
  /** 交易金额（单位：元，精确到小数点后两位） */
  amount?: number;
  /** 银行卡前六位 */
  bankCardPrefix?: string;
  /** 银行卡后四位 */
  bankCardSuffix?: string;
  /** 交易时间（近一年） */
  dealTime?: string;
  /** 商户编号 */
  merchantNo?: string;
  /** 收款卡 */
  receiverBankCard?: string;
  /** 终端编号 */
  terminalId?: string;
}
