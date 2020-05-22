import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem.js';

test('renders learn react link', () => {
  const wrapper = shallow(<ListItem detail={
        {
          urls: {}
        }
    }/>)
  expect(wrapper).toMatchSnapshot()
});