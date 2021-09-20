import NavLink from "../../../NavLink";

const PostMenu = () => {
    return <>
        <NavLink to={`/dashboard`}>All Posts</NavLink>
        <NavLink to={`/create-post`}>Add New Post</NavLink>
    </>
}

export default PostMenu;