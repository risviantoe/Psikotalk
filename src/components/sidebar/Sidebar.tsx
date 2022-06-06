import React from 'react';
import { Link } from 'react-router-dom';
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
					<Link to="/psikolog/dashboard" className="sidebar-menu-link">
						<MdSpaceDashboard size={25} /> Dashboard
					</Link>
					<Link to="/psikolog/schedule" className="sidebar-menu-link">
						<AiFillSchedule size={25} />
						Jadwal
					</Link>
					<Link to="/psikolog/client" className="sidebar-menu-link">
						<BsPeopleFill size={25} />
						Klien
					</Link>
					<Link to="" className="sidebar-menu-link">
						<FaMoneyCheckAlt size={25} />
						Pendapatan
					</Link>
					<Link to="" className="sidebar-menu-link">
						<BsChatDotsFill size={25} />
						Chat
					</Link>
				</div>
				<div className="sidebar-menus-list">
					<Link to="" className="sidebar-menu-link">
						<MdHelp size={25} /> Bantuan
					</Link>
					<Link to="" className="sidebar-menu-link">
						<MdLogout size={25} />
						Logout
					</Link>
				</div>
			</div>
		</div>
	);};
