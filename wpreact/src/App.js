import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard"
import CreatePost from "./components/Dashboard/CreatePost"

function App() {
  return (
    <Router>
      <div>
        
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/create-post">
            <CreatePost />
          </Route>

          {/* <Route path="/:post/:id/" exact component={Posts} /> */}
          <SinglePost path="/post/:id" />
          {/* <Route path="post/:id">
            <SinglePost/>
          </Route> */}
        </Switch>
    
      </div>
    </Router>
  );
}

export default App;
