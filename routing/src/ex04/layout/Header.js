import React from 'react';
import {NavLink} from 'react-router-dom';

import '../assets/scss/layout/Header.scss';

export default function () {
    return (
    <header>
        <h1>
            <NavLink to={'/'} >Main</NavLink>
        </h1>
    </header>)
}
