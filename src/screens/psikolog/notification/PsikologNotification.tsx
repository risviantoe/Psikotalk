import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Notification from '../../../components/notification/Notification';
import Pagination from '../../../components/pagination/Pagination';
import Search from '../../../components/search/Search';
import { PageProps } from '../../../types/interface/page/Page';

import './PsikologNotification.css';

const PsikologNotification: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	const notifDumyData = [
		{
			notificationType: 'reminder',
			text: (
				<span>
					Segera konfirmasi pembayaran dari <b>Manuel Sabari</b>
				</span>
			),
			time: '20.14',
		},
		{
			notificationType: 'confirmation',
			text: (
				<span>
					Pembayaran baru dari <b>Manuel Sabari</b>
				</span>
			),
			time: '03 Mar 2022',
		},
	];

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
			</div>
			<div className="psikolog__content--body">
				<div className="psikolog__notification--content-wrapper">
					{notifDumyData
						? notifDumyData.map((notif) => (
								<Notification
									notificationType={notif.notificationType}
									text={notif.text}
									time={notif.time}
								/>
						))
						: ''}
				</div>
				<Pagination style={{ alignSelf: 'center' }} />
			</div>
		</React.Fragment>
	);
};

export default PsikologNotification;
