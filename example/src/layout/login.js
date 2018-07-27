import React, { Component } from 'react';


class LoginPage extends Component{

    constructor(props){
        super(props)
        this.state={
            pass:''
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    loginHandler(event){

        this.setState({
            pass: event.target.value
        })

        var passCheck = this.state.pass; //<-- storing updated password in var
        

        if(passCheck === "mypass"){
            this.props.history.push('/'); //<-- .push('your-next-url')
        }else{
            alert(passCheck+ " please try agian!");
        }
    }


    
    eventHandler(event){
        this.setState({
            pass: event.target.value
        })
    }



	render(){
		return(
            <div>
                <h2>Login Page</h2>
                <input type="text" name="pass" value={this.state.pass} onChange={this.eventHandler} />
                <button onClick={this.loginHandler.bind(this)}>Login</button>
                
                <p>Correct password: 'mypass'</p>
            </div>
        )
	}
}

export default LoginPage;