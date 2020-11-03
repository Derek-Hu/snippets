import React from 'react';
import { Descriptions, Table, Tabs } from 'antd';
import ColumnConvert from '~/utils/column-convert';
import { formatTime } from '~/utils/time';
import { numberFormat } from '~/utils/numberFormat';
import DetailPanel from '~/components/detail-pannel/index';

const { TabPane } = Tabs;
const EmptyValue = '-';

const isList = val => {
  return val.fieldType === 'List';
};
const isObject = val => {
  return val.fieldType === 'Object' || val.fieldType === 'Invented';
};
const isComplexVal = val => {
  return isList(val) || isObject(val);
};
const isTab = val => {
  return val && isList(val) && (val.tabFlag === '1' || val.tabFlag === 1 || val.tabFlag === true);
};
const isWrapperLayer = val => {
  return Object.keys(val).every(key => isComplexVal(val[key]));
};

const renderDataValue = (fieldType, value) => {
  switch (fieldType) {
    case 'Integer':
    case 'Double':
    case 'BigDecimal':
    case 'BigInteger':
    case 'Float':
    case 'Long':
      return numberFormat(value);
    case 'Date.Long':
      return formatTime(value);
    case 'LocalDateTime':
    case 'LocalDate':
    case 'YearMonth':
    case 'Date':
    default:
      return value;
  }
};

const renderSection = (current, schemas, self, sectionData) => {
  const section = schemas[current];
  if (!section) {
    return null;
  }

  if (self && isTab(self)) {
    const isEmpty = !sectionData || !sectionData.length;
    const sData = isEmpty ? [{}] : sectionData;
    const tabName = self.tabTitleField.replace(/.*\./, '');
    const matches = self.tabTitleField.match(/(.*)\./, '');
    const prePath = matches ? matches[1] : '';
    const defaultTabName = schemas[prePath][tabName].fieldDesc;
    return (
      <Tabs defaultActiveKey={0}>
        {sData.map((tabData, index) => {
          return (
            <TabPane tab={sData.length === 1 ? defaultTabName : tabData[tabName]} key={index}>
              {renderSection(current, schemas, { ...self, fieldType: 'Object', tabFlag: null }, tabData)}
            </TabPane>
          );
        })}
      </Tabs>
    );
  }
  if (self && isList(self)) {
    return renderTable(current, schemas, self, sectionData);
  }
  const keys = Object.keys(section);
  if (isWrapperLayer(section)) {
    return keys.map(key => {
      const path = current === '' ? key : [current, key].join('.');
      return renderSection(path, schemas, section[key], sectionData ? sectionData[key] : null);
    });
  }

  const complexKeys = keys.filter(key => isComplexVal(section[key]));
  const simpleKeys = keys.filter(key => !isComplexVal(section[key]));
  const title = self ? self.fieldDesc : '';
  const complexSections = [];

  if (simpleKeys && simpleKeys.length) {
    complexSections.push(
      <DetailPanel title={title}>
        <Descriptions>
          {simpleKeys.map(key => (
            <Descriptions.Item key={key} label={section[key].fieldDesc}>
              {sectionData ? renderDataValue(section[key].fieldType, sectionData[key]) : EmptyValue}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </DetailPanel>
    );
  }

  if (complexKeys && complexKeys.length) {
    complexKeys.forEach(key => {
      const path = current === '' ? key : [current, key].join('.');
      complexSections.push(renderSection(path, schemas, section[key], sectionData ? sectionData[key] : null));
    });
  }

  return complexSections;
};

const renderTable = (current, schemas, self, sectionData) => {
  const section = schemas[current];
  if (!section) {
    return null;
  }
  const columnSettings = { column: {} };

  const complexKeys = [];
  Object.keys(section).forEach(key => {
    if (isComplexVal(section[key])) {
      complexKeys.push(key);
      return;
    }
    columnSettings.column[key] = section[key].fieldDesc;
  });

  columnSettings.render = (value, key) => {
    return renderDataValue(section[key].fieldType, value);
  };

  const expandedRowRender = complexKeys.length
    ? {
        expandedRowRender: record => {
          return complexKeys.map(key => {
            const path = current === '' ? key : [current, key].join('.');
            return renderSection(path, schemas, section[key]);
          });
        },
      }
    : null;

  const columns = ColumnConvert(columnSettings);
  return (
    <DetailPanel title={self.fieldDesc}>
      <Table {...expandedRowRender} columns={columns} pagination={false} dataSource={sectionData} />
    </DetailPanel>
  );
};

export default props => {
  const { data, settings } = props;
  const { schemas, root } = settings || {};
  if (!schemas) {
    return null;
  }
  return renderSection(root, schemas, null, data);
};
