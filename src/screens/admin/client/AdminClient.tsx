import React from 'react';
import { BsPeopleFill } from 'react-icons/allIcons';
import Button from '../../../components/button/Button';
import Table from '../../../components/table/Table';

import './AdminClient.css';

const AdminClient = () => {
	const theadData = ['No.', 'Avatar', 'Nama', 'Email', 'Gender', 'status'];

	const tbodyData = [
		{
			id: '1',
			items: [
				'1',
				<img
					className="table__avatar"
					src="/assets/images/profil01.png"
					alt="avatar"
				/>,
				'Johnathan Alex',
				'Johnathan-Alex@email.com',
				'Laki-laki',
				'menikah',
			],
		},
		{
			id: '2',
			items: [
				'2',
				<img
					className="table__avatar"
					src="/assets/images/profil01.png"
					alt="avatar"
				/>,
				'Johnathan Alex Christine',
				'Johnathan-Alex@email.com',
				'Laki-laki',
				'menikah',
			],
		},
		{
			id: '3',
			items: [
				'3',
				<img
					className="table__avatar"
					src="/assets/images/profil01.png"
					alt="avatar"
				/>,
				'Muhammad Chandra Saputra Nugroho Pangestu Sodhikin',
				'Johnathan-Alex@email.com',
				'Perempuan',
				'menikah',
			],
		},
	];

	return (
		<React.Fragment>
			<div className="admin__content--title color-admin">
				<BsPeopleFill size={60} />
				<h1>Data Klien</h1>
			</div>
			<div className="admin__content--body">
				<div className="admin__client--content-wrapper">
					<Table
						theadData={theadData}
						tbodyData={tbodyData}
						actionColumn
						action1={{
							name: 'Edit Profil',
							color: 'primary',
							icon: 'icon-edit',
						}}
						action2={{
							name: 'Hapus',
							color: 'danger',
							icon: 'icon-delete',
						}}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AdminClient;
