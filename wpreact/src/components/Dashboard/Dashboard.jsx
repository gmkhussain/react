import React from 'react'
import { Link } from 'react-router-dom'
import post from '../../services/post'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageTitle: "Dashboard",
            posts: [{ id:-1,title: "adsd"} ],
            loaded: false
        }
    }

        
    async getAllPosts() {
          let res = await post.list();
          console.log("Result: ", res.data)

          this.setState({ posts: res.data, loaded: true })
          if (res.status === 200) {
            console.log("After")
          }
    }
    

    async deletePost (index) {
        let res = await post.delete(index);
        console.log("Delete", res)
        this.getAllPosts()
    }

    


    componentDidMount() {
        this.getAllPosts()
        console.log("AAA")
    }



    render() {

        const { posts, loaded } = this.state

        return (
            
            <div className="container text-white">
                <h4>Dashboard</h4>

                <Link to="/create-post">Add Post</Link>

                <div className="co-sm-12 ">

                    { loaded  ? 
                    <div className="row">
                        <table className="table text-white">
                            <tbody>

                            {posts.map(post=>(
                               <tr key={post.id}>
                                  <td> {post.id} </td>
                                  <td> {post.title.rendered } </td>
                                  <td> 
                                    <Link to='' className="text-primary">Edit</Link>
                                    <button onClick={() => { this.deletePost(`${post.id}`); }} className="text-danger">Delete {post.id}</button>
                                    <Link to={`/post/${post.id}`}>View</Link>
                                  </td>
                               </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    : 'No Data' }
                    
                </div>

            </div>
        )
    }
}

export default Dashboard