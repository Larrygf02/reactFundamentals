import React, {useEffect, useRef } from 'react'
import styles from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    //El props.persons indica que se ejecutara si cambia el props persons
    //sino se ejecutara cada vez que haya un cambio
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //Http Request
      //setTimeout(() => {
      //  alert('Save data cloud')
      //}, 1000)
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup works');
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup works 2nd');
      }
    })
    let classes = []
    let btnClass = ''
    if (props.showPersons) {
      btnClass = styles.Red
    }
    if (props.personsLength <= 2) {
      classes.push(styles.red)
    }
    if (props.personsLength <= 1) {
      classes.push(styles.bold)
    }
    classes = classes.join(' ')
    return(
        <div className={styles.Cockpit}>
            <h1>
                {props.title}
            </h1>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toogle Persons</button>
            <AuthContext.Consumer>
            {context => <button onClick={context.login}>Log in</button> }
            </AuthContext.Consumer>
            <p className={classes}>This is really working</p>
      </div>
    );
};

//rendering if change input
export default React.memo(cockpit);