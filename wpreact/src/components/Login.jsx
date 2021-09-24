import React, { useContext, useState } from 'react'
import clientConfig from '../config/client-config'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import AppContext from './context/AppContext'


const Login = () => {

    const [ store, setStore ] = useContext( AppContext )

    const [ loginFields, setLoginFields ] = useState( {
        username: 'admin',
        password: 'admin123',
        loading: false,
        loggedIn: false,
        error: ''
    } );
    

    const onSubmitForm = (event) => {

        event.preventDefault()
        let loginInfo = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        }
        console.log( loginInfo )

        console.log(clientConfig.rootUrl)


        // Loading... on submit
        setLoginFields( {
            ...loginFields,
            loading: true
        })

        axios.post(`${clientConfig.rootUrl}/wp-json/jwt-auth/v1/token`, loginInfo)
            .then( res=> {
                console.log(res)

                if ( undefined === res.data.token ) {
                    setLoginFields({
                        ...loginFields,
                        error: res.data.message,
                        loading: false 
                    });
                    return;
                }
                
                const { token, user_nicename, user_email } = res.data;
                localStorage.setItem( 'token', token );
                localStorage.setItem( 'userName', user_nicename );
                
                console.log("token" , token)
                setStore({
                    ...store,
                    loading: false,
                    token: token,
                });
                
                setLoginFields( {
					...loginFields,
					loading: false,
					token: token,
					userNiceName: user_nicename,
					userEmail: user_email,
				} )

            })
            .catch( err => {
                setLoginFields( {
                    error: "Error in login",
                    loading: true
                } )
            } )


    }



    const onChangeFunc = ( event ) => {
        console.log("VALUE: " , event.target.value)
        setLoginFields( { ...loginFields, [event.target.name]: event.target.value } )
    }
 

    const { username, password, error, loggedIn, loading } = loginFields;

         
        if( loading === true ) {
            return( <div className="container text-center ">loading...</div> )
        }
        
        

        
        if( store.token ) {
            return <Redirect to={`/dashboard`} noThrow />
        } else {
            
            
        return (
            <section >
                <div className="container text-white">
                    
                    <h4>Login | State: {loggedIn ? <div><Redirect to="/dashboard" />  ' You are logged in' </div> : ' Login Now '} </h4>
                    
                    { error ? <div className="alert alert-danger"> ${error} </div> : ' ' }

                    <form onSubmit={ onSubmitForm }>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={ onChangeFunc }
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
                                onChange={ onChangeFunc }
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