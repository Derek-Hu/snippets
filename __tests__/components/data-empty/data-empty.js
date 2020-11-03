import React from 'react';
import DataEmpty from '~/components/data-empty/index';

it('空白数据时组件', () => {
  const wrapper = mount(<DataEmpty />);

  expect(wrapper).toMatchSnapshot();
});
