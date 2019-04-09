import React, { Component } from 'react';
import styles from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'fd23', name: 'Raul', age: 26},
      {id: 'ad34', name: 'Kelly', age: 25}
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons //persons:persons
    })    
  }
  render() {
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() => this.deletePersonHandlers(index)} 
            name={person.name} 
            years={person.age} 
            key={index}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      btnClass = styles.Red
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push(styles.red)
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold)
    }
    classes = classes.join(' ')

    return (
      <div className={styles.App}>
        <h1>
          Hi, I'am React App
        </h1>
        <button className={btnClass} onClick={this.tooglePersonsHandlers}>Toogle Persons</button>
        <p className={classes}>This is really working</p>
        {persons}
      </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am react app'))
  }
}

export default App;
