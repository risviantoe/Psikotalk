import React, { useReducer, useState } from 'react';
import { TiWarning } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import reducer from '../../auth/login/Login.reducer';
import Button from '../../../components/button/Button';
import { authService, storageService } from '../../../services';

import './PsikologLogin.css';

const PsikologLogin: React.FC = () => {
	const navigation = useNavigate();

	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			email: '',
			password: '',
		},
	});

	const { isSubmitted, inputs } = state;
	const { email, password } = inputs;

	let passwordLength: boolean = false;
	if (password.length < 8) {
		passwordLength = false;
	} else {
		passwordLength = true;
	}

	const [loading, setLoading] = useState<boolean>(false);
	const [status, setStatus] = useState<number>(0);

	const login = async () => {
		dispatch({ name: 'SET_IS_SUBMITTED' });

		if (inputs.email === '' || inputs.password === '' || !passwordLength)
			return;

		dispatch({ name: 'SET_SENDING', payload: false });

		setLoading(true);
		setStatus(0);

		console.log('inputs', inputs);

		try {
			const res = await authService.login(inputs);
			console.log('Response ', res.data.data.token);
			storageService.setToken(res.data.data.token);
			setLoading(false);
			navigation('/admin/dashboard');
			setStatus(0);
		} catch (error: any) {
			console.log(error.response);
			setStatus(error.response.data.statusCode);
			setLoading(false);
		}
	};

	return (
		<div className="auth-wrapper">
			<div className="auth__login--ornament-1"></div>
			<div className="auth__login--ornament-2"></div>
			<div className="auth__login--content-wrapper">
				<div className="auth__login--left-wrapper">
					<div className="auth__login--left-logo">
						<img
							src="/assets/images/logo-large.png"
							alt="logo-psikotalk"
						/>
					</div>
					<div className="auth__login--left-vector">
						<img
							src="/assets/images/vector02.png"
							alt="vector-login"
						/>
					</div>
				</div>
				<div className="auth__login--right-wrapper">
					<div className="auth__login--right-title-wrapper">
						<span className="auth__right-title">
							Masuk ke Akun Anda
						</span>
						<div className="auth__right-subtitle">
							Selamat Datang di Platform PsikoTalk
						</div>
					</div>
					<div className="auth__login--right-form-wrapper">
						<div className="form auth-form">
							<form action="">
								<div className="form-input-group">
									<label htmlFor="emailUsername">
										Username / Email
									</label>
									<input
										className={
											isSubmitted && !email
												? 'form-error'
												: ''
										}
										type="text"
										name="emailUsername"
										id="emailUsername"
										placeholder="Masukkan email atau username"
										value={state.inputs.email}
										onChange={(e) =>
											dispatch({
												name: 'SET_INPUTS',
												payload: {
													email: e.target.value,
												},
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
										className={
											isSubmitted && !password
												? 'form-error'
												: ''
										}
										type="password"
										name="password"
										id="password"
										placeholder="Masukkan password"
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
										) : isSubmitted && !passwordLength ? (
											<span>
												Password harus 8 karakter!
											</span>
										) : null}
									</div>
								</div>
								<div className="auth-forgot">
									<Link
										to="/auth/forgot"
										className="text-link"
									>
										Lupa password?
									</Link>
								</div>
								{status !== 0 && status === 401 ? (
									<div className="auth-alert">
										<TiWarning />
										<span>
											Email atau password tidak sesuai!
										</span>
									</div>
								) : null}
								<div className="auth-button">
									<Button
										name="Login"
										color="primary"
										onClick={() => login()}
										loading={loading}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PsikologLogin;
