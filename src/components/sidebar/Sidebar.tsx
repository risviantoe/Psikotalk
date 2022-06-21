import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLogout, MdHelp } from 'react-icons/allIcons';

// import { sidebarData } from './SidebarData';
import './Sidebar.css';
import SubMenu from './SubMenu';

interface sidebarData {
	data: any[];
	pageFor: string;
}

export const Sidebar: React.FC<sidebarData> = ({ data, pageFor }) => {
	return (
		<div className="sidebar-wrapper">
			<div className="sidebar-logo">
				<img src="/assets/images/logo-sidebar.png" alt="logo-sidebar" />
			</div>
			<div className="sidebar-menus-wrapper">
				<div className="sidebar-menus-list">
					{data.map((item, index) => {
						return <SubMenu item={item} key={index} />;
					})}
				</div>
				<div className="sidebar-menus-list sidebar-menus-bottom">
					{pageFor !== 'admin' ? (
						<NavLink
							to="/psikolog/help"
							className={({ isActive }) =>
								isActive
									? 'sidebar-menu-link sidebar-menu-active'
									: 'sidebar-menu-link'
							}
						>
							<div className="sidebar-menu-content">
								<MdHelp size={25} /> Bantuan
							</div>
						</NavLink>
					) : null}

					<NavLink
						to="!#"
						className={({ isActive }) =>
							isActive
								? 'sidebar-menu-link sidebar-menu-active'
								: 'sidebar-menu-link'
						}
					>
						<div className="sidebar-menu-content">
							<MdLogout size={25} />
							Logout
						</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
};
