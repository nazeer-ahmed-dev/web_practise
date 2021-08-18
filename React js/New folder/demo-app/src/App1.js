import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';


//rendring children my Props 
export class Mycomponent extends React.Component
 {
     constructor(props)
     {
         super(props)
     }
     render()
     {
         return <div><span>{this.props.name}</span>{this.props.children}</div>
     }
 }

 // rendring again and again its not good so we have to use state then REACT do render it self when changes occur

 export class Clock  extends React.Component
 {
     timerId;
     constructor(props) // constructor for state sbhalni ke lyhe
     {
        super(props)
        this.state = {date:new Date()}
        this.tick = this.tick.bind(this)
     }
     render()
     {
         return <div>Time : {this.state.date.toLocaleTimeString()}</div>
     }
     tick()
     {
         this.setState({date:new Date()})
     }
     componentDidMount() // want to set new value 
     {
       this.timerId = setInterval(this.tick,500)
      //this.tick()
     }
     componentDidUpdate() // invock when upadate occur
     {
        //  if(!prev)
        //     this.setState({date:new Date()})
         //console.log("update")

     }
    componentWillUnmount() // cleanp 
    {
        clearInterval(this.timerId)
    }
 }

 //number increment 
 export class Increment  extends React.Component
 {
     timerId;
     constructor(props) // constructor for state sbhalni ke lyhe
     {
        super(props)
        this.state = {count:1}
       // this.tick = this.tick.bind(this)
       this.chng = this.chng.bind(this)
     }
     render()
     {
         return <div>
             <button onClick={this.chng}>Click me</button> 
             value : {this.state.count}
             </div>
     }
    //  tick()
    //  {
    //      this.setState((prevState,prevPros)=>{
    //          return {count:prevState.count+1}
    //      })
    //  }
     chng()
     {
        this.setState((prevState,prevPros)=>{
            return {count:prevState.count+1}
        })
     }
     componentDidMount() // want to set new value 
     {
      // this.chng()
      //this.tick()
     }
     componentDidUpdate() // invock when upadate occur
     {
        //  if(!prev)
        //     this.setState({date:new Date()})
         //console.log("update")

     }
    componentWillUnmount() // cleanp 
    {
        clearInterval(this.timerId)
    }
 }
