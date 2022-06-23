import React, { useState } from 'react';
import { MdMarkEmailRead } from 'react-icons/md';

import { useOutletContext } from 'react-router-dom';
import Accordion from '../../../components/accordion/Accordion';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import { PageProps } from '../../../types/interface/page/Page';
import { accordionData } from './AccordionData';

import './PsikologHelp.css';

const PsikologHelp: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	const [question, setQuestion] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		setIsSubmitted(true);
		if (!question) return;

		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		setShowModal(true);
	};

	return (
		<React.Fragment>
			<div className="psikolog__content--body bg-white">
				<div className="psikolog__help--content-wrapper">
					<div className="psikolog__help--accordions-wrapper">
						{accordionData.map(({ title, content }) => (
							<Accordion title={title} content={content} />
						))}
					</div>
					<div className="psikolog__help--question-wrapper">
						<div className="psikolog__help--question-form">
							<label htmlFor="help-question">
								Pertanyaan Anda :
							</label>
							<textarea
								className={
									isSubmitted && !question ? 'form-error' : ''
								}
								name="help-question"
								id="help-question"
								cols={40}
								rows={15}
								placeholder="Ketikkan pertanyaan Anda..."
								value={question}
								onChange={(e) => setQuestion(e.target.value)}
							/>
							<div
								className="form-error-message"
								style={{ marginBottom: 20 }}
							>
								{isSubmitted && !question ? (
									<span>Pertanyaan wajib diisi!</span>
								) : null}
							</div>
							<Button
								name="Kirim Pertanyaan"
								style={{ width: '100%' }}
								onClick={() => onSubmit()}
								loading={loading}
							/>
						</div>
					</div>
				</div>
			</div>
			<Modal onClose={() => setShowModal(false)} show={showModal}>
				<div className="modal__question-sended">
					<MdMarkEmailRead size={100} color="#009595" />
					<h1>Berhasil Terkirim</h1>
					<span>
						Periksa email anda untuk medapatkan jawaban dari
						pertanyaan yang anda berikan
					</span>
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default PsikologHelp;
