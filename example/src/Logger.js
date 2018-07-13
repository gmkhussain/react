import React, { Component } from 'react';

class Logger extends Component{
    
    constructor(props){
        super(props);
        console.log("Logger constructor");
    }

    componentDidMount(){
        console.log("Logger componentDidMount");
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