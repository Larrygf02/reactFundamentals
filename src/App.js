import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hi, I'am React App
        </h1>
        <p>This is really working</p>
        <Person name="Raul" years="25"></Person>
        <Person name="Kelly" years="25"></Person>
      </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am react app'))
  }
}

export default App;
