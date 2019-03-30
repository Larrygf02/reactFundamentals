import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Raul', age: 26},
      {name: 'Kelly', age: 25}
    ],
    otherState: 'other value'
  }

  switchNameHandler = () => {
    //No hagas esto this.state.name.persons[0].name = 'Raul Larriega'
    this.setState( {
      persons: [
        {name: 'Raul Alfonso', age: 25},
        {name: 'Kelly', age: 25}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>
          Hi, I'am React App
        </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <p>This is really working</p>
        <Person name={this.state.persons[0].name} years={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} years={this.state.persons[1].age}>My hobbies</Person>
      </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am react app'))
  }
}

export default App;
