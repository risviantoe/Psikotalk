import React, { useState } from "react";
import { TiWarning } from "react-icons/ti";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import InputCode from "../../../components/inputCode/InputCode";

export const Verification: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const [status, setStatus] = useState<number>(0)
	const [value, setValue] = useState<number>(0)

    const onSubmit = () => {
        console.log('submit');
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 5000);
    }
    return (
		<div className="auth">
			<div className="auth-title">
				<div className="auth-title-heading">
					<h2>Verifikasi</h2>
				</div>
				<div className="auth-title-subheading">
					<h5>
						Periksa email anda yang terkoneksi dengan akun untuk
						mendapatkan kode verifikasi
					</h5>
				</div>
			</div>
			<div className="form auth-form" style={{ marginTop: 3 }}>
				<form action="">
					<div
						className="form-input-inline"
						style={{ justifyContent: 'center' }}
					>
						<div className="auth-code">
							<InputCode
								length={6}
								loading={loading}
								onComplete={() => {
									onSubmit();
								}}
								value={value}
							/>
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
							name="Verifikasi"
							color="primary"
							onClick={() => onSubmit()}
							loading={loading}
						/>
					</div>
				</form>
				<div className="auth-text-action">
					<span>Belum mendapatkan kode? </span>
					<Link to="/" className="text-link">
						Kirim ulang
					</Link>
				</div>
			</div>
		</div>
	);
};
