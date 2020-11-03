import { formatMessage } from '~/locale-tools';
import React from 'react';
import { Empty, Spin } from 'antd';

export interface IStatus {
  error: boolean;
  loading: boolean;
  hasSearch: boolean;
}

export const InvokeStatus = 'InvokeStatus';

export const StatusDone: IStatus = {
  error: false,
  loading: false,
  hasSearch: true,
};

type UnPack<R> = R extends Promise<{ result: infer D }> ? D : R extends { result: infer D } ? D : never;

export const InvokerGenerator = (statusName: string) => {
  return <T extends (...any: any) => Promise<any>>(
    instance: React.Component<any>,
    Service: T,
    ...params: Parameters<T>
  ): Promise<UnPack<ReturnType<T>>> => {
    return new Promise(async resolve => {
      instance.setState({
        [statusName]: {
          loading: true,
          error: false,
          hasSearch: true,
        },
      });
      try {
        const resp = await Service(...params);
        resolve(resp.result);
        instance.setState({
          [statusName]: StatusDone,
        });
      } catch (e) {
        resolve();
        instance.setState({
          [statusName]: {
            error: true,
            loading: false,
            hasSearch: true,
          },
        });
      }
    });
  };
};

export const ContentWithLoading = (props: { invokeStatus?: IStatus; children: React.ReactNode }) => {
  const { invokeStatus, children } = props;
  const { error, loading = false, hasSearch } = invokeStatus || {};
  const isString = typeof error === 'string';

  return (
    <Spin spinning={loading} delay={200}>
      {error ? (
        <Empty
          style={{ paddingTop: '6em', margin: 0 }}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={isString ? error : formatMessage({ id: 'failed-to-load' })}
        />
      ) : hasSearch ? (
        children
      ) : null}
    </Spin>
  );
};
export default InvokerGenerator(InvokeStatus);
