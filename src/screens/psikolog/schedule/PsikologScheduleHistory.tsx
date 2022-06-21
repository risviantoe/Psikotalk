import React from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import Button from '../../../components/button/Button'
import ScheduleList from "../../../components/scheduleList/ScheduleList"
import { AiFillSchedule } from 'react-icons/all';

import './PsikologSchedule.css'
import Pagination from '../../../components/pagination/Pagination';
import { PageProps } from '../../../types/interface/page/Page';
import Search from '../../../components/search/Search';

export const PsikologScheduleHistory: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="Jadwal Terkini"
						color="secondary"
						onClick={() => navigate('/psikolog/schedule')}
						style={{ borderRadius: 30 }}
					/>
					<Button
						name="Riwayat"
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
						name="Muhammad Chandra Saputra Ramadhan"
						clock="07.00 - 09.00 WITA"
						type="history"
					/>
					<ScheduleList
						day="Kamis"
						date="19 Mei"
						name="Jacky Rahman"
						clock="99.99 - 99.99 WITA"
						type="history"
					/>
				</div>
				<Pagination style={{ alignSelf: 'center' }} />
			</div>
		</React.Fragment>
	);
};
