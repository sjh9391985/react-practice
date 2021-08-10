import React from 'react';
import styles from './assets/css/TaskList.css'
import {PropTypes} from 'prop-types'

export default function Task({name}){
    return(
        <li className={styles.TaskList__Task}>
        <input type='checkbox' defaultChecked={false} />
        {name}
        <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>
    )
}

Task.propTypes = {
    name:  PropTypes.string.isRequired
}