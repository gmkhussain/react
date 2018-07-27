import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';

const MyRoutes = () =>(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/about' component={AboutPage} />
        </div>
    </Router>
)

export default MyRoutes;