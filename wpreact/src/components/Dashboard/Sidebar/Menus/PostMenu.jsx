import NavLink from "../../../NavLink";

const PostMenu = () => {
    return <>
        <NavLink to={`/dashboard`}>Dashboard</NavLink>
        <NavLink to={`/dashboard/posts`}>Posts</NavLink>
                                
        <NavLink to={`/create-post`}>Add New Post</NavLink>
    </>
}

export default PostMenu;