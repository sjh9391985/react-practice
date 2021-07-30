import React from 'react';

export default function () {
    return (
        //JSX에서는 함수가 들어가거나 함수객체가 들어가야한다.
        <h1 onClick={ () => {
            console.log("click");
            } }
            style={ {
                
            } }>
            ex03 - Inline Handler
        </h1>
    );
}