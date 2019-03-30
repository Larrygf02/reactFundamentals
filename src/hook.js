import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  //useState retorna el estado actual
  const [ personsState, setPersonsState] = useState({
      persons: [
        {name: 'Raul', age: 26},
        {name: 'Kelly', age: 25}
      ],
  })

  const [otherState, setotherState] = useState({
    other: 'Other value'
  })

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //No hagas esto this.state.name.persons[0].name = 'Raul Larriega'
    setPersonsState( {
      persons: [
        {name: 'Raul Alfonso', age: 25},
        {name: 'Kelly', age: 25}
      ]
    })
  }
  return (
    <div className="App">
      <h1>
        Hi, I'am React App
      </h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <p>This is really working</p>
      <Person name={personsState.persons[0].name} years={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} years={personsState.persons[1].age}>My hobbies</Person>
    </div>
    );
}

export default app;
