/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Button from '../button/Button'

import './Modal.css'

interface ModalProps {
	show: boolean
	closeButton?: boolean
	onClose?: () => void
	style?: {}
}

const Modal: React.FC<ModalProps> = ({
	children,
	closeButton = true,
	show = false,
	onClose,
	style
}) => {

	if (!show) {
		return null
	}
	
	return (
		<div className="modal">
			<div className="modal-content" style={style}>
				{
					closeButton ? 
						<Button
							className="btn-close"
							color="primary"
							icon="icon-cross"
							iconSize={15}
							type="circle"
							size="small"
							onClick={onClose}
						/> : null
				}
				
				{ children }
			</div>
		</div>
	);
}

export default Modal

