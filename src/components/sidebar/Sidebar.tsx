import React from 'react';
import { MdHelp, MdLogout } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { storageService } from '../../services';

// import { sidebarData } from './SidebarData';
import './Sidebar.css';
import SubMenu from './SubMenu';

interface sidebarData {
	data: any[];
	pageFor: string;
}


export const Sidebar: React.FC<sidebarData> = ({ data, pageFor }) => {
	const navigate = useNavigate();

	const logout = (): void => {
		try {
			if (pageFor === 'admin') {
				navigate('/admin/signin');
			} else if (pageFor === 'psikolog') {
				navigate('/psikolog/signin');
			}
			storageService.removeToken();
		} catch (error) {
			console.log(error);
			
		}
	};
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

					<div
						className="sidebar-menu-link"
						onClick={() => logout()}
						style={{ cursor: 'pointer' }}
					>
						<div className="sidebar-menu-content">
							<MdLogout size={25} />
							Logout
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
