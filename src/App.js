import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Customize Printers</h1>
        </header>
        <p className="App-intro">

        </p>
        <Board />
      </div>
    );
  }
}

export default App;
