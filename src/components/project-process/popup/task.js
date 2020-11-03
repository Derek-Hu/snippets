import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Modal, Form, Select } from 'antd';
import styles from './style.module.less';
import { convertObj2ValueLabelOption } from '~/utils/common';
import ControlForm, { renderItem } from '~/components/control-form/index';

const { Option } = Select;

const settings = {
  contractConfirm: formatMessage({ id: 'user-signing' }),
};

const options = convertObj2ValueLabelOption(settings);

const getSettings = () => {
  return [
    {
      key: 'task',
      component: [
        Select,
        {
          placeholder: formatMessage({ id: 'select-type' }),
          style: { width: '100%' },
          children: options.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          )),
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
        this.props.onConfirm && this.props.onConfirm(values, settings[values.task]);
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
