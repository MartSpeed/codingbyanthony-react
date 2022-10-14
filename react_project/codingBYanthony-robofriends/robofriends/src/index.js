import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from "./Hello"
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <h1>coding<span ><strong>BY</strong></span>anthony</h1>
    <Hello />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
