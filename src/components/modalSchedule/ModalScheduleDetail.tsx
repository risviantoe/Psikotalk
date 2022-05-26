import React from 'react';
import { Link } from 'react-router-dom';

import './ModalScheduleDetail.css'

interface ModalScheduleDetailProps {
	name: string;
	gender: string;
	date: string;
	clock: string;
	platform: string;
	link: string;
}

const ModalScheduleDetail: React.FC<ModalScheduleDetailProps> = ({
	name,
	gender,
	date,
	clock,
	platform,
	link,
}) => {
	return (
		<React.Fragment>
			<div className="profile-wrapper">
				<div className="profile-picture">
					<img src="/assets/images/profil01.png" alt="photoProfile" />
				</div>
				<div className="profile-data">
					<span className="profile-name">{name}</span>
					<span className="profile-gender">{gender}</span>
				</div>
			</div>
			<ul className="schedule-info">
				<li className="schedule-info-date">
					<i
						className="icon icon-date"
						style={{ background: '#00ADAC' }}
					/>
					<span>{date}</span>
				</li>
				<li className="schedule-info-clock">
					<i
						className="icon icon-clock"
						style={{ background: '#00ADAC' }}
					/>
					<span>{clock}</span>
				</li>
				<li className="schedule-info-platform">
					<i
						className="icon icon-platform"
						style={{ background: '#00ADAC' }}
					/>
					<span>{platform}</span>
				</li>
				<li className="schedule-info-link">
					<i
						className={
							platform === 'Chat'
								? 'icon icon-chat'
								: 'icon icon-link'
						}
						style={{ background: '#00ADAC' }}
					/>
					<i>
						{platform === 'Chat' ? (
							<a
								href={link}
								rel="noreferrer"
								className="text-link"
								target="_blank"
							>
								Menuju Chat {'>>'}
							</a>
						) : (
							<a
								href={link}
								rel="noreferrer"
								className="text-link"
								target="_blank"
							>
								{link}
							</a>
						)}
					</i>
				</li>
			</ul>
		</React.Fragment>
	);
};

export default ModalScheduleDetail;
