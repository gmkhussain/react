import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';
import Navbar from './layout/navbar';

const MyRoutes = () =>(
    <Router>
        <div>
            <Navbar />
            
            <hr />

            <Route exact path='/' component={App} />
            <Route path='/about' component={AboutPage} />
        </div>
    </Router>
)

export default MyRoutes;