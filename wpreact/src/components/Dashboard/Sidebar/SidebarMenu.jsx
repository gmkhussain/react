import React, { useContext } from 'react';
import NavLink from "../../NavLink";
import AppContext from "../../context/AppContext";
 
import PostMenu from "./Menus/PostMenu";
import PageMenu from "./Menus/PageMenu";


const SidebarMenu = () => {

	const [ store, setStore ] = useContext( AppContext );

	return (

			<nav id="sidebar" className={ store.sidebarActive ? 'active' : '' }>
				<div className="sidebar-header">
					<NavLink to={ `/dashboard ` }>Dashboard</NavLink>
				</div>


				<ul className="list-unstyled components">
				 	<PostMenu />
					<PageMenu />
					<li>
						<a href="#">Media</a>
					</li>
					<li>
						<a href="#">Users</a>
					</li>
				</ul>
			</nav>

	)
};

export default SidebarMenu;
