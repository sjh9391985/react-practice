import React, { Fragment, useState } from 'react';
import Hook from './Hook';

export default function App() {

    const [color, setColor] = useState("#000");

    const handleClick = function () {
       setColor(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`); // (== 16,777,215)
       
    }

    return (
        <Fragment>
            
            <h2>ex05: Hook of Functional Component</h2>
            <button onClick = { () => setColor(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`) }>색상변경</button>
            <br/>

            <Hook color = {color}/>
        </Fragment>
    
    );

}