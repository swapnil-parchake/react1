import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

import P1 from './Scripts_Answer/Day1/P1'; //Day1 Part2 problem1

import P2 from './Scripts_Answer/Day1/P2'; //Day1 Part2

// import App from './App';//Day1 Part1 p1and p2
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <App />  */}
    <P1 />
    <P2/>
  </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
