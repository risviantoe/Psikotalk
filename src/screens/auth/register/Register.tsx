import React from "react";
import { Link } from "react-router-dom";

export const Register: React.FC = () => {
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
                        <label htmlFor="fullName">Nama Lengkap</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Masukkan nama lengkapmu"
                        />
                    </div>
                    <div className="form-input-inline">
                        <div className="form-input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Masukkan username"
                            />
                        </div>
                        <div className="form-input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Masukkan emailmu"
                            />
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
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Masukkan password"
                            />
                        </div>
                        <div className="form-input-group">
                            <label htmlFor="re-password">Ulangi Password</label>
                            <input
                                type="password"
                                name="re-password"
                                id="re-password"
                                placeholder="Ulangi password"
                            />
                        </div>
                    </div>
                    <div className="auth-alert">{/* auth alert */}</div>
                    <div className="auth-button">
                        <button type="submit" className="primary-btn">
                            Registrasi
                        </button>
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
