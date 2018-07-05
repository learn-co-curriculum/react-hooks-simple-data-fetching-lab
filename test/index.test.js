import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';
import Card from '../src/Card';

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

    // checks for value of this.interval in App
    expect(appWrapper.instance().interval).to.not.equal(undefined)


    appWrapper.unmount()
  });


  it('calls componentWillUnmount', () => {
    spy(App.prototype, 'componentWillUnmount');

    appWrapper = shallow(<App />);

    appWrapper.unmount()

    expect(App.prototype.componentWillUnmount.calledOnce).to.equal(true);
  })

});





describe('<Card />', () => {
  var cardWrapper

  it('calls componentDidMount', () => {
    spy(Card.prototype, 'componentDidMount');

    cardWrapper = shallow(<Card />);

    //component mounted correctly
    expect(Card.prototype.componentDidMount.calledOnce, "componentDidMount was not called").to.equal(true);
    cardWrapper.unmount()
  });


  it('calls componentWillUnmount', () => {
    spy(Card.prototype, 'componentWillUnmount');
    cardWrapper = shallow(<Card />);

    expect(App.prototype.componentWillUnmount.calledOnce).to.equal(true);
    cardWrapper.unmount()
  })

});
