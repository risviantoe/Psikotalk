import React from "react";
import { Link } from "react-router-dom";

export const Verification: React.FC = () => {
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
            <div className="auth-form" style={{ marginTop: 3 }}>
                <form action="">
                    <div
                        className="auth-input-inline"
                        style={{ justifyContent: "center" }}
                    >
                        <div className="auth-code">
                            <input
                                inputMode="numeric"
                                type="number"
                                name="verificationCode"
                                className="auth-input-code"
                            />
                            <input
                                inputMode="numeric"
                                type="number"
                                name="verificationCode"
                                className="auth-input-code"
                            />
                            <input
                                inputMode="numeric"
                                type="number"
                                name="verificationCode"
                                className="auth-input-code"
                            />
                            <input
                                inputMode="numeric"
                                type="number"
                                name="verificationCode"
                                className="auth-input-code"
                            />
                            <input
                                inputMode="numeric"
                                type="number"
                                name="verificationCode"
                                className="auth-input-code"
                            />
                            <input
                                inputMode="numeric"
                                type="number"
                                name="verificationCode"
                                className="auth-input-code"
                            />
                        </div>
                    </div>
                    <div className="auth-alert">
                        {/* <!-- auth alert --> */}
                    </div>
                    <div className="auth-button">
                        <button
                            type="submit"
                            className="primary-btn auth-submit-btn"
                        >
                            Verifikasi
                        </button>
                    </div>
                </form>
                <div className="auth-text-action">
                    <span>Belum mendapatkan kode? </span>
                    <Link to="/" className="text-link">
                        Kirim ulang(10s)
                    </Link>
                </div>
            </div>
        </div>
    );
};
