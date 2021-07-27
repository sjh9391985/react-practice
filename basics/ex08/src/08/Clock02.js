import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const html = 
    "<span>"+
        ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) + 
        " : " +
        ('0' + minutes).slice(-2) + 
        " : " +
        ('0' + seconds).slice(-2) +
    "</span>";


    return (
        // HTML 태그를 동적으로 생성하여 JSX 에 추가하는 작업은 기본적으로 금지하고 있지만,
        // XSS 보호 기능을 끄고 html 을 렌더링하는 속성(property, props)을 제공한다.
         
        <div dangerouslySetInnerHTML= {{__html: html}} />
    )
}