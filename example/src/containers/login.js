import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class LoginPage extends Component{

    constructor(props){
        super(props)
        this.state={
            pass:'',
            typechecker: 44
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    loginHandler(event){

        this.setState({
            pass: event.target.value
        })

        var passCheck = this.state.pass; //<-- storing updated password in var
        

        if(passCheck === "mypass"){
            this.props.history.push('/about/157'); //<-- .push('your-next-url')
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
                <span>{this.state.typechecker}</span>
                <ul>
                    <li><Link to='/about/158'>About with 158 UserID</Link></li>
                    <li><Link to='/about/159'>About with 159 UserID</Link></li>
                 </ul>
            
            </div>
        )
    }
     

}



/**PropType**/
LoginPage.propTypes = { typechecker: PropTypes.string  };
/**./PropType**/


export default LoginPage;