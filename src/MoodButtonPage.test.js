import React from 'react';
import MoodButtonPage from './MoodButtonPage.js';
import { shallow } from 'enzyme';

test('renders learn react link', () => {
  const wrapper = shallow(<MoodButtonPage/>)
  expect(wrapper).toMatchSnapshot()
});