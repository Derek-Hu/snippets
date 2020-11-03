import * as React from 'react';
import { Input, Select, Cascader, DatePicker } from 'antd';
const { ONE_ADDRESS_DATA } = window as any;

const { Option } = Select;

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function renderComponent(field) {
  switch (field.fieldType) {
    case 'DATE':
      return [DatePicker, {
        placeholder: field.label,
      }];
    case 'ENUM':
      return [Select, {
        placeholder: field.label,
        children: (field.options || []).map(({ name, value }) => <Option value={value} key={value}>
          {name}
        </Option>),
      }];
    default: return [Input, {
      placeholder: field.label,
    }];
  }
}

export function getDynamicSettings(fields, result) {
  const settings = fields.map(field => {
    if (field.fieldType === 'ADDRESS') {
      const detailAddressLabel = field.label.indexOf('地址') !== -1 ? field.label.replace(/地址/, '详细地址') : `${field.label}详细地址`;
      return ([{
        key: field.name,
        fieldType: field.fieldType,
        props: {
          label: field.label,
        },
        component: [Cascader, {
          placeholder: field.label,
          options: ONE_ADDRESS_DATA,
          onChange: (value) => {
            return {
              province: value[0],
              city: value[1],
              district: value[2]
            }
          }
        }],
        decorator: {
          rules: [
            {
              required: field.isRequired,
              message: '请填写地址'
            },
          ],
        },
      }, {
        key: `${field.name}__detailedAddress__`,
        fieldType: field.fieldType,
        props: {
          label: detailAddressLabel,
        },
        component: [Input, {
          placeholder: detailAddressLabel,
        }],
        decorator: {
          rules: [
            {
              required: field.isRequired,
              message: '请填写详细地址'
            },
          ],
        },
      },])
    }
    return ({
      key: field.name,
      fieldType: field.fieldType,
      props: {
        label: field.label,
      },
      component: renderComponent(field),
      decorator: {
        rules: field.fieldType === 'ENUM' || field.fieldType === 'DATE' ?
          [{
            required: field.isRequired,
            message: '请选择'
          }] :
          [{
            required: field.isRequired,
            message: '请填写'
          },
          {
            pattern: field.extInfo && field.extInfo.regex && new RegExp(field.extInfo.regex, "g"),
            message: '格式有误，请重新输入'
          }],
      },
    })
  });
  return flatten(settings);
};