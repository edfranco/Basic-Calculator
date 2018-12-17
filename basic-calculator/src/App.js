import React, { Component } from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from './components/ClearBurron';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input:""
    };
  }

  makeDisplay = val => {
    this.setState({input: this.state.input + val});
  }

  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)})
  }
  
  render() {
    return (
      <div className="App">
        <div className="calculator-wrapper">
          
          <Input input={this.state.input} ></Input>

          <div className="row">
            <Button handleClick={this.makeDisplay}>7</Button>
            <Button handleClick={this.makeDisplay}>8</Button>
            <Button handleClick={this.makeDisplay}>9</Button>
            <Button handleClick={this.makeDisplay}>/</Button>
          </div>
          
          <div className="row">
            <Button handleClick={this.makeDisplay}>4</Button>
            <Button handleClick={this.makeDisplay}>5</Button>
            <Button handleClick={this.makeDisplay}>6</Button>
            <Button handleClick={this.makeDisplay}>*</Button>
          
          </div>

          <div className="row">
            <Button handleClick={this.makeDisplay}>1</Button>
            <Button handleClick={this.makeDisplay}>2</Button>
            <Button handleClick={this.makeDisplay}>3</Button>
            <Button handleClick={this.makeDisplay}>+</Button>
          </div>

          <div className="row">
            <Button handleClick={this.makeDisplay}>.</Button>
            <Button handleClick={this.makeDisplay}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.makeDisplay}>-</Button>
          </div>

          <div className="row">
          <ClearButton handleClear={() =>
            this.setState({input:""})
          }>CLEAR</ClearButton>
          </div>


          
        </div>

      </div>
    );
  }
}

export default App;
