import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MyTodoListApp } from './MyTodoListApp';


const divRoot = document.querySelector('#root');

ReactDOM.render(
    <MyTodoListApp />,
    divRoot
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
