import React from 'react';
import styles from './assets/scss/Info.scss'

export default function Info({no, name, message, regDate}){
    return(

        <ul className="Guestbook__List">

                <li className={styles.Guestbook__List__Item}>
                    <strong>{name}</strong>
                    <p> { message && message.split('\n').map((line, index) => index > 0 ?
                    <Fragment>
                        <br/>
                        { line }
                    </Fragment> : line) }</p>
                    <strong>{regDate}</strong>
                    <a href=''>삭제</a>
                </li>
        </ul>        
    )
}