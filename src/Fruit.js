import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './fruits';



class Fruit extends Component {

  render() {
    return (
      <div className="fruit_box">
         {this.props.fruit_name}
      </div>
    );
  }
}

export default Fruit;
