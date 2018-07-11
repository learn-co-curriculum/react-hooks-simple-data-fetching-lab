import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';
import Button from '../src/components/Button';

describe('<Button />', () => {
  var buttonWrapper

  //tests specific method within a class
  it('handles click correctly', () => {
    
    //set spy on a particular component's class method
    spy(Button.prototype, "handleClick")

    //example shallow mount of a component
    buttonWrapper = shallow(<Button />);

    //should console log when handleClick fires
    const fakeEvent = {target: {innerHTML: "test"}}

    //calls method on Button
    buttonWrapper.instance().handleClick(fakeEvent)

    //spy confirms the method was called
    expect(Button.prototype.handleClick.calledOnce, "handleClick was not called").to.equal(true)

    //prevents hanging tests
    buttonWrapper.unmount()
  });
})

describe('<App />', () => {
  var appWrapper

  //test if a component is mounting correctly
  it('mounts correctly', () => {
    appWrapper = shallow(<App />);

    expect(appWrapper, "App did not mount").to.exist

    appWrapper.unmount()
  });

  //test if required content is present in rendered HTML
  it('contains a Greeting and an Example component', () => {

    appWrapper = shallow(<App />);

    // check for html content directly
    expect(appWrapper.html()).to.include('<div class="Greeting">Hello!</div>')
    expect(appWrapper.html()).to.include('<strong>Example!</strong>')

    appWrapper.unmount()

  })

});
