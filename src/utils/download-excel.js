import { formatMessage } from '~/locale-tools';

const URL = window.URL;

/*
 *模拟a标签点击事件
 */
function saveAs(obj, fileName) {
  const tmpa = document.createElement('a');
  tmpa.download = fileName || formatMessage({ id: 'download' });
  tmpa.href = URL.createObjectURL(obj);
  tmpa.click();
  setTimeout(function() {
    URL.revokeObjectURL(obj);
  }, 100);
}
/*
 *计算行标
 */
function getCharCol(n) {
  let [s, m] = ['', '', 0];
  while (n >= 0) {
    m = (n % 26) + 1;
    s = String.fromCharCode(m + 64) + s;
    n = (n - m) / 26;
  }
  return s;
}
/*
 *得到标号
 */
function s2ab(s) {
  if (typeof ArrayBuffer !== 'undefined') {
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  let buf = new Array(s.length);
  for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

/*
 * 生成报表文件
 */
function creactExcel(reportData, outputPos, fileName) {
  let tmpWB = {
    SheetNames: ['sheet1'],
    Sheets: {
      sheet1: Object.assign({}, reportData, {
        '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1],
      }),
    },
  };
  let tmpDown = new Blob(
    [
      s2ab(
        window.XLSX.write(tmpWB, {
          bookType: 'xlsx',
          bookSST: false,
          type: 'binary',
        })
      ),
    ],
    {
      type: '',
    }
  );
  saveAs(tmpDown, `${fileName}.xlsx`);
}

/*
*下载文件
*数据格式const jsono = {
      reportTitle:'审批中的借款明细：2013-03-01 00:00:00 至 2018-06-08 23:59:59',
      dataTitle: ['借款申请编号', '客户名称', '产品代码', '产品类型'],
      dataResult: [['1', '2', '3', '4']]
    };
*/
export function downloadExcel(jsonData, fileName) {
  //  定义基本样式
  const baseStyle = {
    alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
  };
  // 定义标题样式
  const titleStyle = { font: { sz: 14, bold: true }, ...baseStyle };
  // 定义excel数据array
  let reportData = [];
  // 添加表头
  reportData.A1 = {
    v: jsonData.reportTitle,
  };

  //  添加excel数据的标题
  jsonData.dataTitle.map((value, index) => {
    const position = (index > 25 ? `${getCharCol(index)}` : String.fromCharCode(65 + index)) + 2;
    reportData[position] = { v: value };
    reportData[position].s = titleStyle;
  });
  //  添加表格数据
  jsonData.dataResult.map((colmunArray, colmunIndex) => {
    colmunArray.map((value, index) => {
      const position = (index > 25 ? `${getCharCol(index)}` : String.fromCharCode(65 + index)) + (colmunIndex + 3);
      reportData[position] = { v: value };
      reportData[position].s = baseStyle;
    });
  });

  const extraCellIndex = jsonData.dataResult.length + 1;

  // 得到表格的key
  let outputPos = Object.keys(reportData);

  // 设置合并的单元格数量
  const mergeCount = jsonData.dataTitle.length;
  reportData['!merges'] = [
    {
      s: { c: 0, r: 0 },
      e: { c: mergeCount, r: 0 },
    },
    {
      s: { c: 0, r: extraCellIndex },
      e: { c: 1, r: extraCellIndex },
    },
  ];
  // 定义格子的宽度
  reportData['!cols'] = new Array(mergeCount + 1).fill({
    wpx: 170,
  });
  //  定义tile的样式
  reportData.A1.s = titleStyle;
  creactExcel(reportData, outputPos, fileName);
}

export function downloadSyntheticalExcel(selectRecords, selectKey) {
  let excelTitle = [
    formatMessage({ id: 'full-name-of-channel' }),
    formatMessage({ id: 'corresponding-platform' }),
    formatMessage({ id: 'file-category' }),
    formatMessage({ id: 'file-names' }),
    formatMessage({ id: 'loan-number' }),
    formatMessage({ id: 'filing-time' }),
    formatMessage({ id: 'filing-batch' }),
    formatMessage({ id: 'state' }),
  ];

  let contentKeys = ['componeyName', 'platform', 'type', 'name', 'lendId', 'date', 'batch', 'status'];
  // 用于台账页面下载excel选择不同的title
  if (selectKey === 'CHANNEL') {
    excelTitle = [
      formatMessage({ id: 'full-name-of-channel' }),
      formatMessage({ id: 'corresponding-platform' }),
      formatMessage({ id: 'file-category' }),
      formatMessage({ id: 'file-names' }),
      formatMessage({ id: 'is-it-original?' }),
      formatMessage({ id: 'number-of-documents' }),
      formatMessage({ id: 'loan-number' }),
      formatMessage({ id: 'contract-time' }),
      formatMessage({ id: 'due-time' }),
      formatMessage({ id: 'filing-time' }),
      formatMessage({ id: 'handover' }),
      formatMessage({ id: 'state' }),
      formatMessage({ id: 'whether-or-not-packing-list' }),
    ];

    contentKeys = [
      'componeyName',
      'platform',
      'type',
      'name',
      'original',
      'fileCount',
      'lendId',
      'signDate',
      'expireDate',
      'date',
      'handoverPerson',
      'status',
      'haveDoc',
    ];
  }
  // 用于台账签约类excel下载
  if (selectKey === 'CONTRACT') {
    excelTitle = [
      formatMessage({ id: 'file-number' }),
      formatMessage({ id: 'corresponding-platform' }),
      formatMessage({ id: 'channel-name' }),
      formatMessage({ id: 'file-status' }),
      formatMessage({ id: 'file-name' }),
      formatMessage({ id: 'contract-time' }),
      formatMessage({ id: 'due-time' }),
      formatMessage({ id: 'is-it-original?' }),
      formatMessage({ id: 'number-of-documents-1' }),
      formatMessage({ id: 'handover' }),
      formatMessage({ id: 'date-of-transfer' }),
      formatMessage({ id: 'upload-packing-list-1' }),
    ];
    contentKeys = [
      'id',
      'platform',
      'componeyName',
      'status',
      'name',
      'signDate',
      'expireDate',
      'original',
      'fileCount',
      'handoverPerson',
      'handoverDate',
      'haveDoc',
    ];
  }
  // 用于台账其他类excel下载
  if (selectKey === 'OTHERS') {
    excelTitle = [
      formatMessage({ id: 'file-number' }),
      formatMessage({ id: 'corresponding-platform' }),
      formatMessage({ id: 'channel-name' }),
      formatMessage({ id: 'file-status' }),
      formatMessage({ id: 'file-class' }),
      formatMessage({ id: 'file-name' }),
      formatMessage({ id: 'image-or-not' }),
      formatMessage({ id: 'registrar' }),
      formatMessage({ id: 'date-of-registration' }),
    ];
    contentKeys = ['id', 'platform', 'componeyName', 'status', 'type', 'name', 'haveDoc', 'oprateEmail', 'date'];
  }

  //  定义基本样式
  const baseStyle = {
    alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
  };
  // 定义标题样式
  const titleStyle = { font: { sz: 14, bold: true }, ...baseStyle };

  let reportData = [];
  //  添加excel数据的标题
  excelTitle.map((value, index) => {
    const position = (index > 25 ? `${getCharCol(index)}` : String.fromCharCode(65 + index)) + 1;
    reportData[position] = { v: value };
    reportData[position].s = titleStyle;
  });

  selectRecords.map((colmunArray, colmunIndex) => {
    contentKeys.map((key, index) => {
      const position = (index > 25 ? `${getCharCol(index)}` : String.fromCharCode(65 + index)) + (colmunIndex + 2);
      reportData[position] = { v: colmunArray[key] };
    });
  });

  let outputPos = Object.keys(reportData);
  // 定义各自的宽度
  reportData['!cols'] = new Array(200).fill({
    wpx: 100,
  });
  creactExcel(reportData, outputPos, formatMessage({ id: 'comprehensive-query-data-download' }));
}
