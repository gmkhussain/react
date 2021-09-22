import { Route } from "react-router"
import Navbar from '../components/Navbar'

import Posts from '../components/Posts'
import SinglePost from '../components/SinglePost'
import Login from "../components/Login";

import Dashboard from "../components/Dashboard/Dashboard"
import DashboardPosts from "../components/Dashboard/Posts/Posts"
import CreatePost from '../components/Dashboard/CreatePost'

import PublicLayout from "../components/layout/PublicLayout";

const ClientRoutes = () => {
    return <>
    
        <Route exact path="/">
          <PublicLayout><div>Home</div></PublicLayout>
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
          <DashboardPosts/>
        </Route>
         
        <Route exact path="/create-post">
          <CreatePost />
        </Route>
        
    </>
}

export default ClientRoutes