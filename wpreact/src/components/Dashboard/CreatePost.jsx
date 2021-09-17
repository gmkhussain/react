import React from 'react'


class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageTitle: "Create Post",
            post: {
                title: "New title",
                content: "New content",
                status: "publish"
            }
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


    render() {
        
        const { post } = this.state

        return (
            <div className="container text-white">
              <h4>Create Post</h4>

              

              <form>
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

                <div className="form-group py-4">
                    <button className="btn btn-primary">Create Post</button>
                </div>

              </form>
            </div>
        )
    }
}

export default CreatePost