import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Button } from 'antd';
import v2Style from './v2.module.less';

export default class extends Component {
  render() {
    const { switchTab, selectedTab } = this.props;
    if (selectedTab !== 'edit' && selectedTab !== 'template') {
      return null;
    }
    return (
      <div className={v2Style.tab}>
        <Button type={selectedTab === 'edit' ? 'primary' : ''} onClick={() => switchTab('edit')}>
          {formatMessage({ id: 'editing-process' })}
        </Button>
        <Button type={selectedTab === 'template' ? 'primary' : ''} onClick={() => switchTab('template')}>
          {formatMessage({ id: 'select-template' })}
        </Button>
      </div>
    );
  }
}
