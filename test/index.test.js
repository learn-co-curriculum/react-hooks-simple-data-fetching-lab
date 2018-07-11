import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';

describe('<App />', () => {
  var appWrapper

  it('calls componentDidMount and adds a quote', () => {
    spy(App.prototype, 'componentDidMount');
    appWrapper = shallow(<App />);

    //component mounted correctly
    expect(App.prototype.componentDidMount.calledOnce, "componentDidMount was not called").to.equal(true);

    //expect there to be one child element of div.CardGrid within App
    expect(appWrapper.children('.CardGrid').length).to.equal(1)

    //expect this.state.cards to be an array equal to 1
    expect(appWrapper.state().cards.length).to.equal(1)

    appWrapper.unmount()
  });

  it('calls componentWillUnmount', () => {
    spy(App.prototype, 'componentWillUnmount');

    appWrapper = shallow(<App />);

    appWrapper.unmount()

    expect(App.prototype.componentWillUnmount.calledOnce).to.equal(true);
  })

});
