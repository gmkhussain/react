import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Posts from './components/Posts'

function App() {
  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <div>Home</div>
        </Route>
        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
