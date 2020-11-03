import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
import styles from './style.module.less';
import ControlForm, { renderItem } from '~/components/control-form/index';

const getSettings = () => {
  return [
    {
      key: 'name',
      component: [
        Input,
        {
          placeholder: formatMessage({ id: 'enter-a-name' }),
          maxLength: 50,
        },
      ],
      decorator: {
        rules: [{ required: true }],
      },
    },
    {
      key: 'policyId',
      component: [
        Input,
        {
          placeholder: formatMessage({ id: 'enter-policy-id' }),
        },
      ],
      decorator: {
        rules: [{ required: true }],
      },
    },
  ];
};

export default class extends Component {
  onCancel = () => {
    this.props.onClose && this.props.onClose();
  };

  onCreate = () => {
    this.formRef.validateFields((err, values) => {
      if (!err) {
        this.props.onConfirm && this.props.onConfirm(values);
        this.props.onClose && this.props.onClose();
        return;
      }
    });
  };

  renderFields = (fields, formInstance) => {
    this.formRef = formInstance;
    const formItems = fields.map(field => {
      const { key, props } = field;
      return (
        <Form.Item key={key} {...props}>
          {renderItem(field, formInstance)}
        </Form.Item>
      );
    });
    return <Form layout="vertical">{formItems}</Form>;
  };

  render() {
    const { visible, position, initialValue } = this.props;
    const { x, y } = position || {};
    const pos = position ? { position: 'absolute', left: x + 'px', top: y + 'px' } : null;
    return (
      <Modal
        visible={visible}
        mask={false}
        style={pos}
        centered={false}
        className={styles.ruleModal}
        onCancel={this.onCancel}
        onOk={this.onCreate}
        closable={false}
        width={200}
      >
        <ControlForm getSettings={getSettings} data={initialValue} render={this.renderFields}></ControlForm>
      </Modal>
    );
  }
}
