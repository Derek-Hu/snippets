import React from 'react';
import { WrappedFormUtils, GetFieldDecoratorOptions } from 'antd/lib/form/Form';

export interface IFormItem<T = string> {
  key: T;
  props?: {
    [key: string]: any;
  };
  component: React.ReactNode | [React.ReactNode, { [key: string]: any }];
  decorator?: GetFieldDecoratorOptions;
  hidden?: boolean;
  cascaderValue?: (value: any) => any;
}

export interface ISettings<T, U = string> {
  settings: (values: object) => IFormItem<U>[];
  data?: T;
  render: (fields: IFormItem<U>[], form: WrappedFormUtils<T>, data: T) => React.ReactNode;
  onValuesChange: (data: T) => any;
  validateMessages: object;
}
