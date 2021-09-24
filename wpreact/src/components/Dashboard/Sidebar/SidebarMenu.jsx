import React, { useContext } from 'react';
import NavLink from "../../NavLink";
import AppContext from "../../context/AppContext";
 
import PostMenu from "./Menus/PostMenu";
import PageMenu from "./Menus/PageMenu";


const SidebarMenu = () => {

	const [ store ] = useContext( AppContext );

	return (

			<nav id="sidebar" className={ `bg-dark ${ store.sidebarActive ? 'active' : '' } `}>
				<div className="sidebar-header">
					<NavLink to={ `/dashboard ` }>Dashboard</NavLink>
				</div>


				<ul className="list-unstyled components">
				 	<PostMenu />
					<PageMenu />
					<li>
						<NavLink to={`/`}>Media</NavLink>
					</li>
					<li>
						<NavLink to={`/`}>Users</NavLink>
					</li>
				</ul>
			</nav>

	)
};

export default SidebarMenu;
