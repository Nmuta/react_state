import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {

  state = {count: 0, mealPrice: 0 , wallet2: 0, multiplier: 0, total: 0}

  updateCounter = (e) => {
    this.setState({count: this.state.count+1});
  }

  updateMealPrice = (e) => {
    this.setState({mealPrice: e.target.value});
  }

  updateMultiplier = (e) => {
    this.setState({multiplier: e.target.value});
  }

  calcTotal = (e) => {
    let newtotal = Number(this.state.mealPrice) * Number(this.state.multiplier);
    this.setState({total: newtotal});
  }

  render() {
    return (
      <div className="App">
        counter: {this.state.count};

          Hello the price of the meal is {this.state.mealPrice}
          <button onClick={this.updateCounter}>click me</button>
          <hr />
          <div>
            Enter the cost of the meal: 
            <input onChange={this.updateMealPrice} />
          </div>
          <div>
            Enter the number of people: 
            <input onChange={this.updateMultiplier} />
          </div>
          <hr />
          <div>
            The total meal cost for a meal at
            {this.state.mealPrice} for {this.state.multiplier} people 
            would be {this.state.total}
          </div>

          <div>
            <button onClick={this.calcTotal}> Calculate Total !</button>
          </div>
      </div>
    );
  }
}

export default App;
