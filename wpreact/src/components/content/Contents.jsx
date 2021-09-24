import React, { useContext } from 'react';
import Navbar from "../Navbar";
import AppContext from "../context/AppContext";

const Content = ( props ) => {

	const [ store ] = useContext( AppContext );

	return (
		<div id="content" className={`bg-dark text-white ${ store.sidebarActive ? ' ' : 'active' } `}>
			{/* Top Navbar */}
			<Navbar/>
			{/* Main Content */}
			<div className="main-content ">
				{ props.children }
			</div>
		</div>
	)
};

export default Content;