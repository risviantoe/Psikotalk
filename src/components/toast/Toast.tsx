import React, { useState } from 'react';
import { BsCheckCircleFill, BsExclamationCircleFill } from 'react-icons/bs';
import Button from '../button/Button';

import './Toast.css';

interface ToastProps {
	type: string;
	message: string;
	show: boolean;
}

const Toast: React.FC<ToastProps> = ({ type, message, show }) => {

	return (
		<React.Fragment>
			<div id="toast" className={show ? `show ${type}` : type}>
				<div id="img">
					{type === 'success' ? (
						<BsCheckCircleFill size={30} />
					) : type === 'danger' ? (
						<BsExclamationCircleFill size={30} />
					) : null}
				</div>
				<div id="desc">{message}</div>
			</div>
		</React.Fragment>
	);
};

export default Toast;
