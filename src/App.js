import React, { Component } from 'react';

import Card from './Card'
import quotes from './quotes'

class App extends Component {

  //no props being used here, so we can use the shorthand declaration of state
  state = {
    cards: []
  }


  //Your code here:

  componentDidMount() {
    console.log("App component mounted");
    console.log("Starting interval timer to add quotes")
    this.addQuote()
    this.interval = setInterval(this.addQuote, 5000)
  }

  componentWillUnmount() {
    console.log("App component will unmount");
    clearInterval(this.interval)
  }




  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {

    return (
      <div className="App">
        <h1>Quote Wall</h1>
        <button onClick={this.handleClick}>Add Quote</button>

        <div className="CardGrid">
          {this.renderCards()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX mapped from this.state.cards
  renderCards = () => this.state.cards.map((card, id) => {
    return <Card key={id} {...card} removeCard={this.removeCard}/>
  })

  // handles the event of clicking the 'Add Quote' button
  handleClick = event => {
    event.preventDefault()
    this.addQuote()
  }

  // when called, addCard updates state, adding a new object to the array of cards
  addQuote = () => {
    const allAuthors = Object.keys(quotes)
    const author = allAuthors[Math.floor(Math.random() * allAuthors.length)]
    const quote = quotes[author]
    this.setState(({cards}) => {
      return {
        cards: [
          ...cards,
          {
            quote,
            author,
            color: this.generateRandomColor()
          }
        ]
      }
    })
  }

  // removeCard updates state, removing any card that matches the provided author
  removeCard = author => this.setState(prevState => {
    return {
      cards: prevState.cards.filter(card => card.author !== author)
    }
  })

  //creates a range of light yellow colors
  generateRandomColor = () => '#'+Math.floor(Math.random()*(16777215-16777115)+16777115).toString(16)

}

export default App;
