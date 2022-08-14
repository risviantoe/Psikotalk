import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ScheduleList from '../../../components/scheduleList/ScheduleList';

import './PsikologSchedule.css';
import Pagination from '../../../components/pagination/Pagination';
import { PageProps } from '../../../types/interface/page/Page';
import Search from '../../../components/search/Search';
import Button from '../../../components/button/Button';
import { psikologConsulService } from '../../../services';
import { Consultation } from '../../../types';
import moment from 'moment'

export const PsikologSchedule: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});
	const navigate = useNavigate()

	const [consul, setConsul] = useState<Array<Consultation>>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [showToastError, setShowToastError] = useState<boolean>(false);
	const [toastMsg, setToastMsg] = useState<string>('');

	const getConsul = async () => {
		setLoading(true);
		try {
			const res = await psikologConsulService.consultationGet();
			setConsul(res.data);
			setLoading(false);
			console.log(res);
		} catch (error: any) {
			console.log(error.response.statusText);
			setLoading(false);
			setShowToastError(true);
			setToastMsg(error.response.statusText);
			setTimeout(() => {
				setShowToastError(false);
			}, 5000);
		}
	};

	useEffect(() => {
		getConsul();
	}, []);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="Jadwal Terkini"
						onClick={() => navigate('/psikolog/schedule')}
						style={{ borderRadius: 30 }}
					/>
					<Button
						name="Riwayat"
						color="secondary"
						onClick={() => navigate('/psikolog/schedule/history')}
						style={{ borderRadius: 30 }}
					/>
				</div>
			</div>
			<div className="psikolog__content--body">
				<div className="psikolog-schedule-content">
					<ScheduleList
						day="Rabu"
						date="18 Mei"
						name="Muhammad Chandra Saputra"
						clock="07.00 - 09.00 WITA"
						type="schedule"
						confirm
					/>
					<ScheduleList
						day="Kamis"
						date="19 Mei"
						name="Jacky Rahman"
						clock="99.99 - 99.99 WITA"
						type="schedule"
					/>
				</div>
				<Pagination style={{ alignSelf: 'center' }} />
			</div>
		</React.Fragment>
	);
};
