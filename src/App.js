import React, { Component } from 'react';
import Greeting from './components/Greeting'
import Button from './components/Button'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Greeting />
        <Button />
      </div>
    );
  }

}

export default App;
