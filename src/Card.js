import React, { Component } from 'react';

class Card extends Component {

  state = {
    className: "mountText"
  }

  
  componentDidMount() {
    console.log('a card was mounted');
    this.timeout = setTimeout(() => {
      this.setState({
        className: "hidden"
      })
    }, 1900)
  }

  componentWillUnmount() {
    console.log('a card was unmounted');
    clearInterval(this.timeout)
  }



  render() {
    return (
      <section className="Card" style={{background: this.props.color}}>
        <div className="cardContent">
          <q>{this.props.quote}</q>
          <p>{this.props.author}</p>
        </div>

        <aside className={this.state.className}>Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  handleClose = () => {
    this.props.removeCard(this.props.author)
  }

}

export default Card;
