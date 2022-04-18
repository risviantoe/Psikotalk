import React from "react";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
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
            <div className="auth-form">
                <form action="">
                    <div className="auth-input-group">
                        <label htmlFor="emailUsername">Username / Email</label>
                        <input
                            type="text"
                            name="emailUsername"
                            id="emailUsername"
                            placeholder="Masukkan email atau username"
                        />
                    </div>
                    <div className="auth-input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Masukkan password"
                        />
                    </div>
                    <div className="auth-forgot">
                        <Link to="/auth/forgot" className="text-link">
                            Lupa password?
                        </Link>
                    </div>
                    <div className="auth-alert">{/* auth alert */}</div>
                    <div className="auth-button">
                        <button
                            type="submit"
                            className="primary-btn auth-submit-btn"
                        >
                            Login
                        </button>
                        <button
                            type="submit"
                            className="secondary-btn auth-sosmed-btn"
                        >
                            <img src="/public/assets/Images/logo-google.svg" alt="" />
                            <span
                                style={{
                                    width: "92%",
                                    textAlign: "center",
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
