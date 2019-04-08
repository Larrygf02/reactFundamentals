import React from 'react'
import Radium from 'radium'
import './Person.css'   
 
const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'am {props.name} and I am {props.years} years old</p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(Person);