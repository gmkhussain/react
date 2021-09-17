import React from 'react'
import axios from 'axios'
import clientConfig from '../../config/client-config'
import authConfig, { apiHeaderCofig } from '../../config/auth-config'


class CreatePost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pageTitle: "Create Post",
            post: {
                title: "New title",
                content: "New content",
                status: "publish"
            },
            loading: false,
        }
    }



    onChangeHandler = (event) => {
        console.log("VALUE: " , event.target.value)
        
        /*
          "A component is changing a controlled input to be uncontrolled"
          Use prevState
        */
        this.setState( (prevState)=> ({
            post: { 
                ...prevState.post,
                [event.target.name] : event.target.value
            }
        }))
    }



    
    onSubmitHanlder = ( event ) => {
        event.preventDefault();
        console.log("onSubmitHanlder")
        
        this.setState({ loading: true })

        const formData = {
            title: this.state.post.title,
            content: this.state.post.content,
            status: this.state.post.status
        }

        // console.log( formData, apiHeaderCofig )
        axios.post(`${clientConfig.rootUrl}/wp-json/wp/v2/posts`, formData, apiHeaderCofig )
        .then( res => {
            console.log("re")
            this.setState({
                loading: false
            })
        }).catch( err => {
            console.log("Error")
        })

    }


    
    

    render() {

        const  { loading } = this.state;

        {
            if( loading === true ) {
                return <div className="container text-white">Loading..</div>
            }
        }

        const { post } = this.state

        return (
            <div className="container text-white">

              <h4>Create Post</h4>
              
              <form onSubmit={this.onSubmitHanlder}>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        name="title"
                        value={post.title}
                        onChange={this.onChangeHandler}
                        />
                </div>
                <div className="form-group y-2">
                    <input 
                        type="text"
                        className="form-control"
                        name="content"
                        value={post.content}
                        onChange={this.onChangeHandler}
                        />
                </div>

                <div className="form-group y-2">
                    <select type="text" name="status" value={post.status} className="form-control"
                    onChange={this.onChangeHandler} >
                        <option value="draft">Darft</option>
                        <option value="publish">Publish</option>
                    </select>
                </div>

                <div className="form-group py-4">
                    <button className="btn btn-primary">Create Post</button>
                </div>

              </form>
            </div>
        )
    }
}

export default CreatePost