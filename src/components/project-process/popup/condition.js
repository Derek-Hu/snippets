import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import { Modal, Form, Select } from 'antd';
import styles from './style.module.less';
import { convertObj2ValueLabelOption } from '~/utils/common';
import ControlForm, { renderItem } from '~/components/control-form/index';

const { Option } = Select;

const PolicyOption = {
  POLICY: {
    label: formatMessage({ id: 'rule' }),
    children: {
      POLICY_PASS: formatMessage({ id: 'adopt' }),
      POLICY_REJECT: formatMessage({ id: 'refuse' }),
      POLICY_TOMAN: formatMessage({ id: 'conversion-to-artificial-labor' }),
      POLICY_FRAUD: formatMessage({ id: 'anti-fraud' }),
    },
  },
};
const AntiOption = {
  ANTIFRAUD: {
    label: formatMessage({ id: 'anti-fraud-1' }),
    children: {
      ANTIFRAUD_PASS: formatMessage({ id: 'adopt' }),
      ANTIFRAUD_REJECT: formatMessage({ id: 'refuse' }),
    },
  },
};
const TaskOption = {
  CONTRACT: {
    label: formatMessage({ id: 'sign-up' }),
    children: {
      CONTRACT_PASS: formatMessage({ id: 'confirmation-of-contract-signing' }),
      CONTRACT_REJECT: formatMessage({ id: 'cancel-the-contract' }),
    },
  },
};

const TelephoneOption = {
  REVIEW_TELEPLHONE: {
    label: formatMessage({ id: 'electronuclear' }),
    children: {
      REVIEW_TELEPLHONE_PASS: formatMessage({ id: 'adopt' }),
      REVIEW_TELEPLHONE_REJECT: formatMessage({ id: 'refuse' }),
      REVIEW_TELEPLHONE_CANCEL: formatMessage({ id: 'cancel' }),
      REVIEW_TELEPLHONE_FRAUD: formatMessage({ id: 'fake-anti-fraud-from' }),
    },
  },
};

const ApproveFirstOption = {
  REVIEW_FIRST: {
    label: formatMessage({ id: 'preliminary-examination' }),
    children: {
      REVIEW_FIRST_PASS: formatMessage({ id: 'adopt' }),
      REVIEW_FIRST_REJECT: formatMessage({ id: 'refuse' }),
      REVIEW_FIRST_CANCEL: formatMessage({ id: 'cancel' }),
      REVIEW_FIRST_FRAUD: formatMessage({ id: 'trial-of-the-first-instance-fake-transfer-of' }),
      REVIEW_FIRST_POLICY: formatMessage({ id: 'trial-of-the-first-instance-rules-for-transfer' }),
    },
  },
};
const ApproveFinalOption = {
  REVIEW_FINAL: {
    label: formatMessage({ id: 'final-judgment' }),
    children: {
      REVIEW_FINAL_PASS: formatMessage({ id: 'adopt' }),
      REVIEW_FINAL_REJECT: formatMessage({ id: 'refuse' }),
      REVIEW_FINAL_CANCEL: formatMessage({ id: 'cancel' }),
      REVIEW_FINAL_FRAUD: formatMessage({ id: 'last-instance-fake-transfer-of' }),
    },
  },
};
const MortgageOption = {
  MORTGAGE: {
    label: formatMessage({ id: 'mortgage-1' }),
    children: {
      REVIEW_FINAL_PASS: formatMessage({ id: 'adopt' }),
      REVIEW_FINAL_REJECT: formatMessage({ id: 'refuse' }),
      REVIEW_FINAL_CANCEL: formatMessage({ id: 'cancel' }),
    },
  },
};
const OperationVerificationOption = {
  OPERATION_VERIFICATION: {
    label: formatMessage({ id: 'operation-verification' }),
    children: {
      REVIEW_FINAL_PASS: formatMessage({ id: 'adopt' }),
      REVIEW_FINAL_REJECT: formatMessage({ id: 'refuse' }),
      REVIEW_FINAL_CANCEL: formatMessage({ id: 'cancel' }),
    },
  },
};
const NodeTypeOption = {
  rule: PolicyOption,
  task: TaskOption,
  first: ApproveFirstOption,
  final: ApproveFinalOption,
  phone: TelephoneOption,
  anti: AntiOption,
  mortgage: MortgageOption,
  operationVerification: OperationVerificationOption,
  approve: {
    ...ApproveFirstOption,
    ...ApproveFinalOption,
  },
};
export const OptionMap = {
  ...ApproveFirstOption,
  ...ApproveFinalOption,
  ...TelephoneOption,
  ...AntiOption,
  ...PolicyOption,
  ...TaskOption,
  ...MortgageOption,
  ...OperationVerificationOption,
};

const generateOptions = item =>
  item.map(({ value, label }) => (
    <Option key={value} value={value}>
      {label}
    </Option>
  ));

export default class ConditionPopup extends Component {
  onCancel = () => {
    this.props.onClose && this.props.onClose();
  };

  onCreate = async () => {
    this.formRef.validateFields((err, values) => {
      if (err) {
        return;
      }

      const { lineType } = values;
      const result = lineType === 'lineReject' ? { lineType: 'lineReject' } : values;

      this.props.onConfirm && this.props.onConfirm(result);
      this.props.onClose && this.props.onClose();
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

  getSettings = ({ category }, LevelOneOptions) => {
    return [
      {
        key: 'category',
        component: [
          Select,
          {
            placeholder: formatMessage({ id: 'upper-strata-panel-point-select-the' }),
            style: { width: '100%' },
            children: generateOptions(LevelOneOptions),
          },
        ],
        decorator: {
          rules: [{ required: true }],
        },
      },
      {
        key: 'condition',
        component: [
          Select,
          {
            placeholder: formatMessage({ id: 'select-the-corresponding-result' }),
            style: { width: '100%' },
            children: generateOptions(
              OptionMap[category] ? convertObj2ValueLabelOption(OptionMap[category].children) : []
            ),
          },
        ],
        decorator: {
          rules: [{ required: true }],
        },
      },
    ];
  };

  render() {
    const { visible, position, initialValue } = this.props;
    const { x, y } = position || {};
    const pos = position ? { position: 'absolute', left: x + 'px', top: y + 'px' } : null;

    const { preNode } = this.props;
    const { _val, type } = preNode || {};
    const val = _val || {};

    const optionCategory = type === 'approve' ? val.attribute : type;

    const ValidOptionMap = optionCategory in NodeTypeOption ? NodeTypeOption[optionCategory] : OptionMap;
    // debugger;
    const LevelOneOptions = Object.keys(ValidOptionMap).map(key => ({
      value: key,
      label: ValidOptionMap[key].label,
    }));

    return (
      <Modal
        visible={visible}
        mask={false}
        style={pos}
        centered={false}
        className={styles.conditionModal}
        onCancel={this.onCancel}
        onOk={this.onCreate}
        closable={false}
        width={240}
      >
        <ControlForm
          getSettings={d => this.getSettings(d, LevelOneOptions)}
          data={initialValue}
          render={this.renderFields}
        ></ControlForm>
      </Modal>
    );
  }
}
