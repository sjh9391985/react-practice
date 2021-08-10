import React from 'react';
import Task from './Task';
import {PropTypes} from 'prop-types'
import styles from './assets/css/TaskList02.css'

export default function TaskList({cardNo, tasks, notifyTask}){



    return(
        <div className={'TaskList'}>
              
            <ul>
                {tasks.map(task => <Task 
                                        key={task.no} 
                                        name={task.name}
                                        /> )}
            </ul>

            <input 
                type="text"
                className={styles.TaskList02_input_add_task}
                placeholder={ ' 테스트 추가' }

                onKeyPress={ (event) => {
                    if(event.key === 'Enter'){
                        notifyTask.add(cardNo, event.target.value);
                        event.target.value = '';
                    }
                }
             }
            />

        </div>   
    );
}

TaskList.propTypes = {
    tasks:PropTypes.arrayOf(PropTypes.object).isRequired,
}
