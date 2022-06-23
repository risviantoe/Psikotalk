import React, { useReducer } from 'react';
import Button from '../../../components/button/Button';
import reducer from '../../../reducer/PsikologProfil.reducer';
import '../MainPsikolog.css';
import './PsikologProfile.css';
import { HiUser } from 'react-icons/all';
import { PageProps } from '../../../types/interface/page/Page';
import { useOutletContext } from 'react-router-dom';

export const PsikologProfile: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	setTitle(pageTitle);
	setIcon(icon);
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

	const onSubmit = () => {
		dispatch({ name: 'SET_IS_SUBMITTED', payload: true });
	};

	return (
		<React.Fragment>
			<div className="psikolog__content--body bg-white">
				<div className="psikolog-content-header">
					<div className="profile-picture-wrapper">
						<img
							src="/assets/images/profil01.png"
							alt="photoProfile"
						/>
						<Button
							color="primary"
							icon="icon-camera"
							type="circle"
							size="small"
							style={{ border: '5px solid #fff' }}
						/>
					</div>
				</div>
				<div className="psikolog-profile-form-wrapper">
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
								onClick={() => onSubmit()}
							/>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};
