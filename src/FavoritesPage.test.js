import React from 'react';
import { shallow } from 'enzyme';
import FavoritesPage from './FavoritesPage.js';

test('renders learn react link', () => {
  const wrapper = shallow(<FavoritesPage/>)
  expect(wrapper).toMatchSnapshot()
});