import React, { useReducer, useState } from "react";
import { TiWarning } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import { authService, storageService } from '../../../services';

import reducer from './Login.reducer';

export const Login: React.FC = () => {
	const navigation = useNavigate();

    const [state, dispatch] = useReducer(reducer, {
		isSubmitted: false,
		sending: false,
		inputs: {
			email: '',
			password: ''
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

		if (
			inputs.email === '' ||
			inputs.password === '' ||
			!passwordLength
		) return;

		dispatch({ name: 'SET_SENDING', payload: false });

		setLoading(true);
		setStatus(0);

		console.log('inputs', inputs);

		try {
			const res = await authService.login(inputs);
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
		<div className="auth">
			<div className="auth-title">
				<div className="auth-title-heading">
					<h2>Masuk ke Akun Anda</h2>
				</div>
				<div className="auth-title-subheading">
					<h5>Selamat Datang di PsikoTalk</h5>
				</div>
			</div>
			<div className="form auth-form">
				<form action="">
					<div className="form-input-group">
						<label htmlFor="emailUsername">Username / Email</label>
						<input
							className={
								isSubmitted && !email ? 'form-error' : ''
							}
							type="text"
							name="emailUsername"
							id="emailUsername"
							placeholder="Masukkan email atau username"
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
					<div className="auth-forgot">
						<Link to="/auth/forgot" className="text-link">
							Lupa password?
						</Link>
					</div>
					{status !== 0 && status === 401 ? (
						<div className="auth-alert">
							<TiWarning />
							<span>Email atau password tidak sesuai!</span>
						</div>
					) : null}
					<div className="auth-button">
						<Button
							name="Login"
							color="primary"
							onClick={() => login()}
							loading={loading}
						/>
						<button
							className="secondary-btn auth-sosmed-btn"
							style={{ marginTop: 10 }}
						>
							<img src="/assets/icons/logo-google.svg" alt="" />
							<span
								style={{
									width: '92%',
									textAlign: 'center',
								}}
							>
								Login dengan Google
							</span>
						</button>
					</div>
				</form>
				<div className="auth-text-action">
					<span>Belum punya akun? </span>
					<Link to="/auth/register" className="text-link">
						Buat akun
					</Link>
				</div>
			</div>
		</div>
	);
};
