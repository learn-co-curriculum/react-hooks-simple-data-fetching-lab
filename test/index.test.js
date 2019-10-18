import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy, stub, useFakeTimers } from 'sinon'
const fetchMock = require('fetch-mock')
import Adapter from 'enzyme-adapter-react-16';
import "@babel/polyfill";
configure({ adapter: new Adapter() });

import App from '../src/App';



describe('<App />', () => {
  let appWrapper
  let fetchSpy

  before(() => {
    global.fetch = require('node-fetch')
    fetchMock.get('*', {people: [{name:"Stimpy"}]})
    fetchSpy = spy(global, "fetch")

  })

  after(() => {
    fetchMock.restore();
  })


  //tests specific method within a class
  it('mounts correctly', () => {

    appWrapper = shallow(<App />)
    expect(appWrapper).to.exist

  });

  it('calls componentDidMount and fetch', () => {

    //set spy on a particular component's class method
    spy(App.prototype, "componentDidMount")
    // const fetch = fetchMock.sandbox()
    //example shallow mount of a component

    appWrapper = shallow(<App />);

    expect(App.prototype.componentDidMount.calledOnce, "componentDidMount was not called").to.equal(true);

    expect(fetchSpy.callCount > 0, "Fetch was not called").to.equal(true);

    expect(fetchSpy.firstCall.lastArg).to.equal('http://api.open-notify.org/astros.json')


  })
})
