import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavbarDashboard from '../../components/navbarDashboard/NavbarDashboard';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { SidebarDashboardAdmin, SidebarDashboardPsikolog } from './sidebarData'

import './DashboardLayout.css';
import { storageService } from '../../services';

interface DashboardLayoutProps {
	pageFor: string
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ pageFor }) => {
	const [title, setTitle] = useState<string>('')
	const [icon, setIcon] = useState<React.ReactNode>()

	const location = useLocation();
	const navigate = useNavigate()
	
	useEffect(() => {
		const token = storageService.getToken();
		// if (!token) {
		// 	if (location.pathname === "/psikolog/dashboard") navigate('/psikolog/signin');
		// 	if (location.pathname === '/admin/dashboard') navigate('/admin/signin');
		// }
	}, [])

	return (
		<div className="dashboard-layout-wrapper">
			<Sidebar data={ pageFor === 'admin' ? SidebarDashboardAdmin : SidebarDashboardPsikolog} pageFor={pageFor} />
			<NavbarDashboard title={title} icon={icon} pageFor={pageFor} />
			<div className="dashboard-layout-content">
				<Outlet context={{ setTitle, setIcon }} />
			</div>
		</div>
	);
};
