import React, { Component } from 'react';
import logo from './logo.svg';

import TodoApp from './TodoApp';
import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App with React + Redux</h1>
        </header>
        <TodoApp todos={store.getState().todos} store={store} />
      </div>
    );
  }
}

export default App;
