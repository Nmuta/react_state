import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './fruits';
import Fruit from './Fruit';



class App extends Component {

  state = {count: 0, bank1: 0, bank2: 0 }

  updateCounter = (e) => {
    this.setState({count: this.state.count+1})
  }

  render() {
    return (
      <div className="App">
          {this.state.count}
          <button onClick={this.updateCounter}>click me!</button>

      </div>
    );
  }
}

export default App;
