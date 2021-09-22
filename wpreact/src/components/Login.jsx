import React from 'react'
import clientConfig from '../config/client-config'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'admin',
            password: 'admin123',
            isLoaded: true,
            loggedIn: false,
            error: ''
        }
    }

    onSubmitForm = (event) => {

        event.preventDefault()
        let loginInfo = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        }
        console.log( loginInfo )

        console.log(clientConfig.rootUrl)


        // Loading... on submit
        this.setState( {
            isLoaded: false
        })

        axios.post(`${clientConfig.rootUrl}/wp-json/jwt-auth/v1/token`, loginInfo)
            .then( res=> {
                console.log(res)

                if ( undefined === res.data.token ) {
                    this.setState( { error: res.data.message, isLoaded: true } );
                    return;
                }
                
                const { token } = res.data;
                localStorage.setItem( 'token', token );
                //console.log(localStorage.getItem('token'))

                this.setState(
                    {
                        isLoaded: true,
                        token: token,
                        loggedIn: true,
                    }
                )
            })
            .catch( err => {
                this.setState( {
                    error: "Error in login",
                    isLoaded: false
                } )
            } )


    }



    onChangeFunc = ( event ) => {
        console.log("VALUE: " , event.target.value)
        this.setState( { [event.target.name]: event.target.value } )
    }

    render() {

        const { username, password, error, loggedIn, isLoaded } = this.state;

         
        if(isLoaded === false ) {
            return(  <div className="container text-center text-white">loading...</div> )
        }
    

        
        if( loggedIn || localStorage.getItem('token') ) {
            return <Redirect to="/dashboard" />
        }
        
        return (
            <section >
                <div className="container text-white">
                    
                    <h4>Login | State: {loggedIn ? <div><Redirect to="/dashboard" />  ' You are logged in' </div> : ' Login Now '} </h4>
                    
                    { error ? <div className="alert alert-danger"> ${error} </div> : ' ' }

                    <form onSubmit={ this.onSubmitForm }>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={this.onChangeFunc}
                                />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={this.onChangeFunc}
                                />
                        </div>
                        <div className="form-group my-4">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login