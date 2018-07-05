import React, { Component } from 'react';

class Card extends Component {

  constructor() {
    super()
    this.state = {
      className: "mountText"
    }
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
    const { quote, author, color } = this.props
    const { className } = this.state


    return (
      <section className="Card" style={{ background: color }}>

        <div className="cardContent">
          <q>{ quote }</q>
          <p>{ author }</p>
        </div>

        <aside className={ className }>Mounted</aside>
        <small onClick={this.handleClose}>X</small>

      </section>
    );
  }


  // for the 'x' button, 
  handleClose = () => {
    this.props.removeCard(this.props.author)
  }


}

export default Card;
