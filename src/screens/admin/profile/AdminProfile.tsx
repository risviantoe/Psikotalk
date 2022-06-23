import React, { useReducer } from 'react';
import Button from '../../../components/button/Button';

import './AdminProfile.css';
import reducer from './AdminProfile.reducer';
import { useOutletContext } from 'react-router-dom';
import { PageProps } from '../../../types/interface/page/Page';

export const AdminProfile: React.FC<PageProps> = ({ pageTitle }) => {
	const { setTitle } = useOutletContext<any>();
	setTitle(pageTitle);

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			fullname: '',
			username: '',
			gender: '',
			email: '',
			password: '',
		},
	});

	const { isSubmitted, inputs } = state;
	const { fullname, username, gender, email, password } = inputs;

	const onSubmit = () => {
		dispatch({ name: 'SET_IS_SUBMITTED' });
	};

	return (
		<React.Fragment>
			<div className="admin__content--body">
				<div className="admin__profile--content-wrapper">
					<div className="admin__profile--picture-container">
						<div className="admin__profile--picture-wrapper">
							<img
								src="/assets/images/profil01.png"
								alt="photoProfile"
							/>
							<Button
								color="primary"
								icon="icon-camera"
								type="circle"
								size="small"
							/>
						</div>
					</div>

					<div className="admin__profile--form-container">
						<form className="form">
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
								<label htmlFor="password">Password</label>
								<input
									type="password"
									name="password"
									id="password"
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
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
