import React from 'react';
import {
	MdSpaceDashboard,
	MdPayments,
	BsPeopleFill,
	FaUserMd,
	MdAccessTimeFilled,
	GoChecklist,
	IoIosPaper,
	FaClipboardList,
	MdPriceChange,
} from 'react-icons/all';

export const SidebarDashboardAdmin = [
	{
		title: 'Dashboard',
		path: '/admin/dashboard',
		icon: <MdSpaceDashboard size={25} />,
	},
	{
		title: 'Klien',
		path: '/admin/client',
		icon: <BsPeopleFill size={25} />,
	},
	{
		title: 'Pembayaran',
		path: '#',
		icon: <MdPayments size={25} />,
		subNav: [
			{
				title: 'Konfirmasi',
				path: '/admin/payment/confirmation',
				icon: <GoChecklist />,
			},
			{
				title: 'Riwayat',
				path: '/admin/payment/history',
				icon: <MdAccessTimeFilled />,
			},
		],
	},
	{
		title: 'Psikolog',
		path: '/admin/psikolog',
		icon: <FaUserMd size={25} />,
	},
	{
		title: 'Postingan',
		path: '/admin/post',
		icon: <IoIosPaper size={25} />,
	},
	{
		title: 'Bank Soal',
		path: '/admin/bank-question',
		icon: <FaClipboardList size={25} />,
	},
	{
		title: 'Harga',
		path: '/admin/price',
		icon: <MdPriceChange size={25} />,
	},
];
