import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../../navbarDashboard/NavbarDashboard';
import { Sidebar } from '../../sidebar/Sidebar';
import { SidebarDashboardAdmin, SidebarDashboardPsikolog } from './sidebarData'

import './DashboardLayout.css';

interface DashboardLayoutProps {
	pageFor: string
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ pageFor }) => {
	const [title, setTitle] = useState<string>('')
	const [icon, setIcon] = useState<React.ReactNode>()

	return (
		<div className="dashboard-layout-wrapper">
			<Sidebar data={ pageFor === 'admin' ? SidebarDashboardAdmin : SidebarDashboardPsikolog} />
			<NavbarDashboard title={title} icon={icon} pageFor={pageFor} />
			<div className="dashboard-layout-content">
				<Outlet context={{ setTitle, setIcon }} />
			</div>
		</div>
	);
};
