import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";

import { apiHeaderCofig } from '../../../config/auth-config';

import DashboardLayout from '../../layout/DashboardLayout';


const PostEdit = (props) => {

    const _PostId = props.match.params.id
    
    const [ postData, setPostData ]  = useState({
        post: {
            title: '',
            content: 'dasdsad',
            status: 'publish'
        }
    })

    const updatePost = () => {

        if( postData.post.title !== '') {
            axios.put(`http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts/${_PostId}`, postData.post , apiHeaderCofig)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("err");
            });
        } else {
            console.log("Fill required data....")
        }

    }

    const onSubmitFunc =(e)=> {
        e.preventDefault()
        console.log("on Submit...")
        updatePost()
    }

    const onChangeFunc =(e)=> {
        
        setPostData({
            post: { [e.target.name]: e.target.value }
        })

        console.log(postData)
    }


    useEffect(() => {
        console.log(props)
        console.log("UPDATE!")
        

    }, [])


    const { title, content } = postData;

    return <DashboardLayout>
      
      <form onSubmit={onSubmitFunc}>
        <h4>Post Eidt</h4>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={onChangeFunc}
                    />
        </div>
        <div className="form-group">
            <label htmlFor="content">Content</label>
            <input  
                    type="text" 
                    id="postContent"
                    name="content"
                    className="form-control"
                    value={content}
                    onChange={onChangeFunc}
                />
        </div>
        <div className="form-group pt-4">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>

    </DashboardLayout>
}

// withRouter required for `props`
export default withRouter(PostEdit) 