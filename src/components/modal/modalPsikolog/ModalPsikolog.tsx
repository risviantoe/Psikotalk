import React, { useEffect, useReducer, useState } from 'react';
import Modal from '../Modal';
import reducer from '../../../reducer/PsikologProfil.reducer';
import Button from '../../button/Button';
import { Psikolog, PsikologRequest } from '../../../types';
import moment from 'moment';
import { format, parseISO } from 'date-fns';
import { adminService } from '../../../services';

interface ModalPsikologProps {
	show: boolean;
	onClose: () => void;
	onOK: (arg: PsikologRequest) => void;
	loading: boolean;
	type: string;
	psikolog?: Psikolog;
	id?: string;
}

const ModalPsikolog: React.FC<ModalPsikologProps> = ({
	show,
	onClose,
	onOK,
	loading,
	type,
	psikolog,
	id,
}) => {
	
	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			// name: '',
			// username: '',
			// email: '',
			// gender: '',
			// biodata: '',
			// tanggal_lahir: '',
			// nomor_hp: '',
			// password: '',
			// file_ijazah: '',
			// surat_izin: '',
			// images: '',
			// jenjang_pendidikan: '',
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
		jenjang_pendidikan,
	} = inputs;

	const [imgPreviewSrc, setImgPreviewSrc] = useState<string>('');
	const showPreview = (e: any) => {
		if (e.target.files.length > 0) {
			setImgPreviewSrc(URL.createObjectURL(e.target.files[0]));
		}
	};

	useEffect(() => {
		state.inputs.name = psikolog?.name ?? '';
		state.inputs.username = psikolog?.username ?? '';
		state.inputs.email = psikolog?.email ?? '';
		state.inputs.nomor_hp = psikolog?.nomor_hp ?? '';
		state.inputs.biodata = psikolog?.biodata ?? '';
		state.inputs.tanggal_lahir = psikolog?.tanggal_lahir
			? moment(psikolog?.tanggal_lahir).format('YYYY-MM-DD')
			: '';
		state.inputs.gender = psikolog?.gender ?? '';
		state.inputs.jenjang_pendidikan = psikolog?.jenjang_pendidikan ?? '';
	}, [psikolog]);

	return (
		<Modal
			show={show}
			onClose={onClose}
			style={{ width: '80%', marginTop: '30%' }}
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
						onChange={(e) => {
							showPreview(e);
							dispatch({
								name: 'SET_INPUTS',
								payload: {
									images: e.target.value,
								},
							});
						}}
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
								value={inputs.name}
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
									isSubmitted && !username ? 'form-error' : ''
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
														gender: e.target.value,
													},
												})
											}
											checked={
												inputs.gender === 'Laki - laki'
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
														gender: e.target.value,
													},
												})
											}
											checked={
												inputs.gender === 'Perempuan'
											}
										/>
										<label htmlFor="gender-female">
											Perempuan
										</label>
									</div>
								</div>
								<div className="form-error-message">
									{isSubmitted && !gender ? (
										<span>Jenis Kelamin wajib diisi!</span>
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
									isSubmitted && !email ? 'form-error' : ''
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
									isSubmitted && !biodata ? 'form-error' : ''
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
								value={inputs.tanggal_lahir}
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
									isSubmitted && !nomor_hp ? 'form-error' : ''
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
								className={
									isSubmitted && !jenjang_pendidikan
										? 'form-error'
										: ''
								}
								value={state.inputs.jenjang_pendidikan}
								onChange={(e) =>
									dispatch({
										name: 'SET_INPUTS',
										payload: {
											jenjang_pendidikan: e.target.value,
										},
									})
								}
							>
								<option>Pilih Jenjang Pendidikan</option>
								<option
									value="Sarjana"
									selected={
										inputs.jenjang_pendidikan === 'Sarjana'
									}
								>
									S1
								</option>
								<option
									value="Magister"
									selected={
										inputs.jenjang_pendidikan === 'Magister'
									}
								>
									S2
								</option>
							</select>
							<div className="form-error-message">
								{isSubmitted && !jenjang_pendidikan ? (
									<span>Jenjang pendidikan wajib diisi!</span>
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
										type === 'add' &&
										isSubmitted &&
										!password
											? 'form-error'
											: ''
									}
									value={state.inputs.password}
									onChange={
										type === 'add'
											? (e) =>
													dispatch({
														name: 'SET_INPUTS',
														payload: {
															password:
																e.target.value,
														},
													})
											: undefined
									}
									disabled={type === 'update'}
								/>

								<Button
									className="change-pwd-btn"
									name="Ganti password"
									color="secondary"
									type="button"
								/>
							</div>
							<div className="form-error-message">
								{type === 'add' && isSubmitted && !password ? (
									<span>Password wajib diisi!</span>
								) : null}
							</div>
						</div>

						<Button
							name={
								type === 'add'
									? 'Simpan'
									: type === 'update'
									? 'Update'
									: ''
							}
							color="primary"
							style={{
								width: '100%',
								marginTop: 30,
								height: 48,
							}}
							loading={loading}
							// onClick={type === 'add' ? onSubmit : onOK}
							onClick={() => {
								type === 'add'
									? dispatch({
											name: 'SET_IS_SUBMITTED',
											payload: true,
									  })
									: dispatch({
											name: 'SET_IS_SUBMITTED',
											payload: false,
									  });

								onOK(inputs);
							}}
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default ModalPsikolog;
