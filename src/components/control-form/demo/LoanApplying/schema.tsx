export const FORM_SCHEMA = {
  "name": "FtcLoanApp",
  "label": "借款申请",
  "description": "",
  "fields": [
    {
      "name": "bank",
      "label": "银行卡信息",
      "description": "银行卡信息",
      "fieldCode": "bank",
      "fieldType": "OBJECT",
      "isArray": true,
      "fields": [
        {
          "name": "accountName",
          "label": "户名",
          "description": "1243567",
          "fieldCode": "bank_accountName",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^([\u3400-\uA4FF\uF900-\uFAFF]|\uFF08|\uFF09|\u00B7)*$"
          }
        },
        {
          "name": "accountNum",
          "label": "银行卡号",
          "description": "",
          "fieldCode": "bank_accountNum",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "bank",
          "label": "开户行",
          "description": "",
          "fieldCode": "bank_bank",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "OPENING_BANK"
          },
          "options": [
            {
              "name": "中国农业银行",
              "value": "ABC"
            },
            {
              "name": "中国银行",
              "value": "BOC"
            },
            {
              "name": "交通银行",
              "value": "BOCOM"
            },
            {
              "name": "中国建设银行",
              "value": "CCB"
            },
            {
              "name": "中国光大银行",
              "value": "CEB"
            },
            {
              "name": "广东发展银行",
              "value": "CGB"
            },
            {
              "name": "招商银行",
              "value": "CMB"
            },
            {
              "name": "中国民生银行",
              "value": "CMBC"
            },
            {
              "name": "中信银行",
              "value": "CNCB"
            },
            {
              "name": "兴业银行",
              "value": "IB"
            },
            {
              "name": "中国工商银行",
              "value": "ICBC"
            },
            {
              "name": "中国平安银行",
              "value": "PAB"
            }
          ]
        },
        {
          "name": "branch",
          "label": "支行",
          "description": "",
          "fieldCode": "bank_branch",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "collectionAccountType",
          "label": "放款接收账户类型",
          "description": "",
          "fieldCode": "bank_collectionAccountType",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "CollectionAccountType"
          },
          "options": [
            {
              "name": "企业",
              "value": "Enterprise"
            },
            {
              "name": "个人",
              "value": "Person"
            }
          ]
        },
        {
          "name": "entrustedPayment",
          "label": "放款是否受托支付",
          "description": "",
          "fieldCode": "bank_entrustedPayment",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "BooleanEnum"
          },
          "options": [
            {
              "name": "否",
              "value": "FALSE"
            },
            {
              "name": "是",
              "value": "TRUE"
            }
          ]
        },
        {
          "name": "idCard",
          "label": "身份证号",
          "description": "",
          "fieldCode": "bank_idCard",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "phone",
          "label": "银行预留手机号",
          "description": "",
          "fieldCode": "bank_phone",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^1[0-9]{10}$"
          }
        }
      ]
    },
    {
      "name": "borrower",
      "label": "借款人信息",
      "description": "139594657",
      "fieldCode": "borrower",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "idCard",
          "label": "身份证",
          "description": "",
          "fieldCode": "borrower_idCard",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "iid",
          "label": "iid",
          "description": "",
          "fieldCode": "borrower_iid",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "name",
          "label": "姓名",
          "description": "",
          "fieldCode": "borrower_name",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^([\u3400-\uA4FF\uF900-\uFAFF]|\uFF08|\uFF09|\u00B7)*$"
          }
        },
        {
          "name": "userType",
          "label": "借款人主体性质",
          "description": "",
          "fieldCode": "borrower_userType",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        }
      ]
    },
    {
      "name": "company",
      "label": "企业信息",
      "description": "",
      "fieldCode": "company",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "businessLicenseNum",
          "label": "工商注册号码",
          "description": "请输入正确的工商注册号",
          "fieldCode": "company_businessLicenseNum",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^[A-Za-z0-9]{0,32}$"
          }
        },
        {
          "name": "businessScope",
          "label": "经营范围",
          "description": "",
          "fieldCode": "company_businessScope",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "CompanySegment"
          },
          "options": [
            {
              "name": "宾馆",
              "value": "ACCOMMODATION"
            },
            {
              "name": "面包甜品店",
              "value": "BAKERY"
            },
            {
              "name": "饮料店",
              "value": "BEVERAGE"
            },
            {
              "name": "书店",
              "value": "BOOK_STORE"
            },
            {
              "name": "咖啡厅",
              "value": "COFFEE_HOUSE"
            },
            {
              "name": "化妆品店",
              "value": "COSMETICS_SHOP"
            },
            {
              "name": "便利店",
              "value": "CONVENIENCE_STORE"
            },
            {
              "name": "奶制品店",
              "value": "DAIRY_SHOP"
            },
            {
              "name": "熟食店",
              "value": "DELICATESSEN"
            },
            {
              "name": "冷饮店",
              "value": "COLD_DRINKS_SHOP"
            },
            {
              "name": "药妆店",
              "value": "DRUG_STORE"
            },
            {
              "name": "水果店",
              "value": "FRUIT_SHOP"
            },
            {
              "name": "礼品店",
              "value": "GIFT_SHOP"
            },
            {
              "name": "民宿",
              "value": "HOMESTAY"
            },
            {
              "name": "花店",
              "value": "FLORIST"
            },
            {
              "name": "旅馆",
              "value": "HOSTEL"
            },
            {
              "name": "酒店",
              "value": "HOTEL"
            },
            {
              "name": "客栈",
              "value": "INN"
            },
            {
              "name": "奶茶店",
              "value": "MILK_TEA_SHOP"
            },
            {
              "name": "母婴店",
              "value": "MOTHER_BABY_STORE"
            },
            {
              "name": "汽修",
              "value": "MOTOR"
            },
            {
              "name": "眼镜店",
              "value": "OPTICAL"
            },
            {
              "name": "其他",
              "value": "OTHER"
            },
            {
              "name": "其他零售行业",
              "value": "OTHER_RETAIL"
            },
            {
              "name": "宠物医院",
              "value": "PET_HOSPITAL"
            },
            {
              "name": "宠物店",
              "value": "PET_STORE"
            },
            {
              "name": "药店",
              "value": "PHARMACY"
            },
            {
              "name": "预包装食品店",
              "value": "PREPACKAGED_FOOD"
            },
            {
              "name": "餐厅",
              "value": "RESTAURANT"
            },
            {
              "name": "体育用品商店",
              "value": "SPORTS_SHOP"
            },
            {
              "name": "文具店",
              "value": "STATIONERY_STORE"
            },
            {
              "name": "超市",
              "value": "SUPERMARKET"
            },
            {
              "name": "茶馆",
              "value": "TEA_HOUSE"
            },
            {
              "name": "烟酒店",
              "value": "TOBACCO_LIQOUR"
            },
            {
              "name": "玩具店",
              "value": "TOY_SHOP"
            }
          ]
        },
        {
          "name": "employeeNumber",
          "label": "在职员工人数",
          "description": "",
          "fieldCode": "company_employeeNumber",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "name",
          "label": "企业名称",
          "description": "请输入100字以内企业名称",
          "fieldCode": "company_name",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^([\u3400-\uA4FF\uF900-\uFAFF]|\uFF08|\uFF09|\u00B7)*$"
          }
        },
        {
          "name": "operationAddress",
          "label": "实际经营地址",
          "description": "",
          "fieldCode": "company_operationAddress",
          "fieldType": "ADDRESS",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "registeredAddress",
          "label": "注册地址",
          "description": "",
          "fieldCode": "company_registeredAddress",
          "fieldType": "ADDRESS",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "registeredCapital",
          "label": "注册资本(元)",
          "description": "请填写0-10000000000之间的数字",
          "fieldCode": "company_registeredCapital",
          "fieldType": "MONEY",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "totalRevenue",
          "label": "总营业收入",
          "description": "",
          "fieldCode": "company_totalRevenue",
          "fieldType": "DECIMAL",
          "isArray": false,
          "isRequired": true,
        },
        {
          "name": "uniformCreditCode",
          "label": "统一社会信用代码",
          "description": "",
          "fieldCode": "company_uniformCreditCode",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^[A-Za-z0-9]{0,18}$"
          }
        }
      ]
    },
    {
      "name": "compliance",
      "label": "合规专用",
      "description": "",
      "fieldCode": "compliance",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "provideCreditReport",
          "label": "提供中国人民银行详版个人征信报告(简版个人征信请选择“否”)",
          "description": "提供中国人民银行征信报告（详版）",
          "fieldCode": "compliance_provideCreditReport",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "BooleanEnum"
          },
          "options": [
            {
              "name": "否",
              "value": "FALSE"
            },
            {
              "name": "是",
              "value": "TRUE"
            }
          ]
        }
      ]
    },
    {
      "name": "extra",
      "label": "其他",
      "description": "",
      "fieldCode": "extra",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "isMarketChannelApp",
          "label": "是否为市场渠道进件",
          "description": "是否为市场渠道进件",
          "fieldCode": "extra_isMarketChannelApp",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "BooleanEnum"
          },
          "options": [
            {
              "name": "否",
              "value": "FALSE"
            },
            {
              "name": "是",
              "value": "TRUE"
            }
          ]
        }
      ]
    },
    {
      "name": "finance",
      "label": "财务信息",
      "description": "",
      "fieldCode": "finance",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "allDeptAmt",
          "label": "总负债(元)",
          "description": "请输入0-100000000之间的数字",
          "fieldCode": "finance_allDeptAmt",
          "fieldType": "MONEY",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "delinquent180Num",
          "label": "近六个月逾期笔数(笔)",
          "description": "",
          "fieldCode": "finance_delinquent180Num",
          "fieldType": "INTEGER",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "otherLoanPlatformAmt",
          "label": "其他网络借贷平台总借款金额(元)",
          "description": "请输入0-100000000之间的数字",
          "fieldCode": "finance_otherLoanPlatformAmt",
          "fieldType": "MONEY",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "otherLoanPlatformNum",
          "label": "其他网络借贷平台数(个)",
          "description": "请输入0-100之间的数字",
          "fieldCode": "finance_otherLoanPlatformNum",
          "fieldType": "INTEGER",
          "isArray": false,
          "isRequired": true
        }
      ]
    },
    {
      "name": "job",
      "label": "工作信息",
      "description": "",
      "fieldCode": "job",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "industryCode",
          "label": "行业分类",
          "description": "行业分类",
          "fieldCode": "job_industryCode",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "IndustryCodeEnum"
          },
          "options": [
            {
              "name": "农、林、牧、渔业",
              "value": "I001"
            },
            {
              "name": "采矿业",
              "value": "I002"
            },
            {
              "name": "制造业",
              "value": "I003"
            },
            {
              "name": "电力、热力、燃气及水的生产和供应业",
              "value": "I004"
            },
            {
              "name": "建筑业",
              "value": "I005"
            },
            {
              "name": "批发和零售业",
              "value": "I006"
            },
            {
              "name": "交通运输、仓储和邮政业",
              "value": "I007"
            },
            {
              "name": "住宿和餐饮业",
              "value": "I008"
            },
            {
              "name": "信息传输、软件和信息技术服务业",
              "value": "I009"
            },
            {
              "name": "金融业",
              "value": "I010"
            },
            {
              "name": "房地产业",
              "value": "I011"
            },
            {
              "name": "租赁和商务服务业",
              "value": "I012"
            },
            {
              "name": "科学研究和技术服务业",
              "value": "I013"
            },
            {
              "name": "水利、环境和公共设施管理业",
              "value": "I014"
            },
            {
              "name": "居民服务、修理和其他服务业",
              "value": "I015"
            },
            {
              "name": "教育",
              "value": "I016"
            },
            {
              "name": "卫生和社会工作",
              "value": "I017"
            },
            {
              "name": "文化、体育和娱乐业",
              "value": "I018"
            },
            {
              "name": "公共管理、社会保障和社会组织",
              "value": "I019"
            },
            {
              "name": "贸易行业",
              "value": "I020"
            },
            {
              "name": "供应链",
              "value": "I021"
            },
            {
              "name": "其它",
              "value": "I099"
            },
            {
              "name": "国际组织",
              "value": "INTERNATIONAL_RGANIZATIONS"
            }
          ]
        },
        {
          "name": "occupation",
          "label": "工作性质",
          "description": "",
          "fieldCode": "job_occupation",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "OccupationEnum"
          },
          "options": [
            {
              "name": "会计师",
              "value": "ACCOUNTANT"
            },
            {
              "name": "航空公司",
              "value": "AIR"
            },
            {
              "name": "建筑师",
              "value": "ARCHITECT"
            },
            {
              "name": "国有商业银行/股份制商业银行/地方性商业银行",
              "value": "BANK"
            },
            {
              "name": "和尚道士",
              "value": "BONZE"
            },
            {
              "name": "商人",
              "value": "BUSINESSMAN"
            },
            {
              "name": "企业合伙人/股东/实际控制人",
              "value": "BUSINESS_OWNER"
            },
            {
              "name": "中国500强",
              "value": "CHINA_TOP_500"
            },
            {
              "name": "点融网认定的绩优企业",
              "value": "DIANRONG_COMPANY"
            },
            {
              "name": "医生",
              "value": "DOCTOR"
            },
            {
              "name": "司机",
              "value": "DRIVER"
            },
            {
              "name": "电力/能源/通信/烟草企业",
              "value": "ENERGE_TOBACCO_COM"
            },
            {
              "name": "企业员工",
              "value": "ENTERPRISE_EMPLOYEE"
            },
            {
              "name": "自由职业者",
              "value": "FREELANCE"
            },
            {
              "name": "一线员工",
              "value": "FRONTLINE_STAFF"
            },
            {
              "name": "高级管理人员",
              "value": "HIGH_GRADE_MANAGER"
            },
            {
              "name": "高收入人群",
              "value": "HIGH_INCOME"
            },
            {
              "name": "家庭主妇",
              "value": "HOUSEWIFE"
            },
            {
              "name": "个体经营者",
              "value": "INDIVIDUAL_OPERATOR"
            },
            {
              "name": "企业内部员工",
              "value": "INTERNAL_STAFF"
            },
            {
              "name": "律师",
              "value": "LAWYER"
            },
            {
              "name": "律师/会计师/建筑师",
              "value": "LAWYER_ACCOUNT_ARCHITECT"
            },
            {
              "name": "律师/医生/教师 ",
              "value": "LAWYER_DOCTOR_TEACHER"
            },
            {
              "name": "房屋中介（含房屋买卖、租赁）",
              "value": "LETTING_AGENCY"
            },
            {
              "name": "管理人员",
              "value": "MANAGER"
            },
            {
              "name": "中级管理人员",
              "value": "MIDDLE_GRADE_MANAGER"
            },
            {
              "name": "公务员",
              "value": "OFFICER"
            },
            {
              "name": "其他",
              "value": "OTHERS"
            },
            {
              "name": "农民",
              "value": "PEASANT"
            },
            {
              "name": "同行业公司员工",
              "value": "PEER_COMPANY"
            },
            {
              "name": "刑警、特警；消防队队员；警校学生",
              "value": "POLICE"
            },
            {
              "name": "上市企业",
              "value": "PUBLIC_COMPANY"
            },
            {
              "name": "公用事业单位",
              "value": "PUBLIC_INSTITUTION"
            },
            {
              "name": "公检法执法职位",
              "value": "PUBLIC_SECURITY_ORGANS"
            },
            {
              "name": "特殊场所职业（ktv、酒吧、按摩房、桑拿房、发廊等）",
              "value": "RECREATIONAL_GUIDES"
            },
            {
              "name": "退休人员",
              "value": "RETIREE"
            },
            {
              "name": "自雇人士",
              "value": "SELF_EMPLOYED"
            },
            {
              "name": "销售",
              "value": "SELLER"
            },
            {
              "name": "军人",
              "value": "SOLDIER"
            },
            {
              "name": "世界500强/中国500强",
              "value": "STRONG_COMPANY"
            },
            {
              "name": "学生",
              "value": "STUDENT"
            },
            {
              "name": "教师",
              "value": "TEACHER"
            },
            {
              "name": "专业技术人员",
              "value": "TECHNICAL_STAFF"
            },
            {
              "name": "无业",
              "value": "UNEMPLOYED"
            },
            {
              "name": "未知",
              "value": "UNKNOWN"
            },
            {
              "name": "工人",
              "value": "WORKER"
            },
            {
              "name": "世界500强",
              "value": "WORLD_TOP_500"
            }
          ]
        }
      ]
    },
    {
      "name": "loanBase",
      "label": "借款信息",
      "description": "",
      "fieldCode": "loanBase",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "appAmount",
          "label": "申请金额(元)",
          "description": "",
          "fieldCode": "loanBase_appAmount",
          "fieldType": "MONEY",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "appDate",
          "label": "借款申请日期",
          "description": "",
          "fieldCode": "loanBase_appDate",
          "fieldType": "DATE",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "autoSendMobileMsg",
          "label": "是否自动发送签约邀请短信",
          "description": "",
          "fieldCode": "loanBase_autoSendMobileMsg",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "BooleanEnum"
          },
          "options": [
            {
              "name": "否",
              "value": "FALSE"
            },
            {
              "name": "是",
              "value": "TRUE"
            }
          ]
        },
        {
          "name": "description",
          "label": "借款描述",
          "description": "",
          "fieldCode": "loanBase_description",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "desiredIntRate",
          "label": "借款利率",
          "description": "请输入0-100之间的数字，小数点后不能多于6位",
          "fieldCode": "loanBase_desiredIntRate",
          "fieldType": "PERCENT",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "maturity",
          "label": "借款期限(天)",
          "description": "",
          "fieldCode": "loanBase_maturity",
          "fieldType": "INTEGER",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "maturityType",
          "label": "借款期限单位",
          "description": "",
          "fieldCode": "loanBase_maturityType",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "MaturityType"
          },
          "options": [
            {
              "name": "按天",
              "value": "DAILY"
            },
            {
              "name": "按双周",
              "value": "DOUBLEWEEKLY"
            },
            {
              "name": "按月",
              "value": "MONTHLY"
            },
            {
              "name": "按周",
              "value": "WEEKLY"
            }
          ]
        },
        {
          "name": "paymentMethod",
          "label": "还款方式",
          "description": "",
          "fieldCode": "loanBase_paymentMethod",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "PaymentMethodEnum"
          },
          "options": [
            {
              "name": "等额本息",
              "value": "AMORTIZATION"
            },
            {
              "name": "等额本息(含每期管理费)",
              "value": "AMORTIZATION_MANAGEMENTFEE_INCLUDED_IN_RPA"
            },
            {
              "name": "一次性还本付息",
              "value": "BULLET"
            },
            {
              "name": "等本等息",
              "value": "EQUAL_PRINCIPAL_INTEREST"
            },
            {
              "name": "按月付息按季度/半年还本",
              "value": "PAY_AT_QUARTER_PERIOD/PAY_AT_HALF_YEAR_PERIOD"
            },
            {
              "name": "按期付息到期还本",
              "value": "PAY_AT_THE_END"
            },
            {
              "name": "随借随还",
              "value": "PIECEWISE_DYNAMIC"
            }
          ]
        },
        {
          "name": "productCode",
          "label": "ProductCode",
          "description": "",
          "fieldCode": "loanBase_productCode",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "purpose",
          "label": "借款目的",
          "description": "借款目的",
          "fieldCode": "loanBase_purpose",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "LoanPurposeEnum"
          },
          "options": [
            {
              "name": "固定资产-购买设备",
              "value": "CAPITAL_ASSETS"
            },
            {
              "name": "固定资产-其他",
              "value": "CAPITAL_OTHER"
            },
            {
              "name": "购车",
              "value": "CAR"
            },
            {
              "name": "固定资产-扩建/装修",
              "value": "COMPANY_EXPANDED_OR_DECORATED"
            },
            {
              "name": "综合消费",
              "value": "CONSUMER_COMPREHENSIVE"
            },
            {
              "name": "企业流动资金",
              "value": "CORPORATE_LIQUIDITY"
            },
            {
              "name": "业务资金周转",
              "value": "FUND_FLOW"
            },
            {
              "name": "家庭装修",
              "value": "HOUSE_RENOVATION"
            },
            {
              "name": "租房",
              "value": "HOUSE_RENT"
            },
            {
              "name": "流动资金-其他",
              "value": "LIQUIDITY_OTHER"
            },
            {
              "name": "生活缴费",
              "value": "LIVING_PAYMENT"
            },
            {
              "name": "流动资金-市场费用",
              "value": "MARKETING_FEE"
            },
            {
              "name": "医疗",
              "value": "MEDICAL"
            },
            {
              "name": "微整形",
              "value": "MICRO_PLASTIC"
            },
            {
              "name": "个人经营性贷款",
              "value": "PERSONAL_OPERATING_LOANS"
            },
            {
              "name": "预付卡充值",
              "value": "PREPAID_CARD_RECHARGE"
            },
            {
              "name": "流动资金-原材料采购",
              "value": "RAW_MATERIAL"
            },
            {
              "name": "流动资金-房租/水电",
              "value": "RENT_FEE"
            },
            {
              "name": "流动资金-员工工资",
              "value": "SALARY"
            },
            {
              "name": "购物",
              "value": "SHOPPING"
            },
            {
              "name": "教育培训",
              "value": "TRAINING"
            },
            {
              "name": "旅游",
              "value": "TRAVEL"
            },
            {
              "name": "婚庆",
              "value": "WEDDING"
            }
          ]
        },
        {
          "name": "repaymentSource",
          "label": "收入来源",
          "description": "收入来源",
          "fieldCode": "loanBase_repaymentSource",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "SourceIncomeEnum"
          },
          "options": [
            {
              "name": "奖金",
              "value": "BONUS"
            },
            {
              "name": "个体经营收入",
              "value": "INDIVIDUAL_OPERATING_INCOME"
            },
            {
              "name": "利息",
              "value": "INTEREST"
            },
            {
              "name": "投资收益",
              "value": "INVEST"
            },
            {
              "name": "经营收入",
              "value": "OPERATING_INCOME"
            },
            {
              "name": "其他",
              "value": "OTHER"
            },
            {
              "name": "租金",
              "value": "RENTAL"
            },
            {
              "name": "薪资收入",
              "value": "SALARY"
            }
          ]
        },
        {
          "name": "tenant",
          "label": "租户信息",
          "description": "租户信息",
          "fieldCode": "loanBase_tenant",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "LoanTenant"
          },
          "options": [
            {
              "name": "大连德云晟",
              "value": "deyunsheng"
            }
          ]
        },
        {
          "name": "title",
          "label": "借款标题",
          "description": "",
          "fieldCode": "loanBase_title",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "uid",
          "label": "UID",
          "description": "",
          "fieldCode": "loanBase_uid",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true
        }
      ]
    },
    {
      "name": "person",
      "label": "个人信息",
      "description": "",
      "fieldCode": "person",
      "fieldType": "OBJECT",
      "isArray": false,
      "fields": [
        {
          "name": "annualIncome",
          "label": "年收入(元)",
          "description": "请填写0-10000000000之间的数字",
          "fieldCode": "person_annualIncome",
          "fieldType": "MONEY",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "maritalStatus",
          "label": "婚姻情况",
          "description": "",
          "fieldCode": "person_maritalStatus",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "MaritalStatusEnum"
          },
          "options": [
            {
              "name": "再婚",
              "value": "DIGAMY"
            },
            {
              "name": "离异",
              "value": "DIVORCED"
            },
            {
              "name": "初婚",
              "value": "FIRST_MARRIAGE"
            },
            {
              "name": "已婚",
              "value": "MARRIED"
            },
            {
              "name": "已婚已育",
              "value": "MARRIED_HAS_CHILD"
            },
            {
              "name": "已婚未育",
              "value": "MARRIED_NO_CHILD"
            },
            {
              "name": "其他",
              "value": "OTHER"
            },
            {
              "name": "复婚",
              "value": "REMARRY"
            },
            {
              "name": "未婚",
              "value": "SINGLE"
            },
            {
              "name": "未说明的婚姻状况",
              "value": "UNKNOWN"
            },
            {
              "name": "丧偶",
              "value": "WIDOWED"
            }
          ]
        },
        {
          "name": "mobilePhone",
          "label": "手机号码",
          "description": "",
          "fieldCode": "person_mobilePhone",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^1[0-9]{10}$"
          }
        },
        {
          "name": "residenceAddr",
          "label": "居住地址",
          "description": "",
          "fieldCode": "person_residenceAddr",
          "fieldType": "ADDRESS",
          "isArray": false,
          "isRequired": true
        }
      ]
    },
    {
      "name": "shareholder",
      "label": "股东信息",
      "description": "",
      "fieldCode": "shareholder",
      "fieldType": "OBJECT",
      "isArray": true,
      "fields": [
        {
          "name": "cardNumber",
          "label": "证件号码",
          "description": "请输入正确的身份证",
          "fieldCode": "shareholder_cardNumber",
          "fieldType": "ID_CARD",
          "isArray": false,
          "isRequired": true
        },
        {
          "name": "mobile",
          "label": "移动电话",
          "description": "",
          "fieldCode": "shareholder_mobile",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^1[0-9]{10}$"
          }
        },
        {
          "name": "name",
          "label": "姓名",
          "description": "",
          "fieldCode": "shareholder_name",
          "fieldType": "STRING",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "regex": "^([\u3400-\uA4FF\uF900-\uFAFF]|\uFF08|\uFF09|\u00B7)*$"
          }
        },
        {
          "name": "relation",
          "label": "关系类型",
          "description": "",
          "fieldCode": "shareholder_relation",
          "fieldType": "ENUM",
          "isArray": false,
          "isRequired": true,
          "extInfo": {
            "enumName": "CompanyAffiliatedPersonRelationEnum"
          },
          "options": [
            {
              "name": "借款企业实控人",
              "value": "CONTROLLER"
            },
            {
              "name": "借款企业实控人的配偶",
              "value": "CONTROLLER_SPOUSE"
            },
            {
              "name": "担保方（公司）实控人",
              "value": "GUARANTOR_CONTROLLER"
            },
            {
              "name": "担保方（公司）法定代表人",
              "value": "GUARANTOR_LEGAL_REPRESENTATIVE"
            },
            {
              "name": "借款企业的担保方（个人）",
              "value": "GUARANTOR_PERSON"
            },
            {
              "name": "担保方（个人）的配偶",
              "value": "GUARANTOR_PERSON_SPOUSE"
            },
            {
              "name": "房屋产权人",
              "value": "HOUSING_PROPERTY_OWNER"
            },
            {
              "name": "房屋产权人配偶",
              "value": "HOUSING_PROPERTY_OWNER_SPOUSE"
            },
            {
              "name": "借款企业法定代表人",
              "value": "LEGAL_REPRESENTATIVE"
            },
            {
              "name": "法定代表人的直系亲属",
              "value": "LEGAL_REPRESENTATIVE_LINEAL_KIN"
            },
            {
              "name": "借款企业法人的配偶",
              "value": "LEGAL_REPRESENTATIVE_SPOUSE"
            },
            {
              "name": "其他",
              "value": "OTHERS"
            },
            {
              "name": "负责人",
              "value": "PRINCIPAL"
            },
            {
              "name": "借款企业股东",
              "value": "SHAREHOLDER"
            },
            {
              "name": "股东配偶或直系亲属",
              "value": "SHAREHOLDER_SPOUSE"
            },
            {
              "name": "共有权人",
              "value": "SHARE_PROPERTY_OWNER"
            },
            {
              "name": "借款人的配偶",
              "value": "SPOUSE"
            }
          ]
        }
      ]
    }
  ]
}