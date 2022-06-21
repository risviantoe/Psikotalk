import React from 'react';
import { MdNotifications } from 'react-icons/all';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Notification from '../../../components/notification/Notification';
import Pagination from '../../../components/pagination/Pagination';
import Search from '../../../components/search/Search';
import { PageProps } from '../../../types/interface/page/Page';

import './PsikologNotification.css'

const PsikologNotification: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
			</div>
			<div className="psikolog__content--body">
				<div className="psikolog__notification--content-wrapper">
					<Notification
						notificationType="confirmation"
						text="Segara konfirmasi Jadwal Klien"
						time="20.14"
					/>
					<Notification
						notificationType="reminder"
						text="Pengingat Jadwal Konsultasi"
						time="15 Jan"
					/>
				</div>
				<Pagination style={{ alignSelf: 'center' }} />
			</div>
		</React.Fragment>
	);
};

export default PsikologNotification;
