import React from 'react';
import ControlForm, { renderItem } from '~/components/control-form/index';
import { Form, Input, Icon, Button, Select } from 'antd';

describe('动态表单', () => {
  it('动态表单 用法', () => {
    const TypeKeys = ['a', 'b'];
    const EmptyTypeKeys = ['empty'];

    const TypeKeyOptions = [
      <Option key={'a'} value={'a'}>
        A
      </Option>,
      <Option key={'b'} value={'b'}>
        B
      </Option>,
    ];
    const EmptyOptions = [
      <Option key={'empty'} value={'empty'}>
        Empty
      </Option>,
    ];
    const getSettings = ({ username, type }) => {
      return [
        {
          key: 'username',
          component: [
            Input,
            {
              prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />,
              placeholder: 'Username',
              id: 'username',
            },
          ],
          props: {},
          decorator: {
            validateFirst: true,
            rules: [
              { required: true, message: 'Please input your Username!' },
              { max: 20, message: 'Please input your max!' },
              { type: 'email', message: 'Please input your email!' },
            ],
          },
        },
        {
          key: 'password',
          component: [
            Input,
            {
              id: 'password',
              type: 'password',
              prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
              placeholder: 'Password',
            },
          ],
          hidden: username === 'lint',
          decorator: {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{ required: username === 'hubenlv', message: 'Please input your password!' }],
          },
        },
        {
          key: 'type',
          props: {
            label: 'Type',
          },
          component: [
            Select,
            {
              children: username === 'hubenlv' ? TypeKeyOptions : EmptyOptions,
            },
          ],
          cascaderValue() {
            const options = username === 'hubenlv' ? TypeKeys : EmptyTypeKeys;
            if (options.indexOf(type) === -1) {
              return undefined;
            }
            return type;
          },
          decorator: {
            rules: [{ required: true }],
          },
        },
      ];
    };

    let formInstance;
    const renderFields = (fields, formInstance) => {
      formInstance = formInstance;
      const formItems = fields.map(field => {
        const { key, props } = field;
        return (
          <Form.Item key={key} {...props}>
            {renderItem(field, formInstance)}
          </Form.Item>
        );
      });
      return (
        <Form>
          {formItems}
          <Button className="submitBtn">提交</Button>
          <table></table>>
        </Form>
      );
    };

    const data = {
      username: 'hubenlv2',
    };

    const onValuesChange = jest.fn();

    const wrapper = mount(
      <ControlForm
        onValuesChange={onValuesChange}
        getSettings={getSettings}
        data={data}
        render={renderFields}
      ></ControlForm>
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('input#username').simulate('change', { target: { value: 'hubenlv' } });

    expect(wrapper.find('.ant-form-explain'));

    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });
    wrapper.find('input#password').simulate('change', { target: { value: '' } });

    expect(!!wrapper.find('.ant-form-explain')).toBe(true);

    expect(onValuesChange).toBeCalled();

    wrapper.find('form button.submitBtn').simulate('click');
  });
});
