import { formatMessage } from '~/locale-tools';
import { Form, List, Input, Select } from 'antd';
import React from 'react';
import styles from './style.module.less';
import ReportInput from './report-select';
import ModuleInput from './module-select';
import parseModule from './parseModule';
import ControlForm, { renderItem } from '~/components/control-form/index';

export default props => {
  const { name, type, modules, reports } = props;

  const formItemLayout = {
    labelAlign: 'left',
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  return (
    <Form layout="horizontal" {...formItemLayout} className={styles.root}>
      <Form.Item label={formatMessage({ id: 'name-name-of-the' })}>{name}</Form.Item>
      <Form.Item label={formatMessage({ id: 'type-of-personal-review' })}>{type}</Form.Item>
      <Form.Item label={formatMessage({ id: 'internal-audit' })}>{modules.join('、')}</Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <h2>{formatMessage({ id: 'details-of-tripartite-audit' })}</h2>
        <List
          itemLayout="horizontal"
          bordered={true}
          dataSource={reports}
          style={{ maxHeight: '420px', overflow: 'scroll' }}
          renderItem={report => (
            <List.Item>
              <List.Item.Meta title={report.name} description={report.source} />
            </List.Item>
          )}
        />
      </Form.Item>
    </Form>
  );
};

const { Option } = Select;
export const AttributesMap = {
  first: formatMessage({ id: 'preliminary-examination' }),
  final: formatMessage({ id: 'final-judgment' }),
  mortgage: formatMessage({ id: 'mortgage-1' }),
  anti: formatMessage({ id: 'anti-fraud-1' }),
  phone: formatMessage({ id: 'electronuclear' }),
  operationVerification: formatMessage({ id: 'operation-verification' }),
};

export const AttributesIdMap = {
  first: 'manualFirstReview',
  final: 'manualFinalReview',
  phone: 'telephoneReview',
  anti: '',
  mortgage: 'manualFinalReview',
  operationVerification: 'manualFinalReview',
};

const AttributeKeys = Object.keys(AttributesMap);

// export const TypesMap = {
// phone: formatMessage({ id: 'electronuclear' }),
// anti: formatMessage({ id: 'anti-fraud-1' }),
// };

// export const EmptyTypesMap = {
//   empty: formatMessage({ id: 'empty' }),
// };

// const TypeKeys = Object.keys(TypesMap);
// const EmptyTypeKeys = Object.keys(EmptyTypesMap);

// const EmptyOptions = EmptyTypeKeys.map(key => {
//   return (
//     <Option key={key} value={key}>
//       {EmptyTypesMap[key]}
//     </Option>
//   );
// });

// const TypeKeyOptions = TypeKeys.map(key => {
//   return (
//     <Option key={key} value={key}>
//       {TypesMap[key]}
//     </Option>
//   );
// });

const formItemLayout = {
  labelAlign: 'left',
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export class NodeConfig extends React.Component {
  getSettings = () => {
    const { definitions = {}, reports, allGroupInfos } = this.props;
    const { modules } = parseModule(definitions);
    return [
      {
        key: 'name',
        props: {
          label: formatMessage({ id: 'edit-name' }),
        },
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
        key: 'attribute',
        props: {
          label: formatMessage({ id: 'post' }),
        },
        component: [
          Select,
          {
            placeholder: formatMessage({ id: 'enter-a-name' }),
            style: { width: '100%' },
            children: AttributeKeys.map(key => {
              return (
                <Option key={key} value={key}>
                  {AttributesMap[key]}
                </Option>
              );
            }),
          },
        ],
        decorator: {
          rules: [{ required: true }],
        },
      },
      {
        key: 'candidateIds',
        props: {
          label: formatMessage({ id: 'permission-group' }),
        },
        component: [
          Select,
          {
            mode: 'multiple',
            placeholder: formatMessage({ id: 'please-choose' }),
            style: { width: '100%' },
            children: allGroupInfos.map(({ groupId, groupName }) => (
              <Option key={groupId} value={groupId}>
                {groupName}
              </Option>
            )),
          },
        ],
        decorator: {
          rules: [{ required: true }],
        },
      },
      {
        key: 'modules',
        props: {
          label: formatMessage({ id: 'edit-internal-audit' }),
        },
        component: [
          ModuleInput,
          {
            settings: modules,
          },
        ],
        decorator: {
          rules: [{ required: false }],
        },
      },
      {
        key: 'reports',
        props: {
          wrapperCol: { span: 24 },
        },
        component: [
          ReportInput,
          {
            settings: reports,
          },
        ],
      },
    ];
  };

  renderFields = (fields, formInstance) => {
    this.formRef = formInstance;
    const formItems = fields.map(field => {
      const { key, props } = field;
      return (
        <Form.Item key={key} {...props}>
          {key === 'reports' ? (
            <>
              <h2 style={{ margin: 0 }}>
                {formatMessage({ id: 'edit-examine-and-verify-detailed-information-edit' })}
              </h2>
              <p style={{ margin: 0, fontSize: '13px' }}>
                {formatMessage({ id: 'below-data-examine-and-verify-stage' })}
              </p>
            </>
          ) : null}
          {renderItem(field, formInstance)}
        </Form.Item>
      );
    });
    return (
      <Form layout="horizontal" {...formItemLayout} className={styles.root} hideRequiredMark={true}>
        {formItems}
      </Form>
    );
  };

  onValuesChange = allValues => {
    this.formData = allValues;
  };

  render() {
    const { initialValue } = this.props;

    return (
      <ControlForm
        getSettings={this.getSettings}
        data={initialValue}
        onValuesChange={this.onValuesChange}
        render={this.renderFields}
      ></ControlForm>
    );
  }
}
