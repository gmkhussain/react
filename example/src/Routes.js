import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';
import LoginPage from './layout/login';
import D3MapView from './layout/d3_map_view';
import DataFetchPage from './layout/data_fetch';
import NotFoundPage from './layout/notfound';
import Navbar from './layout/navbar';
//import createBrowserHistory from 'history/createBrowserHistory';

//const customHistory = createBrowserHistory();

import customHistory from "./History";
import HomePage from './layout/home';
import ReduxDemoPage from './layout/redux_demo';


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
                <Route path='/d3-map' component={D3MapView} />
                <Route path='/redux-demo' component={ReduxDemoPage} />

                <Redirect from="/about-us" to="/about" />
                <Route component={NotFoundPage} />
                
            </Switch>
        </div>
    </Router>
)


export default MyRoutes;