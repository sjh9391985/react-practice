import React, { Fragment, useState } from 'react';
import LifeCycle from './LifeCycle';

export default function App() {

    const [color, setColor] = useState("#12FF");

    const handleClick = function () {
       setColor(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`); // (== 16,777,215)
       
    }

    return (
        <Fragment>
            
            <h2>ex05: Component LifeCycle</h2>
            <button onClick = { handleClick }>색상변경</button>
            <br/>

            <LifeCycle color = {color} onClick={handleClick} />
        </Fragment>
    
    );

}