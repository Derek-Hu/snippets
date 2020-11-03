export interface ILabelDataExamineBo {
  /** 是否授权金税盘(是,否,未知) */
  data_examine_authorization_jin_shui_pan?: string;
  /** 个人征信是否存在当期逾期(是,否,未知) */
  data_examine_been_credit_overdue?: string;
  /** 是否成为过失信人(是,否,未知) */
  data_examine_been_lose_credit?: string;
  /** 是否成为过被执行人(是,否,未知) */
  data_examine_been_party_against?: string;
  /** 生意集中度 */
  data_examine_business_concentration?: string;
  /** 资产证明房产的房龄 */
  data_examine_certificate_house_age?: string;
  /** 申请城市---市 */
  data_examine_city_name?: string;
  /** 申请城市---省 */
  data_examine_country_name?: string;
  /** 参与授信房产的房龄 */
  data_examine_credit_house_age?: string;
  /** 个人征信是否存在5年内累计逾期次数是（）次 */
  data_examine_credit_overdue_num_in5_year?: string;
  /** 借款人及企业非抵押类负债合计与企业年收入的比值 */
  data_examine_debt_rate?: string;
  /** 是否有全额抵押(是,否,未知) */
  data_examine_full_assure?: string;
  /** 法定代表人、房屋房产权人、借款企业是否有50万以上的对外担保(是,否,未知) */
  data_examine_guarantor_over50_w?: string;
  /** 担保人年龄 */
  data_examine_guarantor_personal_age?: string;
  /** 担保人数量 */
  data_examine_guarantor_personal_num?: string;
  /** 是否有合同纠纷诉讼(是,否,未知) */
  data_examine_has_contract_disputes?: string;
  /** 是否有符合要求的企业流水(是,否,未知) */
  data_examine_has_corporation_account?: string;
  /** 房产数量 */
  data_examine_house_num?: string;
  /** 行业类别 */
  data_examine_industry_category?: string;
  /** 已知诉讼件数 */
  data_examine_litigation_num?: string;
  /** 是否有超额抵押(是,否,未知) */
  data_examine_over_full_assure?: string;
  /** 从业年限（年） */
  data_examine_service_year?: string;
  /** 同意进二抵的房产数量 */
  data_examine_two_estate_num?: string;
}
