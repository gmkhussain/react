const PostEdit = (props) => {
    return <>
        <h4>Post Eidt</h4>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
                    type="text"
                    id="title"
                    className="form-control"
                    />
        </div>
        <div className="form-group">
            <label htmlFor="content">Content</label>
            <input  
                    type="text" 
                    id="content"
                    className="form-control"
                    />
        </div>
    </>
}

export default PostEdit