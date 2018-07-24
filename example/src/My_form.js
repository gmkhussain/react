import React, { Component } from 'react';


class MyForm extends Component{


    constructor(props){
        super(props);
        
        this.state={
            username: "amoos jhon"
        }

        this.eventHandler = this.eventHandler.bind(this);
    }


    eventHandler(event){
        this.setState({
            username: event.target.value
        })
    }


    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.eventHandler} />
                <span>{this.state.username}</span>
            </div>
        )
    }


}


export default MyForm;