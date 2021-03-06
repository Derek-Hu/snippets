export type BANKACCOUNTTYPE = 'PRIVATE' | 'CORPORATE' | 'PLATFORM';

export type BANKACRONYM =
  | 'PBOC'
  | 'ABC'
  | 'BOC'
  | 'BOCOM'
  | 'CCB'
  | 'ICBC'
  | 'CEB'
  | 'CGB'
  | 'CMB'
  | 'CMBC'
  | 'CNCB'
  | 'HXB'
  | 'HFB'
  | 'HSB'
  | 'IB'
  | 'PAB'
  | 'PSBC'
  | 'SPDB'
  | 'WEBANK'
  | 'SHRB'
  | 'CBHB'
  | 'CZB'
  | 'SB'
  | 'JZCTB'
  | 'QLCB'
  | 'YIBCB'
  | 'PANJCB'
  | 'SHANGRCB'
  | 'GUIZCB'
  | 'LHCB'
  | 'TZCB'
  | 'NCCB'
  | 'XJKCCB'
  | 'QHCB'
  | 'GXBBWCB'
  | 'NBDHCB'
  | 'WLMQCB'
  | 'BOS'
  | 'GZNYCB'
  | 'LAISCB'
  | 'SMXCB'
  | 'DDCB'
  | 'HBB'
  | 'YANGQCB'
  | 'CGNB'
  | 'HUBCB'
  | 'CHDCB'
  | 'CAOYCB'
  | 'PDSCB'
  | 'HUARONGCB'
  | 'ZHONGYCB'
  | 'MIANYCB'
  | 'NZB'
  | 'DONGYCB'
  | 'GANZCB'
  | 'ZJTLCB'
  | 'TIBETCB'
  | 'QSCB'
  | 'BOG'
  | 'QHDCB'
  | 'DATCB'
  | 'JIUJCB'
  | 'HENGSHUICB'
  | 'TAIACB'
  | 'QUANZCB'
  | 'WHCB'
  | 'XINJCB'
  | 'BENXCB'
  | 'HANDCB'
  | 'ZIGONGCB'
  | 'LPSCB'
  | 'DEYCB'
  | 'XMB'
  | 'WFCB'
  | 'JSCB'
  | 'YTCB'
  | 'ZJMTCB'
  | 'ZZCB'
  | 'HMCCB'
  | 'SUINCB'
  | 'GWCB'
  | 'DALCB'
  | 'LSZCB'
  | 'DAIZCB'
  | 'BOCQ'
  | 'BOTS'
  | 'ZJKCB'
  | 'KFCB'
  | 'JINZCB'
  | 'BOHUIHECB'
  | 'NMGCB'
  | 'BOJ'
  | 'JILCB'
  | 'RIZCB'
  | 'COSTALCB'
  | 'SXJS'
  | 'FJCB'
  | 'JZCB'
  | 'LUZCB'
  | 'SZSCB'
  | 'LIUZCB'
  | 'HBCB'
  | 'GUILCB'
  | 'BAODCB'
  | 'JIAXCB'
  | 'ANSCB'
  | 'XINGTCB'
  | 'NINGBCB'
  | 'YNHTCB'
  | 'BOT'
  | 'HAINCCB'
  | 'ZHHRCB'
  | 'HUZCB'
  | 'WUHCB'
  | 'NANYCB'
  | 'HKBCHINA'
  | 'CSCB'
  | 'LUOYCB'
  | 'BOB'
  | 'SQCB'
  | 'LONGJCB'
  | 'CCAB'
  | 'GSCB'
  | 'GZCB'
  | 'KUNLCB'
  | 'ZAOZCB'
  | 'FUDCB'
  | 'FUSCB'
  | 'BOW'
  | 'YAANCB'
  | 'NXCB'
  | 'XUANKCB'
  | 'QUJCB'
  | 'XACB'
  | 'BSB'
  | 'DGCB'
  | 'CHANGZCB'
  | 'BOCD'
  | 'LSCB'
  | 'LIAOYCB'
  | 'DEZCB'
  | 'TIELCB'
  | 'QDB'
  | 'JXCB'
  | 'HULDCB'
  | 'CANGZCB'
  | 'LANGFCB'
  | 'NANCCB'
  | 'GUIYCB'
  | 'JIZCB'
  | 'BONJ'
  | 'BON'
  | 'ZJCZCB'
  | 'PZHCB'
  | 'SHXCB'
  | 'LSCCB'
  | 'ERDSCB'
  | 'JHCB'
  | 'BOH'
  | 'JINCB'
  | 'JSCJCB'
  | 'FUXCB'
  | 'SUZCB'
  | 'HUAXCB'
  | 'SDRCB'
  | 'NXHHRCB'
  | 'FUSRCB'
  | 'GDNHRCB'
  | 'WUXRCB'
  | 'ZSHRCB'
  | 'AHRCB'
  | 'JXRCB'
  | 'JSRCB'
  | 'GZRCB'
  | 'XZRCB'
  | 'GXRCB'
  | 'SXRCB'
  | 'CDRCB'
  | 'FSSSRCB'
  | 'GYRCB'
  | 'JSJYRCB'
  | 'WUJRCB'
  | 'ZHUHRCB'
  | 'ZJRCB'
  | 'ZJXSRCB'
  | 'BJRCB'
  | 'HNRCB'
  | 'TJRCB'
  | 'KMRCB'
  | 'JSDWRCB'
  | 'TAICRCB'
  | 'HUNRCB'
  | 'HBRCB'
  | 'GUIZRCB'
  | 'FSSDRCB'
  | 'SNXS'
  | 'JSCSRCB'
  | 'KLRCB'
  | 'YNRCB'
  | 'ZJJRCB'
  | 'JMXHRCB'
  | 'FJRCB'
  | 'CZRCB'
  | 'LFRDRCB'
  | 'SHRCB'
  | 'CQRCB'
  | 'NBQZRCB'
  | 'DGRCB'
  | 'MTDTCBCL'
  | 'AUXXLCBCL'
  | 'FRHLCBCL'
  | 'DECBCL'
  | 'CAMTLECBCL'
  | 'UBS'
  | 'HYCBCL'
  | 'BOCXGLC'
  | 'DEDYZCL'
  | 'KPDCB'
  | 'BEUCBCL'
  | 'JYCBLC'
  | 'YXCBLC'
  | 'SCB'
  | 'YLCB'
  | 'NLCCBCL'
  | 'JPSJZCBCL'
  | 'SMCBCL'
  | 'RHCBCL'
  | 'GBSGLCBCL'
  | 'CAFYCBCL'
  | 'ITSBLCBCL'
  | 'HSCB'
  | 'THPGCBCL'
  | 'CXCBLC'
  | 'XMICB'
  | 'NLAZCBCL'
  | 'FRBLCL'
  | 'DEDBAGCL'
  | 'CITICBCL'
  | 'UCBCL'
  | 'DEXDCBCL'
  | 'XHCBCL'
  | 'DHCBCL'
  | 'CITIHK'
  | 'ATRCMCL'
  | 'NLCB'
  | 'JBSKCBCL'
  | 'DEBFLYCB'
  | 'WHCBCL'
  | 'BEFTCBCL'
  | 'FRWMCBCL'
  | 'FRXYCBCL'
  | 'XZCBLC'
  | 'HSBLC'
  | 'NANYANGCB'
  | 'HKBEA'
  | 'DEBDYZCB'
  | 'CHXDCBCL'
  | 'HQCBCL'
  | 'KPMMCB'
  | 'HSBC'
  | 'USACBCL'
  | 'HYCB'
  | 'YLCBCL'
  | 'JPSLCBCL'
  | 'OTHERS'
  | 'CB'
  | 'SOCB'
  | 'MB'
  | 'UCB'
  | 'FB'
  | 'RCC'
  | 'RCB'
  | 'CCC'
  | 'VTB'
  | 'OCCB'
  | 'ORCB'
  | 'ORCCB'
  | 'OCCC'
  | 'ORCC'
  | 'ABC2B'
  | 'BOC2B'
  | 'BOCOM2B'
  | 'CCB2B'
  | 'ICBC2B'
  | 'CEB2B'
  | 'CGB2B'
  | 'CMB2B'
  | 'CMBC2B'
  | 'CNCB2B'
  | 'IB2B'
  | 'PAB2B'
  | 'PSBC2B'
  | 'SPDB2B'
  | 'UNKNOWN';

export type PAYMENTCATEGORY = 'FASTPAY' | 'GATEWAY' | 'ACCOUNT';

export type TRANSACTIONTYPE = 'TOP_UP' | 'WITHDRAW' | 'CHARGE' | 'PAY' | 'TRANSFER' | 'UNKNOWN';

export interface IBankBo {
  /** 账户类型 */
  bankAccountType?: BANKACCOUNTTYPE;
  /** 银行缩写 */
  bankAcronym?: BANKACRONYM;
  /** 银行名称 */
  bankName?: string;
  /** 每日支付次数 */
  dailyFrequency?: string;
  /** 每日支付限额 */
  dailyTotalAmount?: string;
  /** 每月支付金额 */
  monthlyTotalAmount?: string;
  /** 支付方式 */
  paymentCategory?: PAYMENTCATEGORY;
  /** 单笔支付最大金额 */
  singleTransactionMaxAmount?: string;
  /** 单笔支付最小金额 */
  singleTransactionMinAmount?: string;
  /** 交易类别 */
  transactionType?: TRANSACTIONTYPE;
}
