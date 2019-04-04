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

  deletePersonHandlers = (personIndex) => {
    //Es una buena practica al mutar la lista hacer una copia,
    //modificar la copia y la copia pasarlo al metodo setState
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person click={() => this.deletePersonHandlers(index)} name={person.name} years={person.age} key={index}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>
          Hi, I'am React App
        </h1>
        <button style={style} onClick={this.tooglePersonsHandlers}>Toogle Persons</button>
        <p>This is really working</p>
        {persons}
      </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am react app'))
  }
}

export default App;
