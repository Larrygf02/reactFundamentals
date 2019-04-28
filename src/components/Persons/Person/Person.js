import React, { Component } from 'react'
import styles from './Person.css'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/auxiliary'
import withClass from '../../../hoc/withClass'
 
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js rendering...]');
        return (
            //<div className={styles.Person}>
            <Aux>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please Log in</p>}
                <p onClick={this.props.click}>I'am {this.props.name} and I am {this.props.years} years old</p>
                <span>{this.props.children}</span>
                <input key="i3" type="text" 
                //ref={(inputEl) => {this.inputElement = inputEl}} 
                ref = {this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name}></input>
            </Aux>
            //</div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person, styles.Person);