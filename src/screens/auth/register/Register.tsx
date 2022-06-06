import React, { useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { Loading } from '../../../components/loading/Loading';
import { authService } from '../../../services';
import { TiWarning } from 'react-icons/ti';

import reducer from './Register.reducer';

export const Register: React.FC = () => {
	const navigation = useNavigate();

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			name: '',
			username: '',
			email: '',
			gender: '',
			password: '',
			confirmPassword: '',
		},
	});

	const { isSubmitted, inputs } = state;
	const { name, username, email, gender, password, confirmPassword } = inputs;

	let isPasswordMatch: boolean = false;
	if (password && confirmPassword && password !== confirmPassword) {
		isPasswordMatch = false;
	} else {
		isPasswordMatch = true;
	}

	let passwordLength: boolean = false;
	if (password.length < 8) {
		passwordLength = false;
	} else {
		passwordLength = true;
	}

	const [loading, setLoading] = useState<boolean>(false);
	const [status, setStatus] = useState<number>(0);

	const register = async () => {
		dispatch({ name: 'SET_IS_SUBMITTED' });

		if (
			inputs.email === '' ||
			inputs.password === '' ||
			inputs.username === ''  ||
			inputs.gender === ''  ||
			!isPasswordMatch ||
			!passwordLength
		) return
		
		dispatch({ name: 'SET_SENDING', payload: false })

		setLoading(true);
		setStatus(0);

		console.log('inputs', inputs);

		try {
			const res = await authService.register(inputs);
			console.log('Response ', res);
			setLoading(false);
			navigation('/auth/verification');
			setStatus(0);
		} catch (error: any) {
			setStatus(error.response.data.statusCode);
			setLoading(false);
		}
	};

	return (
		<div className="auth">
			<div className="auth-title">
				<div className="auth-title-heading">
					<h2>Selamat Datang di PsikoTalk</h2>
					<Loading />
				</div>
				<div className="auth-title-subheading">
					<h5>
						Daftar untuk masuk dan mengakses semua fitur PsikoTalk
					</h5>
				</div>
			</div>
			<div className="form auth-form">
				<form action="">
					<div className="form-input-group">
						<label htmlFor="name">Nama Lengkap</label>
						<input
							className={isSubmitted && !name ? 'form-error' : ''}
							type="text"
							name="name"
							id="name"
							placeholder="Masukkan nama lengkapmu"
							value={state.inputs.name}
							onChange={(e) =>
								dispatch({
									name: 'SET_INPUTS',
									payload: { name: e.target.value },
								})
							}
						/>
						<div className="form-error-message">
							{isSubmitted && !name ? (
								<span>Nama lengkap wajib diisi!</span>
							) : null}
						</div>
					</div>
					<div className="form-input-inline">
						<div className="form-input-group">
							<label htmlFor="username">Username</label>
							<input
								className={
									isSubmitted && !username ? 'form-error' : ''
								}
								type="text"
								name="username"
								id="username"
								placeholder="Masukkan username"
								value={state.inputs.username}
								onChange={(e) =>
									dispatch({
										name: 'SET_INPUTS',
										payload: { username: e.target.value },
									})
								}
							/>
							<div className="form-error-message">
								{isSubmitted && !username ? (
									<span>Username wajib diisi!</span>
								) : null}
							</div>
						</div>
						<div className="form-input-group">
							<label htmlFor="email">Email</label>
							<input
								className={
									isSubmitted && !email ? 'form-error' : ''
								}
								type="email"
								name="email"
								id="email"
								placeholder="Masukkan emailmu"
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
										value="Laki-laki"
										onChange={(e) =>
											dispatch({
												name: 'SET_INPUTS',
												payload: {
													gender: e.target.value,
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
													gender: e.target.value,
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
									<span>Gender wajib diisi!</span>
								) : null}
							</div>
						</div>
					</div>
					<div className="form-input-inline">
						<div className="form-input-group">
							<label htmlFor="password">Password</label>
							<input
								className={
									isSubmitted && !password ? 'form-error' : ''
								}
								type="password"
								name="password"
								id="password"
								placeholder="Masukkan password"
								value={state.inputs.password}
								onChange={(e) =>
									dispatch({
										name: 'SET_INPUTS',
										payload: { password: e.target.value },
									})
								}
							/>
							<div className="form-error-message">
								{isSubmitted && !password ? (
									<span>Password wajib diisi!</span>
								) : isSubmitted && !passwordLength ? (
									<span>Password harus 8 karakter!</span>
								) : null}
							</div>
						</div>
						<div className="form-input-group">
							<label htmlFor="re-password">Ulangi Password</label>
							<input
								className={
									(isSubmitted && !password) ||
									(isSubmitted && !isPasswordMatch)
										? 'form-error'
										: ''
								}
								type="password"
								name="re-password"
								id="re-password"
								placeholder="Ulangi password"
								value={state.inputs.confirmPassword}
								onChange={(e) =>
									dispatch({
										name: 'SET_INPUTS',
										payload: {
											confirmPassword: e.target.value,
										},
									})
								}
							/>
							<div className="form-error-message">
								{isSubmitted && !confirmPassword ? (
									<span>
										Konfirmasi password wajib diisi!
									</span>
								) : !isPasswordMatch ? (
									<span>Password tidak sama</span>
								) : null}
							</div>
						</div>
					</div>

					{status !== 0 && status === 409 ? (
						<div className="auth-alert">
							<TiWarning />
							<span>Email sudah digunakan!</span>
						</div>
					) : null}

					<div className="auth-button">
						<Button
							name="Registrasi"
							color="primary"
							onClick={() => register()}
							loading={loading}
						/>
					</div>
				</form>
				<div className="auth-text-action">
					<span>Sudah punya akun? </span>
					<Link to="/auth/login" className="text-link">
						Masuk disini
					</Link>
				</div>
			</div>
		</div>
	);
};
