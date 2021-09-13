import React, { Component } from 'react'
import axios from 'axios' 

export class Posts extends Component {
    
    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
         axios.get('http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts')
        .then(res=> this.setState ({
            posts: res.data,
            isLoaded: true
        }))
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        // console.log(this.state)

        const { posts, isLoaded } = this.state
        console.log("Posts: ", posts)

        if(isLoaded === true) {
            return (
                <div>
                    {posts.map(post=>(
                        
                        <div key={post.id}>
                          <a href={post.slug}>{post.title.rendered}</a>
                        </div>
                        // <BookItem key={book.id} book={book} />
                    ))}
                </div>
            )
        }

        return (
            <div>Loading...</div>
        )
    }
}

export default Posts