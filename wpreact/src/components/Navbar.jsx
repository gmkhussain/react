import React from 'react'
import { Link } from 'react-router-dom'
import authConfig from '../config/auth-config'

class Navbar extends React.Component {

    render() {

        const handleLogout = () => {
            localStorage.removeItem( 'token' );
    
            window.location.href = '/';
        };

        
        console.log(authConfig)

        return (
            <header className=" bg-dark text-white">
                <div className="container">
                
                <nav className="navbar navbar-expand-lg  bg-dark text-white">
                    <div className="container-fluid">
                        <span className="navbar-brand">Navbar</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" exact="true" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts">Posts</Link>
                                </li>

                                <li className="nav-item">
                                
                                    { authConfig.authToken 
                                    ? 
                                      <button className="nav-link" onClick={handleLogout}>Logout</button>
                                    : 
                                      <Link className="nav-link" to="/login">Login</Link>
                                    }
                                </li>

                            </ul>

                        </div>
                    </div>
                  </nav>

                </div>
                
            </header>
        )
    }
}


export default Navbar