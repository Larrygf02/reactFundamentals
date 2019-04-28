import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/auxiliary'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id: 'fd23', name: 'Raul', age: 26},
      {id: 'ad34', name: 'Kelly', age: 25}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  //Lyfecicle
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  /*componentWillMount() {
    console.log('[App.js] ComponentWillMount');
  }*/

  componentDidMount() {
    console.log('[App.js] ComponentDidMount');
  }

  //ShouldComponentUpdate debe retornar un valor
  //false-> no update state
  //true -> update state
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] ShouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] ComponentDidUpdate');
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

    this.setState((prevState, props) =>{
      return {
        persons,changeCounter: prevState.changeCounter + 1 //persons:persons
      };
    })    
  }
  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandlers}
          changed={this.nameChangedHandler}/>
        </div>
      );
    }



    return (
      <Aux>
      <button onClick={() => {this.setState({showCockpit:false})}}>Remove Cockpit</button>
      { this.state.showCockpit ?<Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength= {this.state.persons.length}
        clicked= {this.tooglePersonsHandlers}/> : null}
        {persons}
      </Aux>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am react app'))
  }
}

export default withClass(App, styles.App);
