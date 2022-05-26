import React from 'react'
import Button from '../button/Button';


import './ModalConfirmation.css'

interface ModalConfirmationProps {
	text: string
	confirm?: boolean
	onClose: () => void
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ onClose, text, confirm }) => {
  	return (
		<div className="modal-confirmation-wrapper">
			<div className="modal-confirmation__text-wrapper">
				<span>{text}</span>
			</div>
			<div className="modal-confirmation__button-wrapper">
				<Button name="Kembali" color="secondary" onClick={onClose} />
				<Button name={confirm ? 'Batalkan' : 'Konfirmasi'} color="primary" />
			</div>
		</div>
	);
}

export default ModalConfirmation
