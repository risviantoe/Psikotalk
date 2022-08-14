import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaClipboardList, FaPeopleArrows, FaUserMd } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { IoIosPaper, IoIosPeople, IoMdPeople } from 'react-icons/io';
import { MdAccessTimeFilled, MdPayments, MdPriceChange, MdSpaceDashboard } from 'react-icons/md';

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
		path: '#',
		icon: <FaUserMd size={25} />,
		subNav: [
			{
				title: 'Data Psikolog',
				path: '/admin/psikolog',
				icon: <IoIosPeople size={25} />,
			},
			{
				title: 'Data Konsultasi',
				path: '/admin/consultation',
				icon: <IoMdPeople size={25} />,
			},
		],
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
