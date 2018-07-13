import React, { Component } from 'react';

class Logger extends Component{
    
    constructor(props){
        super(props);
        console.log("Logger constructor");
    }

    componentDidMount(){
        console.log("Logger componentDidMount");
    }


    componentWillReceiveProps(nextProps){
        console.log("Next Props: ", nextProps);
    }


    shouldComponentUpdate(newProps, newState){
        console.log("should component update");
        console.log("New Props", newProps);
        console.log("New State", newState);
        return true; 
        /* return false -> component updating in background but should not display on view */
    }


    render(){
        console.log("Logger render");
        return(
               <div>Logger: {this.props.time}
           
               </div>
        )
    }

}

export default Logger;