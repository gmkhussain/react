import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import { Link } from "react-router-dom";

import PublicLayout from './layout/PublicLayout';


const PublicPosts = () => {
    
	
	const [postList, setPostList] = useState({
        posts: [],
        loading: true,
        postCreated: false,
        error: '',
        paginationNumber: 1,
        totalPosts: 0
    });
        



    
    const getPosts = (paginationNumber) => { 
        
        console.log("getPosts...")
        
        axios.get('http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts?per_page=2&page='+ paginationNumber)
        .then(res=> {
            
            setPostList ({
                posts: res.data,
                loading: false,
                totalPosts:  res.headers["x-wp-totalpages"]
             })
        })
        .catch(err => {
            setPostList ({
                error: "Retry!"
            })
        })
    };

    const getPageNo = (pageNumber) => {
        
        setPostList ({ loading: true })

        console.log(pageNumber)
        getPosts(pageNumber);
    }

    
    useEffect( ()=> {
        // Get Post with `page=1`
        getPosts(1);
    }, [])



        // console.log(this.state)
        const { posts, loading, error, totalPosts } = postList
        console.log("Posts: ", posts)

        if( loading === true )  {
            return ( <PublicLayout><div className="container bg-dark text-white">Loading...</div></PublicLayout> )
        }

        var pagiList = [];
        for (var i = 0; i < totalPosts; i++) {
            pagiList.push(<span> {i+1} </span>);
        }
        
        console.log(pagiList)

        
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

                    
                    
                  <div className="pagi text-center">
                    { pagiList.map( (blk, index)=> ( <button key={index} onClick={ () => { getPageNo(index+1) } }> {blk} </button> ) )}  
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

export default PublicPosts