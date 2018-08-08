import React, { Component } from "react";
import Button from "./Button";
import calculate from "./calculate";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      current: null,
      operator: null
    };
  }

  handleClick = buttonName => {
    console.log(this.state, buttonName);
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div>
          <div className="component-display">
            <div>{this.state.current || this.state.result}</div>
          </div>
          <div className="component-button-panel">
            <div>
              <Button name="C" clickHandler={this.handleClick} wide />
              <Button name="÷" clickHandler={this.handleClick} orange />
            </div>
            <div>
              <Button name="7" clickHandler={this.handleClick} />
              <Button name="8" clickHandler={this.handleClick} />
              <Button name="9" clickHandler={this.handleClick} />
              <Button name="x" clickHandler={this.handleClick} orange />
            </div>
            <div>
              <Button name="4" clickHandler={this.handleClick} />
              <Button name="5" clickHandler={this.handleClick} />
              <Button name="6" clickHandler={this.handleClick} />
              <Button name="-" clickHandler={this.handleClick} orange />
            </div>
            <div>
              <Button name="1" clickHandler={this.handleClick} />
              <Button name="2" clickHandler={this.handleClick} />
              <Button name="3" clickHandler={this.handleClick} />
              <Button name="+" clickHandler={this.handleClick} orange />
            </div>
            <div>
              <Button name="0" clickHandler={this.handleClick} wide />
              <Button name="=" clickHandler={this.handleClick} orange />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
