import React, {useEffect } from 'react'
import styles from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
    });
    let classes = []
    let btnClass = ''
    if (props.showPersons) {
      btnClass = styles.Red
    }
    if (props.persons.length <= 2) {
      classes.push(styles.red)
    }
    if (props.persons.length <= 1) {
      classes.push(styles.bold)
    }
    classes = classes.join(' ')
    return(
        <div className={styles.Cockpit}>
            <h1>
                {props.title}
            </h1>
            <button className={btnClass} onClick={props.clicked}>Toogle Persons</button>
            <p className={classes}>This is really working</p>
      </div>
    );
};

export default cockpit;