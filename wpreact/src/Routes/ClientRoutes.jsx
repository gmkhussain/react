import { Route } from "react-router"

import PublicPosts from '../components/PublicPosts'
import SinglePost from '../components/SinglePost'
import Login from "../components/Login";

import Dashboard from "../components/Dashboard/Dashboard"
import DashboardPosts from "../components/Dashboard/Posts/Posts"
import Pages from '../components/Dashboard/pages/pages'
import CreatePost from '../components/Dashboard/CreatePost'

import PublicLayout from "../components/layout/PublicLayout";

const ClientRoutes = () => {
    return <>
    
        <Route exact path="/">
          <PublicLayout><div>Home</div></PublicLayout>
        </Route>
       
        <Route exact path="/posts">
           <PublicPosts />
        </Route>
        
        <Route exact path="/login">
           <Login />
        </Route>

 
        <Route exact path="/post/:id">
            <SinglePost />
        </Route>


        {/* Admin Routes */}

        <Route exact path="/dashboard">
            <Dashboard />
        </Route>

        <Route exact path="/dashboard/posts">
          <DashboardPosts/>
        </Route>

        <Route exact path="/dashboard/pages">
          <Pages/>
        </Route>
         
        <Route exact path="/dashboard/create-post">
          <CreatePost />
        </Route>
        
    </>
}

export default ClientRoutes