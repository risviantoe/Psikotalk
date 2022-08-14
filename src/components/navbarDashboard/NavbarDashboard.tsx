import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdNotifications } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import './NavbarDashboard.css';

interface NavbarDashboardProps {
	title: string;
	icon: React.ReactNode;
	pageFor: string;
}

export const NavbarDashboard: React.FC<NavbarDashboardProps> = ({
	title,
	icon,
	pageFor,
}) => {
	return (
		<nav className="navbar-dashboard">
			<div
				className={`navbar-title-wrapper ${
					pageFor === 'admin' ? 'color-admin' : 'color-psikolog'
				}`}
			>
				{icon}
				<h1>{title}</h1>
			</div>
			<div className="navbar-actions-wrapper">
				<NavLink
					to={
						pageFor === 'admin'
							? '/admin/profile'
							: pageFor === 'psikolog'
							? '/psikolog/profile'
							: ''
					}
					className={({ isActive }) =>
						isActive
							? 'navbar-action-profile-active'
							: 'navbar-action-profile'
					}
				>
					<CgProfile />
				</NavLink>
				{/* {pageFor === 'psikolog' ? ( */}
				<NavLink
					to={
						pageFor === 'admin'
							? '/admin/notification'
							: pageFor === 'psikolog'
							? '/psikolog/notification'
							: ''
					}
					className={({ isActive }) =>
						isActive
							? 'navbar-action-notification-active'
							: 'navbar-action-notification'
					}
				>
					<MdNotifications />
				</NavLink>
				{/* ) : null} */}
			</div>
		</nav>
	);
};

export default NavbarDashboard;
