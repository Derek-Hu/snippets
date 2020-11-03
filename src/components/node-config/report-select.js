import { formatMessage } from '~/locale-tools';
import { List, Checkbox, Icon, Input, Button } from 'antd';
import React from 'react';

const EmptyHolder = formatMessage({ id: 'pitera-meet-a-condition-no-qualified' });

export default class ReportInput extends React.Component {
  state = {};

  reset = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange([]);
    }
  };

  onReportChange = ({ type }) => {
    const { onChange, value } = this.props;
    const res = Array.isArray(value) ? value : [];

    const idx = res.indexOf(type);
    if (idx !== -1) {
      res.splice(idx, 1);
    } else {
      res.push(type);
    }
    if (onChange) {
      onChange(res);
    }
  };

  onSearchReport = e => {
    const value = e.target.value;
    if (!value || value.trim() === '') {
      this.setState({
        filter: null,
      });
      return;
    }
    this.setState({
      filter: value.trim(),
    });
  };

  render() {
    const { filter } = this.state;
    let { settings = [], value = [] } = this.props;
    const isFilterExist = filter !== null && filter !== undefined;
    const filterItems = isFilterExist
      ? (settings || []).filter(report => new RegExp(filter).test(report.name + report.source))
      : settings;
    const filtedReports = isFilterExist && !filterItems.length ? [EmptyHolder] : filterItems;

    return (
      <>
        <List
          style={{
            border: '1px solid #d9d9d9',
            borderBottom: 0,
            paddingRight: '2em',
          }}
        >
          <List.Item style={{ paddingLeft: 0 }}>
            <Button type="link" onClick={this.reset}>
              {formatMessage({ id: 'empty-1' })}
            </Button>
            <Input
              placeholder={formatMessage({ id: 'enter-search-content' })}
              onChange={this.onSearchReport}
              suffix={<Icon type="search" />}
            />
          </List.Item>
        </List>
        <List
          itemLayout="horizontal"
          bordered={true}
          dataSource={filtedReports}
          style={{ maxHeight: '420px', minHeight: '220px', overflow: 'scroll' }}
          renderItem={report => (
            <>
              {report === EmptyHolder ? (
                <p style={{ padding: '15px' }}>{EmptyHolder}</p>
              ) : (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Checkbox
                        checked={value.indexOf(report.type) !== -1}
                        onChange={() => this.onReportChange(report)}
                      ></Checkbox>
                    }
                    title={report.name}
                    description={formatMessage({ id: 'data-source-1' }) + report.source}
                  />
                </List.Item>
              )}
            </>
          )}
        />
      </>
    );
  }
}
