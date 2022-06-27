import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import 'trix/dist/trix';
import 'trix/dist/trix.css';
import { TrixEditor } from 'react-trix';
import { PageProps } from '../../../types/interface/page/Page';
import Button from '../../../components/button/Button';

import reducer from '../../../reducer/Question.reducer';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';

import './AdminQuestion.css';

const AdminQuestionCreate: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const [showModal, setShowModal] = useState<boolean>(false);
	const navigate = useNavigate();
	const opsi = ['Opsi 1', 'Opsi 2', 'Opsi 3', 'Opsi 4'];
	// const opsi = ['opsi1', 'opsi2', 'opsi3', 'opsi4'];

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			question: '',
			opsi1: '',
			opsi2: '',
			opsi3: '',
			opsi4: '',
		},
	});

	const onEditorReady = (editor: any) => {};

	const onHandleQuestionChange = (text: string, html: any) => {
		dispatch({
			name: 'SET_INPUTS',
			payload: { question: html },
		});

		console.log('text ', text);
		console.log('html ', html);
	};

	const onHandleOpsi1Change = (text: string, html: any) => {
		dispatch({
			name: 'SET_INPUTS',
			payload: { opsi1: html },
		});

		console.log('text ', text);
		console.log('html ', html);
	};

	const onHandleOpsi2Change = (text: string, html: any) => {
		dispatch({
			name: 'SET_INPUTS',
			payload: { opsi2: html },
		});

		console.log('text ', text);
		console.log('html ', html);
	};

	const onHandleOpsi3Change = (text: string, html: any) => {
		dispatch({
			name: 'SET_INPUTS',
			payload: { opsi3: html },
		});

		console.log('text ', text);
		console.log('html ', html);
	};

	const onHandleOpsi4Change = (text: string, html: any) => {
		dispatch({
			name: 'SET_INPUTS',
			payload: { opsi4: html },
		});

		console.log('text ', text);
		console.log('html ', html);
	};

	const mergeTags = [
		{
			trigger: '@',
			tags: [
				{ name: 'Dominic St-Pierre', tag: '@dominic' },
				{ name: 'John Doe', tag: '@john' },
			],
		},
		{
			trigger: '{',
			tags: [
				{ name: 'First name', tag: '{{ .FirstName }}' },
				{ name: 'Last name', tag: '{{ .LastName }}' },
			],
		},
	];

	const { isSubmitted, inputs } = state;
	const { question, opsi1, opsi2, opsi3, opsi4 } = inputs;

	const onSubmit = () => {
		dispatch({ name: 'SET_IS_SUBMITTED' });
	};

	const onBack = () => {
		if (
			inputs.question ||
			inputs.opsi1 ||
			inputs.opsi2 ||
			inputs.opsi3 ||
			inputs.opsi4
		)
			setShowModal(true);
	};
	return (
		<React.Fragment>
			<div className="admin__content--body">
				<div className="admin__question--content-wrapper">
					<div className="question--input-wrapper input-question-wrapper">
						<label>Butir Soal</label>
						<TrixEditor
							onChange={onHandleQuestionChange}
							onEditorReady={onEditorReady}
							mergeTags={mergeTags}
							className={
								isSubmitted && !question ? 'form-error' : ''
							}
						/>
						<div className="form-error-message">
							{isSubmitted && !question ? (
								<span>Isi postingan tidak boleh kosong!</span>
							) : null}
						</div>
					</div>
					<div className="question--input-wrapper">
						<label>Opsi 1</label>
						<TrixEditor
							onChange={onHandleOpsi1Change}
							onEditorReady={onEditorReady}
							mergeTags={mergeTags}
							className={
								isSubmitted && !opsi1 ? 'form-error' : ''
							}
						/>
						<div className="form-error-message">
							{isSubmitted && !opsi1 ? (
								<span>Opsi 1 tidak boleh kosong!</span>
							) : null}
						</div>
					</div>
					<div className="question--input-wrapper">
						<label>Opsi 2</label>
						<TrixEditor
							onChange={onHandleOpsi2Change}
							onEditorReady={onEditorReady}
							mergeTags={mergeTags}
							className={
								isSubmitted && !opsi2 ? 'form-error' : ''
							}
						/>
						<div className="form-error-message">
							{isSubmitted && !opsi2 ? (
								<span>Opsi 2 tidak boleh kosong!</span>
							) : null}
						</div>
					</div>
					<div className="question--input-wrapper">
						<label>Opsi 3</label>
						<TrixEditor
							onChange={onHandleOpsi3Change}
							onEditorReady={onEditorReady}
							mergeTags={mergeTags}
							className={
								isSubmitted && !opsi3 ? 'form-error' : ''
							}
						/>
						<div className="form-error-message">
							{isSubmitted && !opsi3 ? (
								<span>Opsi 3 tidak boleh kosong!</span>
							) : null}
						</div>
					</div>
					<div className="question--input-wrapper">
						<label>Opsi 4</label>
						<TrixEditor
							onChange={onHandleOpsi4Change}
							onEditorReady={onEditorReady}
							mergeTags={mergeTags}
							className={
								isSubmitted && !opsi4 ? 'form-error' : ''
							}
						/>
						<div className="form-error-message">
							{isSubmitted && !opsi4 ? (
								<span>Opsi 4 tidak boleh kosong!</span>
							) : null}
						</div>
					</div>
					
					<div className="question--input-wrapper">
						<label htmlFor="answer">Pilih jawaban</label>
						<select name="answer" id="answer">
							<option>Pilih jawaban yang benar</option>
							<option value="opsi 1">Opsi 1</option>
							<option value="opsi 2">Opsi 2</option>
							<option value="opsi 3">Opsi 3</option>
							<option value="opsi 4">Opsi 4</option>
						</select>
					</div>
					<div className="question--input-wrapper">
						<label htmlFor="question-point">Poin</label>
						<input type="number" name="point" id="question-point" />
					</div>

					<div className="question--action-wrapper">
						<Button
							name="Kembali"
							color="secondary"
							onClick={() => onBack()}
						/>
						<Button name="Simpan" onClick={() => onSubmit()} />
					</div>
				</div>
			</div>
			<Modal show={showModal} closeButton={false}>
				<ModalConfirmation
					text="Apa yang sudah kamu tulis akan hilang. Apakah anda yakin untuk keluar dari halaman ini?"
					okButtonText="Yakin"
					cancelButtonText="Cancel"
					onOk={() => navigate('/admin/bank-question')}
					onClose={() => setShowModal(false)}
				/>
			</Modal>
		</React.Fragment>
	);
};

export default AdminQuestionCreate;
