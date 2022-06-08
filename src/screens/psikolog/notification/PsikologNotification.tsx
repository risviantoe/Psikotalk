import React from 'react';
import { MdNotifications } from 'react-icons/allIcons';
import Notification from '../../../components/notification/Notification';
import Pagination from '../../../components/pagination/Pagination';

import './PsikologNotification.css'

const PsikologNotification = () => {
	return (
		<React.Fragment>
			<div className="psikolog__content--title color-psikolog">
				<MdNotifications size={60} />
				<h1>Notifikasi</h1>
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
