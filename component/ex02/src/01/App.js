import React from 'react';

export default function App(){
    // inline style를 만들경우 객체를 만들어서 사용한다.
    const h1Styles = {
        height: 50,
        padding: 5,
        color: '#fff',
        backgroundColor: '#ee9900'
        
    }
    return (
        <div id='App'>
            <h1 style={h1Styles}>Inline Styling</h1>
        </div>
    );
    
}