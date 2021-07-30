import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {

    const onKeyPressInput= function (e) {
        if(e.key = "Enter"){
            console.log(e.target.value);
        }
        
    }
    const onFocusInput= function (e) {
        console.log('onFocusInput');
    }
    const onBlurInput= function (e) {
        console.log('onBlurInput');
    }
    const onMouseOverImage = function (e) {
        console.log('onMouseOverImage',`x=${e.clientX}, y=${e.clientY}}`);
    }
    const onMouseMoveImage = function (e) {
        console.log('onMouseMoveImage',`x=${e.clientX}, y=${e.clientY}}`);
    }
    const onMouseOutImage = function (e) {
        console.log('onMouseOutImage',`x=${e.clientX}, y=${e.clientY}}`);
    }
    const onMouseDownImage = function (e) {
        console.log('onMouseDownImage',`x=${e.clientX}, y=${e.clientY}}`);
    }
    const onMouseUpImage = function (e) {
        console.log('onMouseUpImage',`x=${e.clientX}, y=${e.clientY}}`);
    }
    const onClickImage = function (e) {
        console.log('onClickImage',`x=${e.clientX}, y=${e.clientY}}`);
    }
    const onDoubleClickImage = function (e) {
        console.log('onDoubleClickImage',`x=${e.clientX}, y=${e.clientY}}`);
    }




    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}