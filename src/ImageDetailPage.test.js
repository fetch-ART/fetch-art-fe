import React from 'react';
import { shallow } from 'enzyme';
import ImageDetailPage from './ImageDetailPage.js';

test('renders learn react link', () => {
  const wrapper = shallow(<ImageDetailPage/>)
  expect(wrapper).toMatchSnapshot()
});