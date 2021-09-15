import React, { Component } from 'react'
import SinglePost from './SinglePost';
import axios from 'axios' 
import { Link } from "react-router-dom";


export class Posts extends Component {
    
    state = {
        posts: [],
        isLoaded: false,
        error: ''
    }

    componentDidMount() {
         axios.get('http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts')
        .then(res=> this.setState ({
            posts: res.data,
            isLoaded: true
        }))
        .catch(err => this.setState ({
            error: "Re try"
        })
        )

    }

    render() {
        // console.log(this.state)

        const { posts, isLoaded, error } = this.state
        console.log("Posts: ", posts)

        
        if(isLoaded === true) {
            return (
                <section>
                  <div className="container">

                  
                    {posts.length ? ` Has ${posts.length} Post ` : " No Post " }

                    {posts.map(post=>(
                        
                        <div key={post.id}  className="card">
                          
                          
                            <div className="card-body">
                                <h5 className="card-title">{post.id} | {post.title.rendered}</h5>
                                <p className="card-text"> {post.content.rendered} </p>
                                <Link to={`/post/${post.id}`} >View</Link>
                            </div>
                        
                        
                          {/* {console.log("MPA", post)} 
                            <SinglePost post={post} /> */}
                           
                        </div>
                    ))}
                  </div>
                </section>
            )
        }

        return (
            <div className="container text-center">
                
                { error ? <div className="alert alert-danger">Retry error in loading data.</div>: '' }  
        
                { isLoaded===false ? 'Loading...' : '' }
                
            
            </div>
        )
    }
}

export default Posts