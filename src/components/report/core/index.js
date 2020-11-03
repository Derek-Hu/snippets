import React from 'react';
import { Row, Col, Form, Table } from 'antd';
import DetailPanel from '~/components/detail-pannel/index';
import { REPORT_SECTION_TYPE_CARD, REPORT_COLUMN_ERROR } from '~/constants/constant';

/**
 * 可复用报告模板
 */
@Form.create()
export default class ReportCore extends React.Component {
  getValue(category, value, key, data, index) {
    if (typeof category.render === 'function') {
      return category.render(value, key, data, index);
    }
    return value;
  }
  renderObect = (category, data) => {
    return (
      <Row>
        {Object.keys(category.column).map(key => (
          <Col key={key} span={8}>
            <span>{category.column[key]}：</span>
            {this.getValue(category, data[key], key, data)}
          </Col>
        ))}
      </Row>
    );
  };
  renderTable = (category, data) => {
    const column = Object.keys(category.column).map(key => {
      return {
        title: category.column[key],
        dataIndex: key,
        key: key,
        render: (text, record, index) => {
          try {
            return this.getValue(category, text, key, record, index);
          } catch (e) {
            console.log(e.message);
            if (e.message === REPORT_COLUMN_ERROR) {
              return this.props.renderColumn && this.props.renderColumn(record, key, category, text);
            }
            return text;
          }
        },
      };
    });
    return (
      <Table
        rowKey={category.rowKey}
        columns={column}
        pagination={category.pagination ? category.pagination : false}
        dataSource={data}
      />
    );
  };
  renderSection(category, data) {
    if (category.category === REPORT_SECTION_TYPE_CARD) {
      return this.renderObect(category, data || {});
    }
    return this.renderTable(category, data || []);
  }
  render() {
    const selectedReport = this.props.report || {};
    const LabelMapping = this.props.config;

    return (
      <div className={this.props.className}>
        {this.props.contentOnly
          ? this.renderSection(LabelMapping, selectedReport)
          : Object.keys(LabelMapping).map(category => (
              <DetailPanel key={category} title={LabelMapping[category].title}>
                {this.renderSection(LabelMapping[category], selectedReport[category])}
              </DetailPanel>
            ))}
      </div>
    );
  }
}
