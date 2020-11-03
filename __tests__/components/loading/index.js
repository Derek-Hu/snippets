import React from 'react';
import Loading from '~/components/loading/index';

it('Loading样式', () => {
  const wrapper = mount(<Loading />);

  expect(wrapper).toMatchSnapshot();
});
