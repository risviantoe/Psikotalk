import React from 'react';
import { CgSearch, CgProfile, MdNotifications } from 'react-icons/all';
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
						isActive ? 'navbar-action-active' : 'navbar-action'
					}
				>
					<CgProfile size={60} />
				</NavLink>
				{pageFor === 'psikolog' ? (
					<NavLink
						to="/psikolog/notification"
						className={({ isActive }) =>
							isActive ? 'navbar-action-active' : 'navbar-action'
						}
					>
						<MdNotifications size={40} />
					</NavLink>
				) : null}
			</div>
		</nav>
	);
};

export default NavbarDashboard;
