import React from 'react';

export default function Info({no, name, message, regDate}){
    return(

        <ul className="Guestbook__List">
                <li className="Guestbook__List__Item">
                    <strong>{name}</strong>
                    <p>{message}</p>
                    <strong>{regDate}</strong>
                    <a href=''>삭제</a>
                </li>
        </ul>        
    )
}