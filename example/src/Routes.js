import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';
import LoginPage from './layout/login';
import NotFoundPage from './layout/notfound';
import Navbar from './layout/navbar';
//import createBrowserHistory from 'history/createBrowserHistory';

//const customHistory = createBrowserHistory();

import customHistory from "./History";


const MyRoutes = () =>(
    <Router history={customHistory}>
        <div>
            
            <Navbar />
            
            <hr />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about/:userid' component={AboutPage} /> {/*<-- userid passed in url */ }
                <Route path='/login' component={LoginPage} />
                <Redirect from="/about-us" to="/about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)


export default MyRoutes;