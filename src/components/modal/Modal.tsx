/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Button from '../button/Button'

import './Modal.css'

interface ModalProps {
	show: boolean
	closeButton?: boolean
	onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({
	children,
	closeButton = true,
	show = false,
	onClose
}) => {

	if (!show) {
		return null
	}
	
	return (
		<div className="modal">
			<div className="modal-content">
				{
					closeButton ? 
						<Button
							color="primary"
							icon="icon-cross"
							iconSize={15}
							type="circle"
							size="small"
							style={{ position: 'absolute', right: -28, top: -30, border: '4px solid #fff', height: 60, width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							onClick={onClose}
						/> : null
				}
				
				{ children }
			</div>
		</div>
	);
}

export default Modal

