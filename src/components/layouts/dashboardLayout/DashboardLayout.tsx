import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../../navbarDashboard/NavbarDashboard';
import { Sidebar } from '../../sidebar/Sidebar';

import './DashboardLayout.css';

export const DashboardLayout = () => {
	return (
		<div className="dashboard-layout-wrapper">
			<Sidebar />
			<NavbarDashboard />
			<div className="dashboard-layout-content">
				<Outlet />
			</div>
		</div>
	);
};
