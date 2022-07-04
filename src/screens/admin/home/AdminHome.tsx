import React, { useEffect } from 'react';
import CardHome from '../../../components/cardHome/CardHome';

import '../MainAdmin.css';
import './AdminHome.css';
import { useOutletContext } from 'react-router-dom';
import { PageProps } from '../../../types/interface/page/Page';

export const AdminHome: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	return (
		<React.Fragment>
			<div className="admin__content--body">
				<div className="admin-home-content-wrapper">
					<div className="admin-home-card-wrapper">
						<CardHome
							title={'Jumlah klien'}
							total={1280}
							icon={'icon-peoples'}
							color={'#00ADAC'}
						/>
						<CardHome
							title={'Jumlah Bank Soal'}
							total={28}
							icon={'icon-list'}
							color={'#0A6B72'}
						/>
						<CardHome
							title={'Jumlah Psikolog'}
							total={30}
							icon={'icon-data'}
							color={'#009289'}
						/>
						<CardHome
							title={'Jumlah Artikel'}
							total={120}
							icon={'icon-articel'}
							color={'#00B29D'}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
