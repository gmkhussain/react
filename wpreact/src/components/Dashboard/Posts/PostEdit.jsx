import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";

import { apiHeaderCofig } from '../../../config/auth-config';

import DashboardLayout from '../../layout/DashboardLayout';


const PostEdit = (props) => {

    const _PostId = props.match.params.id
    
    const [ postData, setPostData ]  = useState({
        loading: false,
        submitDisabled: true,
        post: {
            title: null,
            content: 'dasdsad',
            status: 'publish'
        }
    })

    const updatePost = () => {
         

        if( postData.post.title !== '') {
           
            setPostData({
                ...postData,
                loading: true,
            })

            axios.put(`http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts/${_PostId}`, postData.post , apiHeaderCofig)
            .then(response => {
                console.log(response);
                setPostData({
                    ...postData,
                    loading: false,
                })
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
            post: { ...postData.post, [e.target.name]: e.target.value }
        })
        
        if ( postData ) {
            console.log("NULL",postData.post.title )
        } else {
            console.log("NOT NULL",postData.post.title )
            setPostData({
                ...postData,
                submitDisabled: false
            })
        }
        

        // console.table(postData)
    }


    useEffect(() => {
        console.log(props)
        console.log("UPDATE!")
    }, [])


    const { loading, title, content, submitDisabled } = postData;

    return <DashboardLayout>

        { loading ? "Loading..." : 
      
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
                    <label htmlFor="postContent">Content</label>
                    <input  
                            type="text" 
                            id="postContent"
                            name="content"
                            className="form-control"
                            value={content}
                            onChange={onChangeFunc}
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" className="form-control">
                        <option value="publish">publish</option>
                        <option value="draft">draft</option>
                    </select>
                </div>

                <div className="form-group pt-4">
                    <button type="submit" className="btn btn-primary" disabled={submitDisabled} >Submit</button>
                </div>
            </form>
        }
    </DashboardLayout>
}

// withRouter required for `props`
export default withRouter(PostEdit) 