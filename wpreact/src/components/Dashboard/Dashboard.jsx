import React from 'react'
import { Link } from 'react-router-dom'
import post from '../../services/post'
import SidebarMenu from './Sidebar/SidebarMenu'

import styles from './Dashboard.scss'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pageTitle: "Dashboard",
            posts: [],
            loading: true,
            isDeleting: {
              status: false,
              id: 0,
              classDelete: ''
            }
        }
    }



    async getAllPosts() {

        console.log( "getAllPosts()..." )
        
          let res = await post.list();
          console.log("Result: ", res)

          this.setState({ posts: res.data, loading: false })
          if ( res.status === 200 ) {
            console.log("After ... 1")
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
        
        this.setState({isDeleting: {
            status: true,
            id: index,
            classDelete: 'isDeleting'
        }})


        if( index ) {
           let _id = `post_`+index;
           
           console.log(_id)

           document.getElementById(_id).classList.add( "isDeleting" )
           
           //document.getElementById(_id).remove()
        }


        let res = await post.delete(index);
        console.log("Delete", res)

        this.getAllPosts()

        // this.setState({loading: false })

    }

    


    componentDidMount() {
        console.log("componentDidMount()...")
        this.getAllPosts()
    }



    render() {

        const { posts, loading, isDeleting } = this.state

         console.log( isDeleting.classDelete )

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
                                    <tr key={post.id} id={`post_${post.id}`} >
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