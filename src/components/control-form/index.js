import { formatMessage } from '~/locale-tools';
import React, { Component } from 'react';
import AsyncValidator from 'async-validator';
import { Form } from 'antd';

const transformFriendlyData = data => {
  if (!data) {
    return {};
  }
  return Object.keys(data).reduce((all, key) => {
    all[key] = data[key].value;
    return all;
  }, {});
};
const transformData = data => {
  return data
    ? Object.keys(data).reduce((values, key) => {
        values[key] = { value: data[key] };
        return values;
      }, {})
    : {};
};
const getValidFields = (allFields, settings) => {
  const friendlyData = transformFriendlyData(allFields);
  const totalFields = settings(friendlyData);
  return { fields: totalFields ? totalFields.filter(f => f.hidden !== true) : null, friendlyData };
};
const validate = ({ fields, friendlyData, validateMessages }) => {
  const firstFields = [];
  const allRules = fields.reduce((all, field) => {
    const { key, decorator } = field;
    const { validateFirst, rules } = decorator || {};
    all[key] = rules || [];
    if (validateFirst) {
      firstFields.push(key);
    }
    return all;
  }, {});
  const validator = new AsyncValidator(allRules);
  if (validateMessages) {
    validator.messages(validateMessages);
  }
  return new Promise(resolve => {
    validator.validate(friendlyData, { firstFields }, errors => {
      const errorGroup = {};
      if (errors && errors.length) {
        errors.forEach(e => {
          const { field } = e;
          errorGroup[field] ? errorGroup[field].push(e) : (errorGroup[field] = [e]);
        });
      }
      resolve(errorGroup);
    });
  });
};
const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields, allFields) {
    const { settings, validateMessages } = props;
    const { friendlyData, fields } = getValidFields(allFields, settings);
    if (!fields) {
      return;
    }

    fields.forEach(field => {
      if (typeof field.cascaderValue === 'function') {
        const value = field.cascaderValue();
        friendlyData[field.key] = value;
        allFields[field.key].dirty = false;
        allFields[field.key].touched = true;
        allFields[field.key].value = value;
      }
    });
    validate({ fields, friendlyData, validateMessages }).then(errorGroup => {
      Object.keys(allFields).forEach(key => {
        if (allFields[key].touched) {
          // 曾经校验过，或者重新校验后不通过
          allFields[key].errors = errorGroup[key];
          allFields[key].dirty = false;
        }
      });
      props.onChange(allFields);
    });
  },
  mapPropsToFields(props) {
    const { settings, data } = props;
    if (typeof settings !== 'function') {
      throw new Error(formatMessage({ id: 'parameter-the-settings-parameter' }));
    }
    const { fields } = getValidFields(data, settings);
    if (!fields) {
      return;
    }
    return fields.reduce((allFormFields, field) => {
      const fieldData = data[field.key];
      allFormFields[field.key] = Form.createFormField({
        ...fieldData,
        value: fieldData && fieldData.value,
      });
      return allFormFields;
    }, {});
  },
  onValuesChange(props, changedValues, allValues) {
    props.onValuesChange(allValues, changedValues);
  },
})(props => {
  const { settings, data, render, form } = props;
  const { fields } = getValidFields(data, settings);
  const isFunction = typeof render === 'function';
  return isFunction ? render(fields, form, data) : null;
});
export const renderItem = (field, formInstance) => {
  const { getFieldDecorator } = formInstance;
  const { key, component, decorator } = field;
  const [Component, componentProps] = Array.isArray(component) ? component : [component];
  const { children } = componentProps || {};
  return getFieldDecorator(key, decorator)(<Component {...componentProps}>{children}</Component>);
};
export default class ControlForm extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      fieldValues: transformData(data),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
      this.setState({
        fieldValues: transformData(nextProps.data),
      });
    }
  }
  handleFormChange = changedFields => {
    this.setState(({ fieldValues }) => ({
      fieldValues: { ...fieldValues, ...changedFields },
    }));
  };
  onValuesChange = (allValues, changedValues) => {
    const { fieldValues } = this.state;
    const errorGroup = Object.keys(fieldValues).reduce((group, key) => {
      group[key] = fieldValues[key].errors;
      return group;
    }, {});

    this.props.onValuesChange && this.props.onValuesChange(allValues, errorGroup, changedValues);
  };
  render() {
    const { fieldValues } = this.state;
    const { getSettings, render, validateMessages } = this.props;
    return (
      <CustomizedForm
        render={render}
        settings={getSettings}
        data={fieldValues}
        validateMessages={validateMessages}
        onValuesChange={this.onValuesChange}
        onChange={this.handleFormChange}
      />
    );
  }
}
