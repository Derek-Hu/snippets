import React from 'react';
import { Select } from 'antd';
import { CURRENT_LANGUAGE } from '~/locale-tools';
const Option = Select.Option;

const localeProviderMap = {
  en: 'en',
  'en-US': 'en',
  zh: 'zh',
  'zh-CN': 'zh',
  th: 'th',
};

const handleChange = (value: string) => {
  localStorage.setItem('currentLanguage', value);
  window.location.reload();
};

// @ts-ignore
const defaultLanguage = localeProviderMap[CURRENT_LANGUAGE];

export default () => {
  return (
    <div>
      <Select defaultValue={defaultLanguage} style={{ width: 100 }} onChange={handleChange}>
        <Option value="zh">中文</Option>
        <Option value="en">English</Option>
        <Option value="th">ไทย</Option>
      </Select>
    </div>
  );
};
