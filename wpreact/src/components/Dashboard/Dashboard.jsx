import React from 'react';
import DashboardLayout from "../layout/DashboardLayout";
import { getUserName } from "../functions";

const Dashboard = ( props ) => {

	const userName = ( getUserName() ) ? getUserName() : '';

	return(
		<DashboardLayout>
			{ userName ? <h2>Welcome { userName }!!</h2>: '' }
		</DashboardLayout>
	)
};

export default Dashboard;