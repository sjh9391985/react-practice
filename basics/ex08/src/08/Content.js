import React, { Component, Fragment } from 'react';
import Clock00 from './Clock00';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

export default function() {
    return (
        <Fragment>
            <p>JSX Tutorials - Dynamic HTML Rendering</p>
            <Clock00 />
            <Clock01 />
            <Clock02 />
        </Fragment>
    );
}