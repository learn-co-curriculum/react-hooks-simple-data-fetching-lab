import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';


it('renders App', () => {
  const wrapper = shallow(<App/>);
  const textHeader = <p>Our Todo List</p>;
  expect(wrapper.contains(textHeader)).to.equal(true);
});
