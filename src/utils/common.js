import { formatMessage } from '~/locale-tools';
import React from 'react';
import qs from 'query-string';
import moment from 'moment';
import _ from 'lodash';
import { DATE_FOMATE, FILTER_DATE_FOMATE, TIME_FOMATE } from '~/constants/constant';
import { Base64 } from 'js-base64';
import floatUtil from './float-util';
import { getDocumentLink } from '~/services/order-info';
import { Table } from 'antd';
import { numberFormat } from '~/utils/numberFormat';
import { setDefaultValue } from './mapping-util';
import fetch from 'dva/fetch';

/*
 *得到上周的时间范围
 */
export function lastWeekRange() {
  const dayInLastWeek = moment().subtract(7, 'days');

  return {
    startDate: dayInLastWeek
      .startOf('week')
      .startOf('day')
      .format(FILTER_DATE_FOMATE),
    endDate: dayInLastWeek
      .endOf('week')
      .endOf('day')
      .format(FILTER_DATE_FOMATE),
  };
}

export function weekRange() {
  const dayInWeekMonth = moment().startOf('week');
  return {
    startDate: dayInWeekMonth.startOf('day').format(FILTER_DATE_FOMATE),
    endDate: moment()
      .endOf('day')
      .format(FILTER_DATE_FOMATE),
  };
}

/*
 *得到上月的时间范围
 */
export function lastMonthRange() {
  const dayInLastMonth = moment()
    .startOf('month')
    .subtract(1, 'days');

  return {
    startDate: dayInLastMonth
      .startOf('month')
      .startOf('day')
      .format(FILTER_DATE_FOMATE),
    endDate: dayInLastMonth
      .endOf('month')
      .endOf('day')
      .format(FILTER_DATE_FOMATE),
  };
}

/*
 *得到本月的时间范围
 */
export function monthRange() {
  return {
    startDate: moment()
      .startOf('month')
      .startOf('day')
      .format(FILTER_DATE_FOMATE),
    endDate: moment()
      .endOf('day')
      .format(FILTER_DATE_FOMATE),
  };
}

/*
 *得到半年的时间范围
 */
export function halfYearRange() {
  const dayInLastMonth = moment().subtract(182, 'days');

  return {
    startDate: dayInLastMonth.startOf('day').format(FILTER_DATE_FOMATE),
    endDate: moment()
      .endOf('day')
      .format(FILTER_DATE_FOMATE),
  };
}

export function passToTodayRange() {
  return {
    startDate: '2013-03-01 00:00:00.000',
    endDate: moment()
      .endOf('day')
      .format(FILTER_DATE_FOMATE),
  };
}

/*
 * 将dashboard返回的结果转化为table、需要的格式
 */
export function constructorLendingTableData(transformData) {
  let titles = [];
  let lengdingResult = {
    key: 'lendingKey',
  };
  let index = 0;
  for (let item of transformData) {
    const nodeIndex = `node${index}`;
    const { processingCount, workStationName } = item;
    if (!_.has(lengdingResult, nodeIndex)) {
      titles.push({
        title: workStationName,
        dataIndex: `node${index}`,
      });
      lengdingResult[nodeIndex] = processingCount;
    }
    index += 1;
  }
  const result = {
    titles: titles,
    lending: [lengdingResult],
  };

  return result;
}
const radix = 10;

function additionalZero(value) {
  return value < 10 ? `0${value}` : value;
}

// 将毫秒转化为 00:00:00 格式
export function millisecondToTime(millSencondTime) {
  // 转化为秒

  let fontColor = '#2acd8f';
  let prefix = '';

  let secondTime = parseInt(millSencondTime / 1000, radix);
  if (secondTime <= 0) {
    fontColor = 'red';
    prefix = secondTime < 0 ? '-' : '';
  }

  secondTime = Math.abs(secondTime);

  let minuteTime = 0;
  let hourTime = 0;
  if (secondTime > 60) {
    // 如果秒数大于60，将秒数转换成整数
    // 获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60, radix);
    // 获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60, radix);
    // 如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
      // 获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60, radix);
      // 获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60, radix);
    }
  }
  let time = `${additionalZero(hourTime)}:${additionalZero(minuteTime)}:${additionalZero(secondTime)}`;

  return {
    time,
    prefix,
    fontColor,
  };
}

export function MillisecondToDate(sencondTime) {
  let time = parseInt(sencondTime, radix) + formatMessage({ id: 'second' });
  if (parseInt(sencondTime, radix) > 60) {
    let second = parseInt(sencondTime, radix) % 60;
    let min = parseInt(sencondTime / 60, radix);
    time = min + formatMessage({ id: 'branch-1' }) + second + formatMessage({ id: 'second' });

    if (min > 60) {
      min = parseInt(sencondTime / 60, radix) % 60;
      let hour = parseInt(parseInt(sencondTime / 60, radix) / 60, radix);
      time =
        hour +
        formatMessage({ id: 'hour' }) +
        min +
        formatMessage({ id: 'branch-1' }) +
        second +
        formatMessage({ id: 'second' });

      if (hour > 24) {
        hour = parseInt(parseInt(sencondTime / 60, radix) / 60, radix) % 24;
        let day = parseInt(parseInt(parseInt(sencondTime / 60, radix) / 60, radix) / 24, radix);
        time =
          day +
          formatMessage({ id: 'day' }) +
          hour +
          formatMessage({ id: 'hour' }) +
          min +
          formatMessage({ id: 'branch-1' }) +
          second +
          formatMessage({ id: 'second' });
      }
    }
  }

  return time;
}

/*
 *解决浮点数精度问题
 *用于提取小数点后面的数字
 */
export function floatToInt(num) {
  return floatUtil.mul(num, 100);
}

/*
 * 将dashboard返回的结果转化为table、需要的格式
 */
export function constructorFunnelTableData(transformData) {
  let titles = [];
  let funnelCount = { type: formatMessage({ id: 'number-2' }), key: 'completedCount' };
  let funnelAllTrans = { type: formatMessage({ id: 'total-transformation' }), key: 'totalConversion' };
  let funnelProcessTrans = { type: formatMessage({ id: 'process-transformation' }), key: 'conversion' };
  let funnelAvg = { type: formatMessage({ id: 'average-duration' }), key: 'averageTime' };

  let index = 0;
  for (let item of transformData) {
    const nodeIndex = `node${index}`;

    const { completedCount, totalConversion, conversion, averageTime, workStationName } = item;

    titles.push({
      title: workStationName,
      dataIndex: `node${index}`,
    });

    if (!_.has(funnelCount, nodeIndex)) {
      funnelCount[nodeIndex] = completedCount;
    }

    if (!_.has(funnelAllTrans, nodeIndex)) {
      funnelAllTrans[nodeIndex] = totalConversion !== 0 ? `${floatToInt(totalConversion)}%` : totalConversion;
    }

    if (!_.has(funnelProcessTrans, nodeIndex)) {
      funnelProcessTrans[nodeIndex] = conversion !== 0 ? `${floatToInt(conversion)}%` : conversion;
    }

    if (!_.has(funnelAvg, nodeIndex)) {
      funnelAvg[nodeIndex] = averageTime !== 0 ? MillisecondToDate(averageTime) : averageTime;
    }

    index += 1;
  }
  let result = {
    titles: titles,
    lengdingFunel: [funnelCount, funnelAllTrans, funnelProcessTrans, funnelAvg],
  };

  return result;
}

/*
 *转化未结束借款detail信息数据
 */
export function constructorDetaiTableData(transformData, itemName) {
  let titles = [];
  let data = [];
  let summary = {};
  let index = 0;

  let workstationIdDict = {};

  for (let item of transformData) {
    const key = `key${index}`;
    let dataItem = {
      key,
      date: moment(item.applicationDate).format(DATE_FOMATE),
    };
    let ifAddNewItem = false;
    for (let detaiItem of item.workstationStatistics) {
      const { workStationName, workStationId } = detaiItem;

      let itemCount = detaiItem[itemName];

      if (!_.has(workstationIdDict, workStationName)) {
        workstationIdDict[workStationName] = workStationId;
      }

      const workStationNameIndex = _.findIndex(titles, titleItem => {
        return titleItem.title === workStationName;
      });
      // 判断是否添加标题
      if (workStationNameIndex === -1 || _.isEmpty(titles)) {
        titles.push({
          title: workStationName,
          dataIndex: `${workStationName}`,
        });
      }

      if (!_.has(dataItem, workStationName)) {
        if (itemName === 'totalConversion' || itemName === 'conversion') {
          itemCount = floatToInt(itemCount);
        }

        if (!_.has(summary, workStationName)) {
          summary[workStationName] = itemCount;
        } else {
          summary[workStationName] = floatUtil.add(itemCount, summary[workStationName]);
        }

        if (itemName === 'averageTime') {
          itemCount = itemCount !== 0 ? MillisecondToDate(itemCount) : itemCount;
        }

        if (itemName === 'totalConversion' || itemName === 'conversion') {
          itemCount = itemCount !== 0 ? `${itemCount}%` : itemCount;
        }

        if (itemName !== 'processingCount') {
          dataItem[workStationName] = {
            itemCount,
            workStationId,
          };
        } else {
          dataItem[workStationName] = itemCount;
        }

        ifAddNewItem = true;
      }
    }
    if (ifAddNewItem) {
      data.push(dataItem);
    }

    index += 1;
  }

  if (!_.isEmpty(titles)) {
    titles.unshift({
      title: formatMessage({ id: 'date' }),
      dataIndex: 'date',
    });
  }

  for (let item of data) {
    Object.keys(workstationIdDict).map(key => {
      if (!_.has(item, key)) {
        if (itemName === 'processingCount') {
          item[key] = 0;
        } else {
          item[key] = {
            itemCount: 0,
            workStationId: workstationIdDict[key],
          };
        }
      }
    });
  }

  return { titles, data, summary };
}

export function constructDrawData(transformData) {
  let result = [];

  for (let item of transformData) {
    let { averageTime, completedCount, operatorName } = item;

    if (!operatorName) {
      operatorName = formatMessage({ id: 'no-name-defined' });
    }

    const transaction = {
      name: operatorName,
      number: completedCount,
      flag: formatMessage({ id: 'transaction' }),
    };
    const convertion = {
      name: operatorName,
      time: _.round(averageTime / 3600.0, 3),
      flag: formatMessage({ id: 'average-processing-time' }),
    };
    result.push(transaction, convertion);
  }

  return result;
}

/*
 *从localStorage中获取以往保存的搜索条件
 */
export function getLocalStorageToProps() {
  const searchRecent = localStorage.getItem('historyFilterParams');

  if (searchRecent) {
    const historyConndition = JSON.parse(Base64.decode(searchRecent));
    return historyConndition;
  }

  return {};
}

export function mapQueryToLocastorage(conditions) {
  const historyParam = getLocalStorageToProps();
  if (!_.isEmpty(conditions) && !_.isUndefined(conditions) && !_.isEqual(conditions, historyParam)) {
    const condition = Base64.encode(
      JSON.stringify({
        ...conditions,
        storeTime: moment().format(TIME_FOMATE),
      })
    );
    localStorage.setItem('historyFilterParams', condition);
  }
}

/*
 * 返回格式 result = [[title1,title2],[a,b],[a,b]]
 */
export function contructExcelData(titles, data) {
  let result = [];

  let titleList = [];

  for (let tileItem of titles) {
    titleList.push(tileItem.title);
  }
  //  添加titles的数组
  result.push(titleList);

  for (let dataItem of data) {
    let excelData = [];
    Object.keys(dataItem).forEach(key => {
      if (key !== 'key') {
        excelData.push(dataItem[key]);
      }
    });
    result.push(excelData);
  }

  return result;
}

/*
 * 该函数作用为将对象数组转化为字典
 * 主要用于在筛选联动的数据
 */
export function arrayTodict(arrays) {
  let result = {};

  if (_.isArray(arrays)) {
    for (let item of arrays) {
      if (_.has(item, 'id')) {
        result[item.id] = item;
      }
      if (_.has(item, 'code')) {
        result[item.code] = item;
      }
      if (_.has(item, 'name') && _.has(item, 'value')) {
        result[item.value] = item.name;
      }
    }
  }
  return result;
}

/*
 *用于转化借款漏斗table数据为导出excel需要的格式
 */
export function transformTableToExcel(filterPrams, dataTitles, resultData, category) {
  const { workflowIdList, productCodeList } = filterPrams;
  const startDate = moment(filterPrams.startDate).format(TIME_FOMATE);
  const endDate = moment(filterPrams.endDate).format(TIME_FOMATE);
  const reportName = filterPrams.reportName;
  const workflowItme = _.find(category.data, item => {
    return _.join(item.workflowIdList, ',') === workflowIdList;
  });

  let productNames = [];
  if (!_.isUndefined(productCodeList) && !_.isEmpty(productCodeList)) {
    productNames = _.filter(workflowItme.productList, item => {
      return (
        _.findIndex(productCodeList, value => {
          return value === item.code;
        }) !== -1
      );
    });
  }

  let workflowName =
    _.isNull(workflowItme.workflowCategory) || _.isUndefined(workflowItme.workflowName)
      ? workflowItme.workflowName
      : workflowItme.workflowCategory;

  let titleStr = `${reportName}${formatMessage({ id: 'start-time-1' })}${startDate}${formatMessage({
    id: 'end-time-1',
  })}${endDate}${formatMessage({ id: 'technological-process-1' })}${workflowName}`;
  if (!_.isEmpty(productNames)) {
    let productNameText = '';
    for (let product of productNames) {
      productNameText += `${product.name} `;
    }
    titleStr += `${formatMessage({ id: 'products' })}${productNameText}`;
  }

  let result = {
    reportTitle: titleStr,
    dataTitle: [],
    dataResult: [],
  };

  for (let titleItem of dataTitles) {
    result.dataTitle.push(titleItem.title);
  }

  for (let dataItem of resultData) {
    let dataArray = [];
    Object.keys(dataItem).forEach(key => {
      if (key !== 'key') {
        dataArray.push(dataItem[key]);
      }
    });
    result.dataResult.push(dataArray);
  }

  const tiitleLength = result.dataTitle.length;
  let extraColnum = _.fill(Array(tiitleLength), '');
  extraColnum[0] = `${formatMessage({ id: 'export-report-time' })}${moment().format(TIME_FOMATE)}`;

  result.dataResult.push(extraColnum);
  return result;
}

/*
 *filterPrams:[{text:"MCAapplicationStandard:MCAapplicationStandard",type:"流程"}]
 *dataTitle:[{title: "借款ID",key: "departmentName"}]
 *dataResult:[{departmentName:"1"}]
 */
export function transformLendingDetailTableToExcel(dataTitle, dataResult, filterPrams = []) {
  let result = {
    reportTitle: '',
    dataTitle: [],
    dataResult: [],
  };

  if (!_.isEmpty(filterPrams)) {
    for (let conditionItem of filterPrams) {
      result.reportTitle += `${conditionItem.type}:${conditionItem.text}   `;
    }
  }

  for (let dataItem of dataResult) {
    let data = [];

    for (let titleItem of dataTitle) {
      if (_.indexOf(result.dataTitle, titleItem.title) === -1) {
        result.dataTitle.push(titleItem.title);
      }
      data.push(dataItem[titleItem.key]);
    }
    result.dataResult.push(data);
  }
  const tiitleLength = result.dataTitle.length;
  let extraColnum = _.fill(Array(tiitleLength), '');
  extraColnum[0] = `${formatMessage({ id: 'export-report-time' })}${moment().format(TIME_FOMATE)}`;

  result.dataResult.push(extraColnum);
  return result;
}

const DOCUMENT_COLUMN = [
  {
    title: formatMessage({ id: 'file-name-1' }),
    dataIndex: 'fileName',
    render: text => {
      return setDefaultValue(text);
    },
  },
  {
    title: formatMessage({ id: 'upload-time' }),
    dataIndex: 'uploadedTime',
    render: text => {
      return setDefaultValue(text, 'date');
    },
  },
  {
    title: formatMessage({ id: 'file-path' }),
    dataIndex: 'location',
    render: text => {
      return setDefaultValue(text);
    },
  },
];

/*
 * 用于动态渲染页面数据时对数据进行转化
 */
export function transformItemVaule(item, valueTmp) {
  let value = '';
  if (!!valueTmp || valueTmp === 0) {
    if (item.fieldType === 'ENUM' && _.isArray(item.options)) {
      //值是数组
      if (_.isArray(valueTmp)) {
        value = valueTmp
          .map(value => {
            return (_.find(item.options, { value }) || {}).name;
          })
          .join(',');
      } else if (_.isString(valueTmp)) {
        //字符串
        value = (_.find(item.options, { value: valueTmp }) || {}).name;
      }
    } else if (item.fieldType === 'BOOLEAN') {
      value = setDefaultValue(valueTmp, 'bool');
    } else if (item.fieldType === 'MONEY') {
      value = numberFormat(valueTmp);
    } else if (item.fieldType === 'BIG_DECIMAL') {
      value = valueTmp;
    } else if (item.fieldType === 'DATE') {
      value = moment(valueTmp).format(TIME_FOMATE);
    } else if (item.fieldType === 'DOCUMENT' && _.isArray(valueTmp)) {
      value = (
        <Table
          dataSource={valueTmp}
          columns={DOCUMENT_COLUMN}
          pagination={{ pageSize: 4, hideOnSinglePage: true }}
          rowKey={record => record.fileName}
        />
      );
    } else {
      if (_.isObject(valueTmp)) {
        if (_.has(valueTmp, 'name')) {
          value = valueTmp.name;
        } else {
          let showLabel = '';
          Object.keys(valueTmp).forEach(key => {
            showLabel += valueTmp[key];
          });
          value = showLabel;
        }
      } else {
        value = valueTmp;
      }
    }
  }

  if (_.isUndefined(value) || _.isNull(value) || (_.isEmpty(value) && !_.isNumber(value))) {
    value = '-';
  }

  return value;
}

/*
*params = {
  structor 页面结构,
  data 接口返回的数据
}
*result = {
  tab1:[{titile:"客户基本信心",content:[
  {
    title: '借款人',
    value: 'XX'
  }]}],
}
*/
export function transformResultToTabsStructor(structor, data) {
  let result = [];

  // 判断是否返回的格式不正确
  if (!_.isUndefined(structor.forms) && _.isArray(structor.forms)) {
    const forms = structor.forms;

    forms.forEach(item => {
      // 得到一个对应data的key
      const dataFirstKey = item.name;
      let content = [];
      // loanBase为借款信息，已经单独在页面上部展示，这边需过滤
      if (dataFirstKey !== 'loanBase' && !_.isUndefined(item.fields) && _.isArray(item.fields)) {
        if (_.isArray(data[dataFirstKey])) {
          for (let i = 0; i < data[dataFirstKey].length; i++) {
            let tempData = [];
            item.fields.forEach(childItem => {
              const secondKey = childItem.name.split('_')[1];
              let title = childItem.label;
              let valueTmp = data[dataFirstKey][i][secondKey];

              let value = transformItemVaule(childItem, valueTmp);

              tempData.push({
                title: title,
                value: value,
              });
            });
            content.push(tempData);
          }
        } else {
          item.fields.forEach(childItem => {
            const secondKey = childItem.name.split('_')[1];
            if (!_.isUndefined(data[dataFirstKey])) {
              const title = childItem.label;
              const valueTmp = data[dataFirstKey][secondKey];

              let value = transformItemVaule(childItem, valueTmp);

              content.push({
                title: title,
                value: value,
              });
            }
          });
        }

        if (!_.isEmpty(content)) {
          result.push({
            title: item.label,
            content,
          });
        }
      }
    });
  }
  return result;
}

/*
 *从result中分离三方协议以及双方合同
 */
export function transformContractsData(result) {
  let contractsInfo = {
    threeContracts: [],
    bothContracts: [],
  };

  for (let item of result) {
    if (item.type === 'TRIPARTITE_LOAN_AGREEMENT') {
      contractsInfo.threeContracts.push(item);
    } else {
      contractsInfo.bothContracts.push(item);
    }
  }

  return contractsInfo;
}

/*
 *根据文件名后缀返回文件类型
 *文件类型包含图片(img) 文件(pdf,zip) 以及其他(other)
 */
export function getFileType(name) {
  const imgReg = /\.(gif|jpg|jpeg|png)$/gi;
  if (imgReg.test(name)) {
    return 'imgs';
  }
  const pdfReg = /\.(pdf)$/gi;
  if (pdfReg.test(name)) {
    return 'pdfs';
  }
  const zipReg = /\.(zip)$/gi;
  if (zipReg.test(name)) {
    return 'zips';
  }
  return 'others';
}

/*
*聚合影像列表将同一type的聚合在一类
*params:{
  documentList:文档列表,
  applicationId:应用id，
  annexType:附件类型
}
*return [{
*  name:"XXX证明",
*  type:"XXXX",
*  imgs:[{"src":"XXX","id": 95,"name": "home.png","type": "IDENTITY_CARD","category": "BORROWER_DOCS"}],
*  pdfs:[{"src":"XXX","id": 95,"name": "home.png","type": "IDENTITY_CARD","category": "BORROWER_DOCS"}],
*  zips:[{"src":"XXX","id": 95,"name": "home.png","type": "IDENTITY_CARD","category": "BORROWER_DOCS"}],
*  others:[{"src":"XXX","id": 95,"name": "home.png","type": "IDENTITY_CARD","category": "BORROWER_DOCS"}]
*}]
*/
export function getGroupDocumentList(documentList) {
  let loanappResult = [];

  for (let documentItem of documentList) {
    // 是否为scp的附件
    let documentItemIndex = -1;

    documentItemIndex = _.findIndex(loanappResult, item => item.docType === documentItem.docType);

    const documentType = getFileType(documentItem.name);
    let documentItemClone = _.clone(documentItem);
    documentItemClone.src = getDocumentLink(documentItemClone.location);

    if (documentItemIndex < 0) {
      let itemTmp = {
        name: documentItem.name,
        type: documentItem.docType,
        imgs: [],
        pdfs: [],
        zips: [],
        others: [],
      };
      itemTmp[documentType].push(documentItemClone);

      loanappResult.push(itemTmp);
    } else {
      loanappResult[documentItemIndex][documentType].push(documentItemClone);
    }
  }

  let result = {
    loanappResult,
  };

  return result;
}

export function secondsToTimeStr(seconds) {
  if (_.isNull(seconds)) {
    return seconds;
  }

  try {
    return moment(seconds).format(TIME_FOMATE);
  } catch (e) {
    console.log(e);
    return seconds;
  }
}

export function numToPercent(point) {
  let pointIndex = 1;

  try {
    let pointCount = point.toString().split('.')[1].length;

    pointIndex = pointCount <= 2 ? 0 : pointCount - 2 > 10 ? 10 : pointCount - 2;
  } finally {
    let str = Number(point * 100).toFixed(pointIndex);
    str = `${str}%`;
    return str;
  }
}

const numberRegx = /^[0-9]*$/;
/*
 * 用于将审批中心的configinfo统一转化为显示的label
 */
export function valueToLabeInfo(next, value) {
  let label = value;

  switch (next.type) {
    case 'options':
      label = next.options[value] ? next.options[value] : value;
      break;
    case 'date':
      if (numberRegx.test(value)) {
        label = moment(value).format(TIME_FOMATE);
      }
      break;
    case 'money':
      label = numberFormat(value);
      break;
    case 'rate':
      label = numToPercent(value);
      break;
    case 'addRate':
      label = `${value}%`;
      break;
    case 'bool':
      label = value ? formatMessage({ id: 'yes' }) : formatMessage({ id: 'no' });
      break;
    case 'array':
      label = _.isEmpty(value) ? '-' : value.join(', ');
      break;
    default:
      if (_.isArray(value)) {
        label = value.join('\n');
      }
  }

  return label;
}

function handleGetInitValue(dict, key, type = 'string') {
  if (type === 'array' && _.isArray(dict)) {
    let ids = '';
    for (let item of dict) {
      if (item.applicationId && item.applicationId !== 0) {
        ids += item.applicationId + ',';
      }
    }
    return ids.substr(0, ids.length - 1);
  }

  return dict ? dict[key] : '';
}

export function constructorArchivePutData(editRecord) {
  let submitTemplate = {
    archiveIdList: [],
    propertyBo: {
      applicationIds: '',
      documentBoList: [],
      expireDate: '',
      fileCount: '',
      handoverDate: '',
      handoverPerson: '',
      name: '',
      original: false,
      signDate: '',
      type: '',
    },
  };
  submitTemplate.archiveIdList.push(editRecord.id);

  let propertyBo = submitTemplate.propertyBo;

  propertyBo.applicationIds = handleGetInitValue(editRecord.archiveApplicationMappingBos, 'applicationIds', 'array');
  propertyBo.documentBoList = editRecord.documentBos;
  propertyBo.expireDate = editRecord.expireDate;
  propertyBo.fileCount = editRecord.fileCount;
  propertyBo.handoverDate = editRecord.handoverDate;
  propertyBo.handoverPerson = editRecord.handoverPerson;
  propertyBo.name = editRecord.name;
  propertyBo.original = editRecord.original;
  propertyBo.signDate = editRecord.signDate;
  propertyBo.type = editRecord.type;
  return submitTemplate;
}

// 构建跳转到审批详情页面的函数,approval为是否展示审批按钮
export function getJumpAprovedDetail(record, approval = 'hidden', queryType) {
  const needParams = [
    'taskStartDate',
    'taskTimeLimit',
    'id',
    'taskId',
    'creditReviewRecordId',
    'productCode',
    'nodeId',
    'procConfVersionId',
    'ssn',
    'applicantId',
    'applicationId',
    'type',
    'mobilePhone',
    'applicantName',
    'startTime',
    'endTime',
    'routerType', //用于审批中心区别页面来源
  ];

  if (record.reviewName) {
    needParams.push('reviewName');
  }

  let paramsArray = [];

  needParams.forEach(item => {
    paramsArray.push(item + '=' + encodeURIComponent(Base64.encode(record[item])));
  });
  localStorage.setItem('applicantName', record.applicantName);

  const additional = {
    approval,
    queryType,
  };

  Object.keys(additional).forEach(key => {
    paramsArray.push(key + '=' + encodeURIComponent(Base64.encode(additional[key])));
  });

  return `?${paramsArray.join('&')}`;
}

/*
 * 构造label Info的格式 返回格式为[{title:"xxx",value:'XX'}]
 * 主要用于三方数据 京东、公积金社保之类的地方
 */
export function constructBasicInfo(configInfo = [], dataInfo = {}) {
  if (_.isEmpty(dataInfo) || _.isEmpty(configInfo)) {
    return [];
  }

  const result = configInfo.reduce((pre, next) => {
    let value = dataInfo[next.key];
    if (value || value === 0 || value === false) {
      value = valueToLabeInfo(next, value);
    } else {
      value = '-';
    }
    const item = {
      title: next.title,
      value,
      merge: next.merge ? true : false,
      isJumbAddress: next.isJumbAddress ? true : false,
    };
    pre.push(item);
    return pre;
  }, []);
  return result;
}

/*
 * 用于延迟操作
 */
export function sleep(delay = 1) {
  let start = new Date().getTime();
  while (new Date().getTime() - start < delay) {
    continue;
  }
}

export function downloadAll(urls) {
  for (let url of urls) {
    downloadFile(url);
  }
}

async function downloadFile(url) {
  const URL = window.URL;
  const request = new Request(url);
  const response = await fetch(request, { mode: 'cors' });
  const blobUrl = URL.createObjectURL(await response.blob());
  const link = document.createElement('a');
  const fileName = url
    .split('/')
    .pop()
    .split('?')[0];
  link.href = blobUrl;
  link.setAttribute('download', fileName);
  link.click();
  URL.revokeObjectURL(blobUrl);
}

export function checkUrlIfImage(url) {
  return url.match(/\.(jpeg|jpg|gif|png|webp)/) != null;
}

export function limitDecimals(value) {
  const reg = /^(\d+)\.(\d{2}).*$/;

  if (typeof value === 'string') {
    return !isNaN(Number(value)) ? value.replace(reg, '$1.$2') : '';
  } else if (typeof value === 'number') {
    return !isNaN(value) ? String(value).replace(reg, '$1.$2') : '';
  } else {
    return '';
  }
}

export function isJSON(jsonstr) {
  if (typeof jsonstr === 'string') {
    try {
      var obj = JSON.parse(jsonstr);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}

export function getPropsFromUrlParams(search) {
  const searchParams = qs.parse(search);

  let result = {};
  Object.keys(searchParams).forEach(key => {
    let v = null;
    try {
      v = Base64.decode(decodeURIComponent(searchParams[key]));
    } catch (e) {}
    if (v === '') {
      v = searchParams[key];
    }
    if (v && v !== 'null' && v !== 'undefined') {
      result[key] = v;
    }
  });
  return result;
}

export const convertObj2ValueLabelOption = obj => {
  return Object.keys(obj).map(key => ({
    value: key,
    label: obj[key],
  }));
};

export function convertObj2Options(obj) {
  return obj
    .filter(val => val !== undefined)
    .map(label => {
      return { label, value: label };
    });
}

export function getJumpToDetailPage(productCode) {
  // 腾铭惠商
  if (productCode === 'TF-SCF-XRGXDCO-019728-02') {
    return '/newApprovelCenter/common';
  } else {
    return '/newApprovelCenter/commercialLoans/requisition';
  }
}

export function getJumpToListPage(routerName, applicationId) {
  return `/newApprovelCenter/${routerName}/${applicationId}`;
}

// 从图片路径里面获取图片名
export function getImageNameFromPath(pathName) {
  if (typeof pathName !== 'string') return '';
  const reg = /\/((\w|[\u4E00-\u9FA5]|-|_)+\.(png|jpg|gif|jpeg))/i;
  if (!Array.isArray(decodeURIComponent(pathName).match(reg))) return '-';
  return decodeURIComponent(pathName).match(reg)[1];
}

export function getActorStatus(status) {
  switch (status) {
    case 1:
      return formatMessage({ id: 'black' });
    case 2:
      return formatMessage({ id: 'ash' });
    case 4:
      return formatMessage({ id: 'white' });
    default:
      return null;
  }
}
