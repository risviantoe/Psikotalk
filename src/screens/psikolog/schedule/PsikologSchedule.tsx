import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleList from '../../../components/scheduleList/ScheduleList';
import { AiFillSchedule } from 'react-icons/allIcons';

import './PsikologSchedule.css';
import Pagination from '../../../components/pagination/Pagination';

export const PsikologSchedule = () => {
	return (
		<React.Fragment>
			<div className="psikolog__content--title color-psikolog">
				<AiFillSchedule size={60} color="#006161" />
				<h1>Jadwal Konsultasi</h1>
			</div>
			<div className="psikolog__content--body" style={{ marginTop: 50 }}>
				<div className="psikolog-schedule-menu">
					<Link to="/psikolog/schedule" className="button active">
						Jadwal Terkini
					</Link>
					<Link
						to="/psikolog/schedule/history"
						className="button bg-white"
					>
						Riwayat
					</Link>
				</div>
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
