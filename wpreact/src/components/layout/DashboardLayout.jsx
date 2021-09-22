import React from 'react';
import SidebarMenu from "../Dashboard/Sidebar/SidebarMenu";
import Content from "../content/Contents";

const DashboardLayout = ( props ) =>  {

	return(
		<React.Fragment>
			<SidebarMenu/>
			<Content>
				{ props.children }
			</Content>
		</React.Fragment>
	)
};

export default DashboardLayout;
