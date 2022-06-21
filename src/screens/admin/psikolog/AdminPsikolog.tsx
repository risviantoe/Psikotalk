import React, { useReducer, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import ModalConfirmation from '../../../components/modalConfirmation/ModalConfirmation';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import reducer from '../../../reducer/PsikologProfil.reducer';
import { adminService } from '../../../services';
import { PageProps } from '../../../types/interface/page/Page';
import { theadData, tbodyData } from '../dataDumy/clientData';

import './AdminPsikolog.css';

const AdminPsikolog: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			fullname: '',
			username: '',
			gender: '',
			email: '',
			about: '',
			birthDate: '',
			phone: '',
			educationalStage: '',
			certificate: '',
			sipp: '',
			password: '',
		},
	});

	const { isSubmitted, inputs } = state;
	const {
		fullname,
		username,
		gender,
		email,
		about,
		birthDate,
		phone,
		educationalStage,
		certificate,
		sipp,
		password,
	} = inputs;

	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = async () => {
		dispatch({ name: 'SET_IS_SUBMITTED' });

		if (
			!fullname ||
			!username ||
			!gender ||
			!email ||
			!about ||
			!birthDate ||
			!phone ||
			!educationalStage ||
			!certificate ||
			!sipp ||
			!password
		) return

		setLoading(true);

		try {
			// const res = await adminService.psikologRegister(inputs)
		} catch (error) {
			
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
				onClose={() => setShowModalAddPsikolog(false)}
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
							src="/assets/images/profil01.png"
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
										isSubmitted && !fullname
											? 'form-error'
											: ''
									}
									value={state.inputs.fullname}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												fullname: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !fullname ? (
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
												type="radio"
												name="gender"
												id="gender-male"
												defaultChecked
											/>
											<label htmlFor="gender-male">
												Laki - laki
											</label>
										</div>
										<div className="form-input-radio">
											<input
												type="radio"
												name="gender"
												id="gender-female"
											/>
											<label htmlFor="gender-female">
												Perempuan
											</label>
										</div>
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
										isSubmitted && !about
											? 'form-error'
											: ''
									}
									value={state.inputs.about}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: { about: e.target.value },
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !about ? (
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
										isSubmitted && !birthDate
											? 'form-error'
											: ''
									}
									value={state.inputs.birthDate}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												birthDate: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !birthDate ? (
										<span>Nama lengkap wajib diisi!</span>
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
										isSubmitted && !phone
											? 'form-error'
											: ''
									}
									value={state.inputs.phone}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: { phone: e.target.value },
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !phone ? (
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
									className={
										isSubmitted && !educationalStage
											? 'form-error'
											: ''
									}
									value={state.inputs.educationalStage}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												educationalStage:
													e.target.value,
											},
										})
									}
								>
									<option>Pilih Jenjang Pendidikan</option>
									<option value="S1">S1</option>
									<option value="S2">S2</option>
									<option value="S3">S3</option>
								</select>
								<div className="form-error-message">
									{isSubmitted && !phone ? (
										<span>
											Jenjang pendidikan wajib diisi!
										</span>
									) : null}
								</div>
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
										isSubmitted && !certificate
											? 'form-error'
											: ''
									}
									value={state.inputs.certificate}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: {
												certificate: e.target.value,
											},
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !sipp ? (
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
										isSubmitted && !sipp ? 'form-error' : ''
									}
									value={state.inputs.sipp}
									onChange={(e) =>
										dispatch({
											name: 'SET_INPUTS',
											payload: { sipp: e.target.value },
										})
									}
								/>
								<div className="form-error-message">
									{isSubmitted && !sipp ? (
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
		</React.Fragment>
	);
};

export default AdminPsikolog;
