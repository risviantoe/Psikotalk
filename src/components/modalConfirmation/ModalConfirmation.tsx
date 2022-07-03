import React from 'react'
import Button from '../button/Button';


import './ModalConfirmation.css'

interface ModalConfirmationProps {
	text: string
	confirm?: boolean
	okButtonText?: string
	cancelButtonText?: string
	onOk?: () => void
	onClose: () => void
	loading?: boolean
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ onClose, text, confirm, okButtonText, cancelButtonText = 'Kembali', onOk, loading }) => {
  	return (
		<div className="modal-confirmation-wrapper">
			<div className="modal-confirmation__text-wrapper">
				<span>{text}</span>
			</div>
			<div className="modal-confirmation__button-wrapper">
				<Button name={cancelButtonText} color="secondary" onClick={onClose} />
				<Button name={confirm ? 'Batalkan' : okButtonText} color="primary" onClick={onOk} loading={loading} />
			</div>
		</div>
	);
}

export default ModalConfirmation
