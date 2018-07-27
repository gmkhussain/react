import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';
import LoginPage from './layout/login';
import Navbar from './layout/navbar';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const MyRoutes = () =>(
    <Router histor={customHistory}>
        <div>
            <Navbar />
            
            <hr />

            <Route exact path='/' component={App} />
            <Route path='/about' component={AboutPage} />
            <Route path='/login' component={LoginPage} />
        </div>
    </Router>
)


export default MyRoutes;