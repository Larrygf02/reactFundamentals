import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Raul', age: 26},
      {name: 'Kelly', age: 25}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 26},
        {name: 'Kelly', age: 25}
      ],
    })
  }

  tooglePersonsHandlers = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Raul', age: 25},
        {name: event.target.value, age: 25}
      ]
    })    
  }
  render() {
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '8px',
      color: '#eee',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>
          Hi, I'am React App
        </h1>
        <button style={style} onClick={this.tooglePersonsHandlers}>Toogle Persons</button>
        <p>This is really working</p>
        { this.state.showPersons ? <div>
          <Person name={this.state.persons[0].name} years={this.state.persons[0].age}></Person>
          <Person 
          name={this.state.persons[1].name}
          years={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Larrygf02')}
          changed={this.nameChangedHandler}>My hobbies</Person>
        </div>: null}
      </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am react app'))
  }
}

export default App;
