import React from 'react'
 
const Person = (props) => {
    return (
        <div>
            <p>I'am {props.name} and I am {props.years} years old</p>
            <span>{props.children}</span>
        </div>
    )
}

export default Person;