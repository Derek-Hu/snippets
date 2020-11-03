import React from 'react';
import DetailPannel from '~/components/detail-pannel/index';

it('Tab样式', () => {
  const wrapper = mount(<DetailPannel />);

  expect(wrapper).toMatchSnapshot();
});
