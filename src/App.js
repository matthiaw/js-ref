import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">JavaScript-Reference with React</h1>
          </header>
        </div>
        <div id="elementHeader"></div>
        <br/>
        <div id="parametersBlock"></div>
        <br/>
        <div id="methodsBlock"></div>
      </div>
    );
  }

}

export default App;
