import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { authService } from '../../../services'

import reducer from './Register.reducer';

export const Register: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			name: '',
			username: '',
			email: '',
			gender: '',
            password: '',
            confirmPassword: ''
		},
	});

	const { isSubmitted, inputs } = state;
    const { name, username, email, gender, password, confirmPassword } = inputs;
    
    let isPasswordMatch: boolean = false
    if (password && confirmPassword && password !== confirmPassword) {
        isPasswordMatch = false;
    } else {
        isPasswordMatch = true;
    }

	const register = async () => {
        dispatch({ name: 'SET_IS_SUBMITTED' });
        
        try {
            const res = await authService.register(inputs)
            console.log("Response ", res);
        } catch (error) {
            console.log(error);
        }
	};

	return (
		<div className="auth">
			<div className="auth-title">
				<div className="auth-title-heading">
					<h2>Selamat Datang di PsikoTalk</h2>
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
							className={
								isSubmitted && !name ? 'form-error' : ''
							}
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
										type="radio"
										name="gender"
										id="gender-male"
										checked
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
					<div className="auth-alert">{/* auth alert */}</div>
					<div className="auth-button">
						<Button
							name="Registrasi"
							color="primary"
							onClick={() => register()}
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
