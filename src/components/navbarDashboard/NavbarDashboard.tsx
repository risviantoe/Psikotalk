import React from 'react';
import { CgSearch, CgProfile, MdNotifications } from 'react-icons/allIcons';
import { NavLink } from 'react-router-dom';

import './NavbarDashboard.css'

export const NavbarDashboard = () => {
    return (
		<nav className="navbar-dashboard">
			<div className="navbar-search-wrapper">
				<div className="navbar-search">
					<CgSearch
						size={25}
						color="#006161"
						style={{
							position: 'absolute',
							transform: 'translateY(50%)',
							left: 10,
						}}
					/>
					<input
						type="text"
						placeholder="Cari ..."
						className="navbar-search-input"
					/>
				</div>
			</div>
			<div className="navbar-actions-wrapper">
				<NavLink
					to="/psikolog/profile"
					className={({ isActive }) =>
						isActive ? 'navbar-action-active' : 'navbar-action'
					}
				>
					<CgProfile size={60} />
				</NavLink>
				<NavLink
					to="/psikolog/notification"
					className={({ isActive }) =>
						isActive ? 'navbar-action-active' : 'navbar-action'
					}
				>
					<MdNotifications size={40} />
				</NavLink>
			</div>
		</nav>
	);
};

export default NavbarDashboard