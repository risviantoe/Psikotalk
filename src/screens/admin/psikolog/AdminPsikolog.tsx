import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import Toast from '../../../components/toast/Toast';
import reducer from '../../../reducer/PsikologProfil.reducer';
import { adminService } from '../../../services';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/clientData';

import './AdminPsikolog.css';

const AdminPsikolog: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();

	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			name: '',
			username: '',
			email: '',
			gender: '',
			biodata: '',
			tanggal_lahir: '',
			nomor_hp: '',
			password: '',
			file_ijazah: '',
			surat_izin: '',
			images: '',
		},
	});

	const { isSubmitted, inputs } = state;
	const {
		name,
		username,
		email,
		gender,
		biodata,
		tanggal_lahir,
		nomor_hp,
		password,
		file_ijazah,
		surat_izin,
		images,
	} = inputs;

	const [loading, setLoading] = useState<boolean>(false);
	const [showToast, setShowToast] = useState<boolean>(false);
	const [toastMsg, setToastMsg] = useState<string>('');
	const [status, setStatus] = useState<string>('');

	const [imgPreviewSrc, setimgPreviewSrc] = useState<string>('');

	const showPreview = (e: any) => {
		if (e.target.files.length > 0) {
			setimgPreviewSrc(URL.createObjectURL(e.target.files[0]));
		}
	};

	const closeModalAddPsikolog = () => {
		setShowModalAddPsikolog(false);
		dispatch({ name: 'SET_IS_SUBMITTED', payload: false });
	};

	const onSubmit = async () => {
		dispatch({ name: 'SET_IS_SUBMITTED', payload: true });

		console.log(inputs);

		if (
			!name ||
			!username ||
			!email ||
			!gender ||
			!biodata ||
			!tanggal_lahir ||
			!nomor_hp ||
			!password ||
			!file_ijazah ||
			!surat_izin
			// !images
		)
			return;

		setLoading(true);

		try {
			const res = await adminService.psikologRegister(inputs);
			console.log('Response, ', res);
			setStatus('success');
			setLoading(false);
			setShowToast(true);
			setToastMsg('Psikolog berhasil ditambahkan');
			setShowModalAddPsikolog(false);
			setTimeout(() => {
				setShowToast(false);
			}, 5000);
			inputs.name = '';
			inputs.username = '';
			inputs.email = '';
			inputs.gender = '';
			inputs.biodata = '';
			inputs.tanggal_lahir = '';
			inputs.nomor_hp = '';
			inputs.password = '';
			inputs.file_ijazah = '';
			inputs.surat_izin = '';
			inputs.images = '';
			dispatch({ name: 'SET_IS_SUBMITTED', payload: false });
		} catch (error) {
			console.log('Error, ', error);
			setLoading(false);
			setShowToast(true);
			setToastMsg('Psikolog gagal ditambahkan');
			setStatus('danger');
		}
	};

	const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
	const [showModalAddPsikolog, setShowModalAddPsikolog] =
		useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="content-top-menu">
				<Search />
				<div className="content-top-menu-action">
					<Button
						name="+ Tambah Psikolog"
						onClick={() => setShowModalAddPsikolog(true)}
						style={{ borderRadius: 30 }}
					/>
				</div>
			</div>
			<div className="admin__content--body">
				<div className="admin__client--content-wrapper">
					<Table
						theadData={theadData}
						tbodyData={tbodyData}
						actionColumn
						action1={{
							name: 'Edit',
							color: 'primary',
							icon: 'icon-edit',
							onClick: () => setShowModalAddPsikolog(true),
						}}
						action2={{
							name: 'Hapus',
							color: 'danger',
							icon: 'icon-delete',
							onClick: () => setShowModalConfirm(true),
						}}
					/>
				</div>
			</div>
			<Modal show={showModalConfirm} closeButton={false}>
				<ModalConfirmation
					text="Anda yakin ingin menghapus data Psikolog?"
					okButtonText="Hapus"
					onClose={() => setShowModalConfirm(false)}
				/>
			</Modal>
			<Modal
				show={showModalAddPsikolog}
				onClose={() => closeModalAddPsikolog()}
				style={{ width: '80%', marginTop: '40vh' }}
			>
				<div
					className="psikolog-profile-form-wrapper"
					style={{ display: 'block' }}
				>
					<div
						className="profile-picture-wrapper"
						style={{ marginBottom: 30 }}
					>
						<img
							src={
								imgPreviewSrc !== ''
									? imgPreviewSrc
									: '/assets/images/profil01.png'
							}
							alt="photoProfile"
						/>
						<label
							htmlFor="profile-picture-change"
							className="button primary circle"
							style={{ border: '5px solid #fff' }}
						>
							<i className="icon icon-camera" />
						</label>
						<input
							type="file"
							name="profile-picture"
							id="profile-picture-change"
							hidden
							onChange={(e) => showPreview(e)}
						/>
					</div>
					<form className="form psikolog-profile-form">
						<div className="psikolog-profile-form-left">
							<div className="form-input-group">
								<label htmlFor="fullName">Nama lengkap</label>
								<input
									type="text"
									name="name"
									id="fullName"
									className={
										isSubmitted && !name ? 'form-error' : ''
									}
									value={state.inputs.name}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												name: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !name ? (
										<span>Nama lengkap wajib diisi!</span>
									) : null}
								</div>
							</div>

							<div className="form-input-group">
								<label htmlFor="uname">Username</label>
								<input
									type="text"
									name="username"
									id="uname"
									className={
										isSubmitted && !username
											? 'form-error'
											: ''
									}
									value={state.inputs.username}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												username: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !username ? (
										<span>Username wajib diisi!</span>
									) : null}
								</div>
							</div>

							<div className="form-input-inline-radio">
								<div className="form-input-group">
									<label>Jenis kelamin</label>
									<div className="form-input-group-radio">
										<div className="form-input-radio">
											<input
												className={
													isSubmitted && !gender
														? 'form-error'
														: ''
												}
												type="radio"
												name="gender"
												id="gender-male"
												value="Laki - laki"
												onChange={(e) =>
													dispatch({
														name: 'SET_INPUTS',
														payload: {
															gender: e.target
																.value,
														},
													})
												}
											/>
											<label htmlFor="gender-male">
												Laki - laki
											</label>
										</div>

										<div className="form-input-radio">
											<input
												className={
													isSubmitted && !gender
														? 'form-error'
														: ''
												}
												type="radio"
												name="gender"
												id="gender-female"
												value="Perempuan"
												onChange={(e) =>
													dispatch({
														name: 'SET_INPUTS',
														payload: {
															gender: e.target
																.value,
														},
													})
												}
											/>
											<label htmlFor="gender-female">
												Perempuan
											</label>
										</div>
									</div>
									<div className="form-error-message">
										{isSubmitted && !gender ? (
											<span>
												Jenis Kelamin wajib diisi!
											</span>
										) : null}
									</div>
								</div>
							</div>

							<div className="form-input-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									className={
										isSubmitted && !email
											? 'form-error'
											: ''
									}
									value={state.inputs.email}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: { email: e.target.value },
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !email ? (
										<span>Email wajib diisi!</span>
									) : null}
								</div>
							</div>

							<div className="form-input-group">
								<label htmlFor="about">Tentang diri</label>
								<textarea
									name="aboutMe"
									id="about"
									rows={15}
									className={
										isSubmitted && !biodata
											? 'form-error'
											: ''
									}
									value={state.inputs.biodata}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												biodata: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !biodata ? (
										<span>Tentang diri wajib diisi!</span>
									) : null}
								</div>
							</div>
						</div>

						<div className="psikolog-profile-form-right">
							<div className="form-input-group">
								<label htmlFor="birthDate">Tanggal Lahir</label>
								<input
									type="date"
									name="birthDate"
									id="birthDate"
									className={
										isSubmitted && !tanggal_lahir
											? 'form-error'
											: ''
									}
									value={state.inputs.tanggal_lahir}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												tanggal_lahir: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !tanggal_lahir ? (
										<span>Tanggal lahir wajib diisi!</span>
									) : null}
								</div>
							</div>

							<div className="form-input-group">
								<label htmlFor="phone">Nomor Hp</label>
								<input
									type="number"
									name="phone"
									id="phone"
									className={
										isSubmitted && !nomor_hp
											? 'form-error'
											: ''
									}
									value={state.inputs.nomor_hp}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												nomor_hp: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !nomor_hp ? (
										<span>Nomor Hp wajib diisi!</span>
									) : null}
								</div>
							</div>

							<div className="form-input-group">
								<label htmlFor="educational-stage">
									Jenjang Pendidikan
								</label>
								<select
									name="educational-stage"
									id="educational-stage"
									// className={
									// 	isSubmitted && !educationalStage
									// 		? 'form-error'
									// 		: ''
									// }
									// value={state.inputs.educationalStage}
									// onChange={(e) =>
									// 	dispatch({
									// 		name: 'SET_INPUTS',
									// 		payload: {
									// 			educationalStage:
									// 				e.target.value,
									// 		},
									// 	})
									// }
								>
									<option>Pilih Jenjang Pendidikan</option>
									<option value="S1">S1</option>
									<option value="S2">S2</option>
									<option value="S3">S3</option>
								</select>
								{/* <div className="form-error-message">
									{isSubmitted && !educationalStage ? (
										<span>
											Jenjang pendidikan wajib diisi!
										</span>
									) : null}
								</div> */}
							</div>

							<div className="form-input-group">
								<label htmlFor="certificate">
									Ijazah Jenjang Pendidikan
								</label>
								<input
									type="file"
									name="certificate"
									id="certificate"
									className={
										isSubmitted && !file_ijazah
											? 'form-error'
											: ''
									}
									value={state.inputs.file_ijazah}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												file_ijazah: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !file_ijazah ? (
										<span>Ijazah wajib diisi!</span>
									) : null}
								</div>
							</div>

							<div className="form-input-group">
								<label htmlFor="sipp">
									Surat Izin Praktik Psikologi
								</label>
								<input
									type="file"
									name="sipp"
									id="sipp"
									className={
										isSubmitted && !surat_izin
											? 'form-error'
											: ''
									}
									value={state.inputs.surat_izin}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												surat_izin: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !surat_izin ? (
										<span>SIPP wajib diisi!</span>
									) : null}
								</div>
							</div>

							<div className="form-input-group">
								<label htmlFor="password">Password</label>
								<div style={{ position: 'relative' }}>
									<input
										type="password"
										name="password"
										id="password"
										style={{ width: '100%' }}
										className={
											isSubmitted && !password
												? 'form-error'
												: ''
										}
										value={state.inputs.password}
										onChange={(e) =>
											dispatch({
												name: 'SET_INPUTS',
												payload: {
													password: e.target.value,
												},
											})
										}
									/>

									<Button
										name="Ganti password"
										color="secondary"
										type="button"
										style={{
											position: 'absolute',
											right: 20,
											padding: '5px 15px',
											top: 10,
											fontSize: 14,
										}}
									/>
								</div>
								<div className="form-error-message">
									{isSubmitted && !password ? (
										<span>Password wajib diisi!</span>
									) : null}
								</div>
							</div>

							<Button
								name="Simpan Perubahan"
								color="primary"
								style={{
									width: '100%',
									marginTop: 30,
									height: 48,
								}}
								loading={loading}
								onClick={() => onSubmit()}
							/>
						</div>
					</form>
				</div>
			</Modal>
			<Toast show={showToast} type={status} message={toastMsg} />
		</React.Fragment>
	);
};

export default AdminPsikolog;
