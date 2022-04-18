import React from "react";

export const Forgot: React.FC = () => {
    return (
        <div className="auth">
            <div className="auth-title">
                <div className="auth-title-heading">
                    <h2>Lupa Password</h2>
                </div>
                <div className="auth-title-subheading">
                    <h5>
                        Kami akan mengirimkan kode OTP reset password ke email
                        anda
                    </h5>
                </div>
            </div>
            <div className="auth-form">
                <form action="">
                    <div className="auth-input-group">
                        <label htmlFor="fullName">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Masukkan email"
                        />
                    </div>
                    <div className="auth-alert">{/* auth alert */}</div>
                    <div className="auth-button">
                        <button
                            type="submit"
                            className="primary-btn auth-submit-btn"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
