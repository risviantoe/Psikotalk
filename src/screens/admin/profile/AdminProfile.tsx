import React from "react";
import Button from "../../../components/button/Button";

import "./AdminProfile.css";

export const AdminProfile = () => {
  return (
    <div className="admin-dashboard-wrapper">
      <div className="admin-dashboard-title">
        <i className="icon icon-people"></i>
        <h1>Profil</h1>
      </div>
      <div className="admin-profile-content-wrapper">
        <div className="admin-profile-picture-container">
          <div className="admin-profile-picture-top"></div>
          <div className="admin-profile-picture-wrapper">
            <img src="/assets/images/profil01.png" alt="photoProfile" />
            <Button
              color="primary"
              icon="icon-camera"
              type="circle"
              size="small"
            />
          </div>
        </div>

        <div className="admin-profile-form-container">
          <form className="form">
            <div className="form-input-group">
              <label htmlFor="fullName">Nama lengkap</label>
              <input type="text" name="name" id="fullName" />
            </div>

            <div className="form-input-group">
              <label htmlFor="uname">Username</label>
              <input type="text" name="username" id="uname" />
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
                    <label htmlFor="gender-male">Laki - laki</label>
                  </div>
                  <div className="form-input-radio">
                    <input
                      type="radio"
                      name="gender"
                      id="gender-female"
                    />
                    <label htmlFor="gender-female">Perempuan</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="form-input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <Button
              name="Simpan Perubahan"
              color="primary"
              style={{width: '100%', marginTop: 30, height: 48}}
            />

          </form>
        </div>
      </div>
    </div>
  );
};
