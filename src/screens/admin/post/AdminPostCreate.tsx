import React, { useReducer, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import 'trix/dist/trix';
import 'trix/dist/trix.css';
import { TrixEditor } from 'react-trix';
import { PageProps } from '../../../types/interface/page/Page';
import Button from '../../../components/button/Button';

import reducer from '../../../reducer/Post.reducer';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';

const AdminPostCreate: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	const [showModal, setShowModal] = useState<boolean>(false)

	const navigate = useNavigate();

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			title: '',
			category: '',
			body: '',
		},
	});

	const onEditorReady = (editor: any) => {
		editor.insertString('Ready');
	};

	const onHandleChange = (text: string, html: any) => {

		dispatch({
			name: 'SET_INPUTS',
			payload: { body: html },
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
	const { title, category, body } = inputs;

	const onSubmit = () => {
		dispatch({ name: 'SET_IS_SUBMITTED' });
	};

	const onBack = () => {
		if (inputs.title || inputs.category || inputs.body) setShowModal(true)

		navigate('/')
	};

	return (
		<React.Fragment>
			<div className="admin__content--body">
				<div className="admin__post--content-wrapper">
					<div className="post--input-wrapper">
						<div className="post--input-group">
							<label htmlFor="post-title">Judul</label>
							<input
								name="post-title"
								type="text"
								id="post-title"
								value={state.inputs.title}
								className={
									isSubmitted && !title ? 'form-error' : ''
								}
								onChange={(e) =>
									dispatch({
										name: 'SET_INPUTS',
										payload: { title: e.target.value },
									})
								}
							/>
							<div className="form-error-message">
								{isSubmitted && !title ? (
									<span>Judul wajib diisi!</span>
								) : null}
							</div>
						</div>
						<div className="post--input-group">
							<label htmlFor="post-category">Kategori</label>
							<select
								name="post-category"
								id="post-category"
								value={state.inputs.category}
								className={
									isSubmitted && !category ? 'form-error' : ''
								}
								onChange={(e) =>
									dispatch({
										name: 'SET_INPUTS',
										payload: { category: e.target.value },
									})
								}
							>
								<option>Pilih kategori</option>
								<option value="artikel">Artikel</option>
								<option value="info terkini">
									Info terkini
								</option>
							</select>
							<div className="form-error-message">
								{isSubmitted && !category ? (
									<span>Kategori wajib diisi!</span>
								) : null}
							</div>
						</div>
						<TrixEditor
							onChange={onHandleChange}
							onEditorReady={onEditorReady}
							mergeTags={mergeTags}
							className={isSubmitted && !body ? 'form-error' : ''}
						/>
						<div className="form-error-message">
							{isSubmitted && !body ? (
								<span>Isi postingan tidak boleh kosong!</span>
							) : null}
						</div>
					</div>
					<div className="post--action-wrapper">
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
					onOk={() => navigate('/admin/post')}
					onClose={() => setShowModal(false)}
				/>
			</Modal>
		</React.Fragment>
	);
};

export default AdminPostCreate;
