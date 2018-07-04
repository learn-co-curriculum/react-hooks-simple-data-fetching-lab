import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../App';


it('renders App', () => {
  const wrapper = shallow(<App/>);
  const textHeader = <p>Our Todo List</p>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});
