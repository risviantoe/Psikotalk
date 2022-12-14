import React from 'react';
import { IconCalendarTime } from '@tabler/icons';

import './Notification.css';
import { MdNotificationsActive } from 'react-icons/md';

interface NotificationProps {
	notificationType: string;
	text: React.ReactNode;
	time: string;
	size?: number;
}

const Notification: React.FC<NotificationProps> = ({
	notificationType,
	text,
	time,
	size = 30,
}) => {
	return (
		<div className="notification-item">
			<div className="notification-icon-text-wrapper">
				{notificationType === 'confirmation' ? (
					<MdNotificationsActive size={size} />
				) : (
					<IconCalendarTime size={size}></IconCalendarTime>
				)}
				<span>{text}</span>
			</div>
			<div className="notification-time">
				<span>{time}</span>
			</div>
		</div>
	);
};

export default Notification;
