import React, { useState, useContext } from 'react';
import NavLink from "../../NavLink";
import PostMenu from "./Menus/PostMenu";
import AppContext from '../../context/AppContext'



const SidebarMenu = () => {

	

	const [ store, setStore ] = useContext( AppContext )
	console.log("Context store", store)
	
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