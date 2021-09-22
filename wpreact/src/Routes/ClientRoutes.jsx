import { Route } from "react-router"

import Posts from '../components/Posts'
import SinglePost from '../components/SinglePost'
import Login from "../components/Login";

import Dashboard from "../components/Dashboard/Dashboard"
import CreatePost from '../components/Dashboard/CreatePost'

const ClientRoutes = () => {
    return <>
    
        <Route exact path="/">
           <div>Home</div>
        </Route>
       
        <Route path="/posts">
           <Posts />
        </Route>
        
        <Route exact path="/login">
           <Login />
        </Route>

 
        <Route exact path="/post/:id">
            <SinglePost />
        </Route>


        {/* Admin Routes */}

        <Route path="/dashboard">
            <Dashboard />
        </Route>

        <Route exact path="/dashboard/posts">
          <div>Admin|Post</div>
        </Route>
         
        <Route exact path="/create-post">
          <CreatePost />
        </Route>
        
    </>
}

export default ClientRoutes