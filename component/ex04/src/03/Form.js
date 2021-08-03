import React from 'react';
import './assets/Form.css';

export default function Form() {

    function onSubmit(e) {
        e.preventDefault();
        console.log(e.target.email.value, " : ", e.target.password.value);
    }
    return (
        <form 
            id="loginForm" 
            name="loginForm" 
            method="post" 
            action="/do/not/post"
            onSubmit={onSubmit}>
        
            <label htmlFor="email">이메일</label>
            <input 
                id="email" 
                name="email" 
                type="text" />
            
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" name = 'birthyear' >
                <option value={1984}>1984년</option>
                <option value={1985}>1985년</option>
                <option value={1986}>1986년</option>
                <option value={1987}>1987년</option>
                <option value={1988}>1988년</option>
                <option value={1989}>1989년</option>
                <option value={1990}>1990년</option>
            </select>

            <input type="submit" value="로그인" />
            <div>
            <a> 회원가입 </a>
            <a> ID/PW 찾기 </a>
            <a> 비회원 로그인</a>
            </div>
        </form>
    );
}