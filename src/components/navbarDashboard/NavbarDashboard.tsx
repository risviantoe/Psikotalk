import React from 'react';
import { CgSearch, CgProfile, MdNotifications } from 'react-icons/allIcons';
import { Link } from 'react-router-dom';

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
			<div className="navbar-actions">
				<Link to="/psikolog/profile" className="navbar-action-profile">
					<CgProfile size={60} color="#7E808B" />
				</Link>
				<Link to="" className="navbar-action-notification">
					<MdNotifications size={40} color="#7E808B" />
				</Link>
			</div>
		</nav>
	);
};

export default NavbarDashboard