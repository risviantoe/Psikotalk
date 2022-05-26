import React, { useState } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ModalConfirmation from '../modalConfirmation/ModalConfirmation';
import ModalScheduleDetail from '../modalSchedule/ModalScheduleDetail';

import './ScheduleList.css';

interface ScheduleListProps {
	day: string;
	date: string;
	name: string;
	clock: string;
	type: string;
	confirm?: boolean;
}

const ScheduleList: React.FC<ScheduleListProps> = ({
	day,
	date,
	name,
	clock,
	type,
	confirm = false,
}) => {
	const [showModalDetail, setShowModalDetail] = useState(false);
	const [showModalConfirm, setShowModalConfirm] = useState(false);

	return (
		<React.Fragment>
			<div className="psikolog-schedule-item">
				<div
					className="psikolog-item-day"
					style={
						type === 'schedule'
							? { background: '#00B29D' }
							: type === 'history'
							? { background: '#7E808B' }
							: { background: '#00B29D' }
					}
				>
					<span className="item-day">{day}</span>
					<span className="item-date">{date}</span>
				</div>
				<div className="psikolog-item-main">
					<span className="item-name">{name}</span>
					<span className="item-clock">{clock}</span>
					<div className="item-btn">
						{type === 'schedule' ? (
							<>
								<Button
									name={confirm ? 'Batalkan' : 'Konfirmasi'}
									onClick={() => setShowModalConfirm(true)}
									style={
										confirm
											? {
													borderRadius: 20,
													padding: '10px 14px',
													width: 140,
													background: '#7E808B',
													border: '1px solid #7E808B',
											  }
											: {
													borderRadius: 20,
													padding: '10px 14px',
													width: 140,
											  }
									}
								/>
								<Button
									name="Detail"
									onClick={() => setShowModalDetail(true)}
									style={{
										borderRadius: 20,
										padding: '10px 14px',
										width: 140,
									}}
								/>
							</>
						) : (
							<Button
								name="Detail"
								onClick={() => setShowModalDetail(true)}
								style={{
									borderRadius: 20,
									padding: '10px 14px',
									width: 140,
								}}
							/>
						)}
					</div>
				</div>
			</div>
			<Modal show={showModalConfirm} closeButton={false}>
				<ModalConfirmation
					text={
						confirm
							? 'Anda yakin membatalkan Jadwal Konsultasi?'
							: 'Konfirmasi Jadwal Konsultasi dengan Klien'
					}
					confirm={confirm}
					onClose={() => setShowModalConfirm(false)}
				/>
			</Modal>

			<Modal
				onClose={() => setShowModalDetail(false)}
				show={showModalDetail}
			>
				<ModalScheduleDetail
					name="M Chandra"
					gender="Pria"
					date="Senin, 16 April 2022"
					clock="09.00 - 10.00 WITA"
					platform="Zoom"
					link="https://zoom.us/j/9069558658?pwd=SmtJTnlibGtNQmg3aUhvODRFZTBNdz09"
				/>
			</Modal>
		</React.Fragment>
	);
};

export default ScheduleList;
