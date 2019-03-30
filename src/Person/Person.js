import React from 'react'
 
const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'am {props.name} and I am {props.years} years old</p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Person;