import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

test('renders learn react link', () => {
  const wrapper = shallow(<HomePage/>)
  expect(wrapper).toMatchSnapshot()
});