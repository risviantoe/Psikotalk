import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	MdSpaceDashboard,
	AiFillSchedule,
	BsPeopleFill,
	BsChatDotsFill,
	FaMoneyCheckAlt,
	MdLogout,
	MdHelp,
} from 'react-icons/allIcons';

import './Sidebar.css'

export const Sidebar = () => {
    return (
		<div className="sidebar-wrapper">
			<div className="sidebar-logo">
				<img src="/assets/images/logo-sidebar.png" alt="logo-sidebar" />
			</div>
			<div className="sidebar-menus-wrapper">
				<div className="sidebar-menus-list">
					<NavLink
						to="/psikolog/dashboard"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<MdSpaceDashboard size={25} /> Dashboard
					</NavLink>
					<NavLink
						to="/psikolog/schedule"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<AiFillSchedule size={25} />
						Jadwal
					</NavLink>
					<NavLink
						to="/psikolog/client"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<BsPeopleFill size={25} />
						Klien
					</NavLink>
					<NavLink
						to="/psikolog/income"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<FaMoneyCheckAlt size={25} />
						Pendapatan
					</NavLink>
					<NavLink
						to="!#"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<BsChatDotsFill size={25} />
						Chat
					</NavLink>
				</div>
				<div className="sidebar-menus-list">
					<NavLink
						to="/psikolog/help"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<MdHelp size={25} /> Bantuan
					</NavLink>
					<NavLink
						to="!#"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<MdLogout size={25} />
						Logout
					</NavLink>
				</div>
			</div>
		</div>
	);};
