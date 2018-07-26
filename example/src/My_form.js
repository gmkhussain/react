import React, { Component } from 'react';


class MyForm extends Component{


    constructor(props){
        super(props);
        
        this.state={
            useremail: ''
        }

        this.emailHandler = this.emailHandler.bind(this);
    }


    emailHandler(){
        console.log(this.refs.userEmail.value); //<-- Ref NOT recommended is Uncontrolled
    }


    render(){
        return(
            <div>
                <input type="email" ref="userEmail" />
                <button onClick={this.emailHandler}>Submit</button>
            </div>
        )
    }


}


export default MyForm;