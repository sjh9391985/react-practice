import React, { useState } from 'react';

export default function ({begin, step})  {

    const [ value, setValue ] = useState(begin); // begin값 초기화.

    const onClickButton = function () {
        setValue(value - step);
    }
    const onClickButton1 = function () {
        setValue(value + step);
    }

    return(
        <div>
        <button onClick={ onClickButton }>
            <strong>-</strong>
        </button>
        <button onClick={ onClickButton1 }>
            <strong>+</strong>
        </button>
        <span>{ value }</span>
        </div>
    )
}