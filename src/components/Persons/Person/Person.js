import React, { Component } from 'react'
import styles from './Person.css'
import Aux from '../../../hoc/auxiliary'   
 
class Person extends Component {
    render() {
        console.log('[Person.js rendering...]');
        return (
            //<div className={styles.Person}>
            <Aux>
                <p onClick={this.props.click}>I'am {this.props.name} and I am {this.props.years} years old</p>
                <span>{this.props.children}</span>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
            //</div>
        )
    }
}

export default Person;