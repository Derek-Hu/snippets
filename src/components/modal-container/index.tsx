import * as React from 'react';
import { Modal, Button } from 'antd';
import { ModalFuncProps } from 'antd/lib/modal';

interface IProps extends ModalFuncProps {
  onClick?: (...any: any) => any;
  ref?: React.RefObject<any>;
  toggole?: React.ReactNode;
  funcText?: string;
  footer?: React.ReactNode;
  onFunc?: (...any: any) => any;
}
type TInterceptor = (...any: any) => any;
export default class ModalContainer extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = { visible: false, loading: false };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // 暴露出去的接口，勿删
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = async () => {
    const { onCancel } = this.props;
    if (typeof onCancel === 'function') {
      await onCancel();
    }
    this.setState({
      visible: false,
    });
  };

  isShowModal = async (interceptor: TInterceptor | undefined) => {
    if (typeof interceptor !== 'function') {
      this.showModal();
      return;
    }

    const isShow = await interceptor();
    if (isShow !== false) {
      this.showModal();
    }
  };
  handelOK = async () => {
    const { onOk } = this.props;
    if (typeof onOk === 'function') {
      this.setState({
        loading: true,
      });
      try {
        const close = await onOk();
        this.setState({
          visible: close === false,
          loading: false,
        });
      } catch (e) {
        this.setState({
          loading: false,
        });
        throw new Error(e);
      }
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  footers = () => {
    const { cancelText, okText, funcText, onFunc } = this.props;
    return [
      <Button key="cancel" onClick={this.handleCancel}>
        {cancelText || 'Cancel'}
      </Button>,
      funcText ? (
        <Button key="function" onClick={onFunc}>
          {funcText}
        </Button>
      ) : null,
      <Button key="ok" type="primary" onClick={this.handelOK}>
        {okText || 'OK'}
      </Button>,
    ];
  };

  render() {
    const { children, toggole, onClick, style, className, ...rest } = this.props;
    const { visible, loading } = this.state;

    return (
      <>
        <div
          style={style}
          className={className}
          onClick={e => {
            e.stopPropagation();
            this.isShowModal(onClick);
          }}
        >
          {toggole}
        </div>
        <Modal
          confirmLoading={loading}
          {...rest}
          visible={visible}
          onCancel={this.handleCancel}
          onOk={this.handelOK}
          footer={this.footers()}
        >
          {children}
        </Modal>
      </>
    );
  }
}
