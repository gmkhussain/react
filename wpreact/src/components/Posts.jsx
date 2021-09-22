import React, { Component } from 'react'
import axios from 'axios' 
import { Link } from "react-router-dom";

import PublicLayout from './layout/PublicLayout';


export class Posts extends Component {
    
	constructor( props ) {
		super( props );
        this.state = {
            posts: [],
            loading: true,
            postCreated: false,
            error: ''
        }
    }

    
    componentDidMount() { 

        axios.get('http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts')
        .then(res=> this.setState ({
            posts: res.data,
            loading: false
        }))
        .catch(err => this.setState ({
            error: "Retry!"
        })
        )
    }

    render() {


        // console.log(this.state)

        const { posts, loading, error } = this.state
        console.log("Posts: ", posts)

        if( loading === true )  {
            return ( <div className="container">Loading...</div> )
        }


        if( loading === false ) {
            return (
                <PublicLayout>
                  <div className="container">

                    {posts.length ? ` Has ${posts.length} Post ` : " 0 Post " }

                    {posts.map(post=>(
                        
                        <div key={post.id}  className="card  bg-dark text-white">
                          
                            <div className="card-body">
                                <h5 className="card-title">{post.id} | {post.title.rendered}</h5>
                                <p className="card-text"> {post.content.rendered} </p>
                                <Link exact="true" to={`/post/${post.id}`} >View</Link>
                            </div>
                                                   
                        </div>
                    ))}
                  </div>
                </PublicLayout>
            )
        } 

        return (
            <div className="container text-center">
                { error ? <div className="alert alert-danger">Retry error in loading data.</div>: '' }  
            </div>
        )
    }
}

export default Posts