import React, {Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function(){

    return(
        <Fragment>

            <div id="header">
                <h1>Header</h1>
            </div>
            
            <div id="content">
                <h2>Guestbook</h2>    
            </div>

            <div id='navigation'>
                <ul>
                    <li><NavLink to={'/'} >[Main]</NavLink></li>
                    <li><NavLink to={'/gallery'} >[Gallery]</NavLink></li>
                </ul>
            </div>

            <div id='footer'>
                <p>(c)opyright 2021</p>
            </div>
        </Fragment>
    )
}