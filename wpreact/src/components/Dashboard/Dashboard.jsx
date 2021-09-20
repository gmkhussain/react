import React from 'react'
import { Link } from 'react-router-dom'
import post from '../../services/post'
import SidebarMenu from './Sidebar/SidebarMenu'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageTitle: "Dashboard",
            posts: [],
            loading: true
        }
    }

        
    async getAllPosts() {
          let res = await post.list();
          console.log("Result: ", res.data)

          this.setState({ posts: res.data, loading: false })
          if (res.status === 200) {
            console.log("After")
          }
    }
    

    
    async editPost (index) {
        
        this.setState({loading: true})

        let r = Math.random();

        let res = await post.edit( index, `{ "title": "${r}" }` );
        console.log("Updated", res)
        this.getAllPosts()

        this.setState({loading: false})

    }


    

    async deletePost (index) {
        
        this.setState({loading: true})

        let res = await post.delete(index);
        //console.log("Delete", res)
        
        this.getAllPosts()

        this.setState({loading: false })
        
    }

    


    componentDidMount() {
        this.getAllPosts()
        console.log("AAA")
    }



    render() {

        const { posts, loading } = this.state

          return (

            <div className="container text-white">
                
                <h4>Dashboard</h4>

                <div className="row">

                    <div className="col-md-2">
                      <SidebarMenu />
                    </div>

                    <div className="col-md-10">
                        <Link to="/create-post">Add Post</Link>

                        <div className="co-sm-12 ">

                            { loading ? 'Loading...' :  
                            
                                <div className="row">
                                <table className="table text-white">
                                    <tbody>

                                    {posts.map(post=>(
                                    <tr key={post.id}>
                                        <td> {post.id} </td>
                                        <td> {post.title.rendered } </td>
                                        <td> 
                                            <button onClick={() => { this.editPost(`${post.id}`)} } className="text-primary">Edit</button>
                                            <button onClick={() => { this.deletePost(`${post.id}`); }} className="text-danger">Delete {post.id}</button>
                                            <Link to={`/post/${post.id}`}>View</Link>
                                        </td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            }
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard