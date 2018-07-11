import React, { Component } from 'react';

class ExampleComponent extends Component {

  render() {
    return (
      <button onClick={this.handleClick}>
        I am a button
      </button>
    )
  }

  handleClick(event) {
    console.log(event.target.innerHTML)
  }

}

export default ExampleComponent;
