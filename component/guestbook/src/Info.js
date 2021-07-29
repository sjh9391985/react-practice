import React from 'react';

export default function Info({no, name, message, regDate}){
    return(

        <ul className="Guestbook__List">
                <li className="Guestbook__List__Item">
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