import React from 'react';
import {
	MdSpaceDashboard,
	AiFillSchedule,
	BsPeopleFill,
	BsChatDotsFill,
	FaMoneyCheckAlt,
} from 'react-icons/all';

export const SidebarDashboardPsikolog = [
	{
		title: 'Dashboard',
		path: '/psikolog/dashboard',
		icon: <MdSpaceDashboard size={25} />,
	},
	{
		title: 'Jadwal',
		path: '/psikolog/schedule',
		icon: <AiFillSchedule size={25} />,
	},
	{
		title: 'Klien',
		path: '/psikolog/client',
		icon: <BsPeopleFill size={25} />,
	},
	{
		title: 'Pendapatan',
		path: '/psikolog/income',
		icon: <FaMoneyCheckAlt size={25} />,
	},
	{
		title: 'Chat',
		path: '/psikolog/dashboard',
		icon: <BsChatDotsFill size={25} />,
	},
];
