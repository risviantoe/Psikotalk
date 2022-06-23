import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/all';

interface SubMenuProps {
	item: {
		title: string;
		path: string;
		icon: React.ReactNode;
		subNav?: {
			title: string;
			path: string;
			icon: React.ReactNode;
		}[];
	};
}

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
	const [subnav, setSubnav] = useState<boolean>(false);

	const showSubnav = () => setSubnav(!subnav);
	return (
		<React.Fragment>
			<NavLink
				to={item.path}
				className={({ isActive }) =>
					isActive && item.path !== '#'
						? 'sidebar-menu-link sidebar-menu-active'
						: 'sidebar-menu-link'
				}
				onClick={item.subNav && showSubnav}
			>
				<div className="sidebar-menu-content">
					{item.icon} {item.title}
				</div>
				{subnav && item.subNav ? (
					<div className="sidebar-menu-dropdown">
						<IoMdArrowDropup />
					</div>
				) : !subnav && item.subNav ? (
					<div className="sidebar-menu-dropdown">
						<IoMdArrowDropdown />
					</div>
				) : null}
			</NavLink>
			{subnav &&
				item.subNav &&
				item.subNav.map((item, index) => {
					return (
						<NavLink
							to={item.path}
							key={index}
							className={({ isActive }) =>
								isActive
									? 'sidebar-menu-link sidebar-menu-active'
									: 'sidebar-menu-link'
							}
							style={{ padding: '18px 60px', marginTop: -5 }}
						>
							<div className="sidebar-menu-content">
								{item.icon} {item.title}
							</div>
						</NavLink>
					);
				})}
		</React.Fragment>
	);
};

export default SubMenu;