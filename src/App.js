import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './fruits';
import Fruit from './Fruit';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {fruits.map(fruit => <Fruit fruit_name={fruit} /> )}
        </p>
      </div>
    );
  }
}

export default App;
