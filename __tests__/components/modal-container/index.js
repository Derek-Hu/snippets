import React from 'react';
import ModalContainer from '~/components/modal-container/index';

describe('弹窗组件', () => {
  it('点击触发弹窗', () => {
    const onOk = jest.fn();
    const onCancel = jest.fn();

    const approveModalRef = React.createRef();
    const wrapper = mount(
      <ModalContainer
        title={'删除模板'}
        ref={approveModalRef}
        onOk={onOk}
        onCancel={onCancel}
        toggole={
          <span className={'triggerPoint'} style={{ color: 'red' }}>
            删除
          </span>
        }
      >
        <p>删除后不可恢复，确认要删除吗?</p>
      </ModalContainer>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().visible).toBe(false);
    // 点击删除按钮
    wrapper.find('span.triggerPoint').simulate('click');
    // 弹窗显示
    expect(wrapper.find('div.ant-modal-mask').hasClass('ant-modal-mask-hidden')).toBeFalsy();

    expect(wrapper.state().visible).toBe(true);

    approveModalRef.current.closeModal();
    expect(wrapper.state().visible).toBe(false);

    approveModalRef.current.showModal();
    expect(wrapper.state().visible).toBe(true);

    wrapper.find('div.ant-modal-content button.ant-btn.ant-btn-primary').simulate('click');

    approveModalRef.current.showModal();
    wrapper
      .find('div.ant-modal-footer button')
      .at(0)
      .simulate('click');

    expect(onOk).toBeCalled();
    expect(onCancel).toBeCalled();
  });

  it('确认函数出错时，弹窗隐藏', () => {
    const onOk = jest.fn(() => {
      throw new Error();
    });

    const wrapper = mount(
      <ModalContainer
        title={'删除模板'}
        onOk={onOk}
        toggole={
          <span className={'triggerPoint'} style={{ color: 'red' }}>
            删除
          </span>
        }
      >
        <p>删除后不可恢复，确认要删除吗?</p>
      </ModalContainer>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().visible).toBe(false);
    // 点击删除按钮
    wrapper.find('span.triggerPoint').simulate('click');
    // 弹窗显示
    expect(wrapper.find('div.ant-modal-mask').hasClass('ant-modal-mask-hidden')).toBeFalsy();

    wrapper.find('div.ant-modal-content button.ant-btn.ant-btn-primary').simulate('click');

    expect(onOk).toBeCalled();
  });

  it('无自定义函数，弹窗隐藏', () => {
    const wrapper = mount(
      <ModalContainer
        title={'删除模板'}
        toggole={
          <span className={'triggerPoint'} style={{ color: 'red' }}>
            删除
          </span>
        }
      >
        <p>删除后不可恢复，确认要删除吗?</p>
      </ModalContainer>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().visible).toBe(false);
    // 点击删除按钮
    wrapper.find('span.triggerPoint').simulate('click');
    // 弹窗显示
    expect(wrapper.find('div.ant-modal-mask').hasClass('ant-modal-mask-hidden')).toBeFalsy();

    wrapper.find('div.ant-modal-content button.ant-btn.ant-btn-primary').simulate('click');

    expect(wrapper.state().visible).toBe(false);
  });
});
