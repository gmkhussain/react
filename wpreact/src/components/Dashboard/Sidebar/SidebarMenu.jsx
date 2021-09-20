import NavLink from "../../NavLink";
import PostMenu from "./Menus/PostMenu";


const SidebarMenu = () => {
    return <>
        
        <nav id="sidebar" >
				<div className="sidebar-header">
					<NavLink to={ `/dashboard ` }>React with WP</NavLink>
				</div>

				<ul className="list-unstyled components">
                    <PostMenu/>
					<li>
						<NavLink to={ `/media` }>Media</NavLink>
					</li>
					<li>
                        <NavLink to={ `/users` }>Users</NavLink>
					</li>
				</ul>
			</nav>
    </>
}


export default SidebarMenu