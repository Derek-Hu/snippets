import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Card, Icon, Button, message } from 'antd';
import processStyles from './process.module.less';
import { removeTemplate } from '~/services/sys-manage';
import ModalContainer from '~/components/modal-container/index';

export default class ProcessTemplate extends Component {
  removeTemplateById = async () => {
    const { item, reloadData } = this.props;
    await removeTemplate({
      id: item.id,
    });
    message.success(formatMessage({ id: 'template-deleted-successfully' }));
    setTimeout(async () => {
      await reloadData();
    });
  };

  render() {
    const { selected, deleteEnable, onClick, item } = this.props;
    const extra = selected ? (
      <span>
        &nbsp;
        <Icon type="check" />
      </span>
    ) : (
      <span>&nbsp;</span>
    );
    return (
      <div className={processStyles.cardWpr} style={{ position: 'relative' }}>
        <Card
          className={processStyles.card + ' ' + (selected ? 'selected' : '')}
          hoverable
          title={item.workflowModuleName}
          onClick={onClick}
          actions={[
            <ModalContainer
              className={processStyles.modalContainer}
              footer={null}
              width={1000}
              title={item.workflowModuleName}
              toggole={<Button type="link">{formatMessage({ id: 'details-2' })}</Button>}
            >
              <img style={{ width: '100%' }} alt={item.workflowModuleName} src={item.img} />
            </ModalContainer>,
          ]}
          extra={extra}
        >
          <img alt={item.workflowModuleName} src={item.img} />
        </Card>
        {deleteEnable ? (
          <div
            className={processStyles.removeWpr}
            style={{
              position: 'absolute',
              top: '1em',
              right: '2em',
              padding: '1em',
              cursor: 'pointer',
            }}
          >
            <ModalContainer
              title={formatMessage({ id: 'delete-template' })}
              onOk={this.removeTemplateById}
              toggole={<span style={{ color: 'red' }}>{formatMessage({ id: 'delete' })}</span>}
            >
              <p>
                {formatMessage({ id: 'delete-affirm-it-cannot' })}
                {item.workflowModuleName}
                {formatMessage({ id: 'is-that-right-1' })}
              </p>
            </ModalContainer>
          </div>
        ) : null}
      </div>
    );
  }
}

export class BlankTemplate extends Component {
  static id = 'BlankTemplate';

  render() {
    const { selected, onClick } = this.props;
    return (
      <Card
        hoverable
        onClick={onClick}
        className={processStyles.card + ' ' + (selected ? 'selected' : '')}
        extra={<Icon type="check" />}
        title={formatMessage({ id: 'template' })}
        actions={[<Button type="link">&nbsp;</Button>]}
      >
        {formatMessage({ id: 'new-blank-process' })}
      </Card>
    );
  }
}
