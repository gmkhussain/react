import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import AboutPage from './containers/about';
import LoginPage from './containers/login';
import D3MapPage from './containers/D3Map';
import HomePage from './containers/home';
import DataFetchPage from './containers/data_fetch';
import ReduxDemoPage from './containers/redux_demo';

import Navbar from './containers/navbar';



import NotFoundPage from './containers/notfound';


//import createBrowserHistory from 'history/createBrowserHistory';

//const customHistory = createBrowserHistory();

import customHistory from "./History";



const MyRoutes = () =>(
    <Router history={customHistory}>
        <div>
            
            <Navbar />
            
            <hr />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about/:userid' component={AboutPage} /> {/*<-- userid passed in url */ }
                <Route path='/login' component={LoginPage} />
                <Route path='/data_fetch' component={DataFetchPage} />
                <Route path='/d3-map' component={D3MapPage} />
                <Route path='/redux-demo' component={ReduxDemoPage} />

                <Redirect from="/about-us" to="/about" />
                <Route component={NotFoundPage} />
                
            </Switch>
        </div>
    </Router>
)


export default MyRoutes;