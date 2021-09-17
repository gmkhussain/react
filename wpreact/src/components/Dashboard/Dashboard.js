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

    componentDidMount() {

        console.log("Before")        
        const functionAwaitingPromise = async () => {
          let res = await post.list();
          console.log("Result: ", res.data)

          this.setState({ posts: res.data, loaded: true })
          if (res.status === 200) {
            console.log("After")
          }
        }

        functionAwaitingPromise()
        console.log("AAA")
    }
    


    render() {

        const deletPost = async () => {
            let res = await post.delete();
            console.log("Delete")
        }

        

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
                                    <a className="text-primary">Edit</a>
                                    <button onClick={deletPost} className="text-danger">Delete</button>
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