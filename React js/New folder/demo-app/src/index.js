import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Mycomponent,Clock,Increment,counter} from './App1'
import App,{App1,App2} from './App';
//import App1 from './App';
import reportWebVitals from './reportWebVitals';
import {Counter} from './Desti'
// rendring App1.js
//ReactDOM.render(<React.StrictMode><Mycomponent name="Nazeer"><ul><li>1</li></ul></Mycomponent></React.StrictMode>,document.getElementById('target'))
// ReactDOM.render(<counter/>,document.getElementById('target'))
//ReactDOM.render(<Increment/>,document.getElementById('target'))
ReactDOM.render(<Counter/>,document.getElementById('target'))












// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App1 />
// //   </React.StrictMode>,
// //   document.getElementById('root1')
// // );
// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// // //making timer using function based component

// // function Timer()
// // {
// //   const elem =  <h1>{new Date().toLocaleTimeString}</h1>
// //   React.render(elem,document.getElementById('app')) 
// // }

// // setInterval(Timer,500)

// // props 
// export default class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//   }
//   render()
//   {
//     return <h1>{props.obj.name}</h1>
//   }
// }
// <App obj={{name:"bazer",age:33}}/>