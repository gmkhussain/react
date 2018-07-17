import React, { Component } from 'react';

class MyEvent extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 1
        }
        this.incrementHandler = this.incrementHandler.bind(this);
        this.decrementHandler = this.decrementHandler.bind(this);
    }

    
    incrementHandler(){
        this.setState(
            {
            counter: this.state.counter + 1
            }   
        )
    }


    decrementHandler(){
        this.setState(
            {
            counter: this.state.counter - 1
            }   
        )
    }


    render(){
        return(
            <div>
                <button onClick={this.incrementHandler}>Counter +</button>
                <span className="counter"> {this.state.counter} </span>
                <button onClick={this.decrementHandler}>Counter -</button>
            </div>
        )
    }

}



export default MyEvent;