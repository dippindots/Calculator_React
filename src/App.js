import React, { Component } from "react";
import Button from "./Button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div>
          <div className="component-display">
            <div>0</div>
          </div>
          <div className="component-button-panel">
            <div>
              <Button name="C" wide />
              <Button name="÷" orange />
            </div>
            <div>
              <Button name="7" />
              <Button name="8" />
              <Button name="9" />
              <Button name="x" orange />
            </div>
            <div>
              <Button name="4" />
              <Button name="5" />
              <Button name="6" />
              <Button name="-" orange />
            </div>
            <div>
              <Button name="1" />
              <Button name="2" />
              <Button name="3" />
              <Button name="+" orange />
            </div>
            <div>
              <Button name="0" wide />
              <Button name="=" orange />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
