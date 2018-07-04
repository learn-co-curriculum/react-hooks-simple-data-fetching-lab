import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';
import Card from '../src/Card'

spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    console.log(wrapper.state());
    setTimeout(() => console.log(wrapper.state()), 6000)
  });
});
