import { expect } from 'chai';
import React from 'react'
import fetchMock from 'fetch-mock'
import { spy } from 'sinon'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from '../App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let fetchSpy

  beforeAll(() => {
    global.fetch = require('node-fetch')
    fetchMock.get('*', {people: [{name:"Stimpy"}]})
    fetchSpy = spy(global, "fetch")
  })

  afterAll(() => {
    fetchMock.restore();
  })

  //tests specific method within a class
  it('mounts correctly', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper).to.exist
  });

  it('calls fetch once', () => {

    shallow(<App />);

    expect(fetchSpy.callCount > 0, "Fetch was not called").to.equal(true);

    expect(fetchSpy.firstCall.lastArg).to.equal('http://api.open-notify.org/astros.json')

  })
})
