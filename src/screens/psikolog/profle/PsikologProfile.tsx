import React from "react";
import Button from "../../../components/button/Button";

import "../MainPsikolog.css";
import "./PsikologProfile.css";

export const PsikologProfile = () => {
  return (
    <div className="content-wrapper">
      <div className="content-title">
        <i className="icon icon-people" style={{ background: "#00ADAC" }} />
        <h1>Profil</h1>
      </div>
      <div className="psikolog-content-wrapper">
        <div className="psikolog-content-header">
          <div className="psikolog-content-header-top"></div>
          <div className="profile-picture-wrapper">
            <img src="/assets/images/profil01.png" alt="photoProfile" />
            <Button
              color="primary"
              icon="icon-camera"
              type="circle"
              size="small"
              style={{ border: '5px solid #fff' }}
            />
          </div>
        </div>
        <div className="psikolog-profile-form-wrapper">
          <form className="form psikolog-profile-form">
            <div className="psikolog-profile-form-left">
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
                      <input type="radio" name="gender" id="gender-female" />
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
                <label htmlFor="about">Tentang diri</label>
                <textarea name="aboutMe" id="about" rows={15} />
              </div>
            </div>

            <div className="psikolog-profile-form-right">
              <div className="form-input-group">
                <label htmlFor="birthDate">Tanggal Lahir</label>
                <input type="date" name="birthDate" id="birthDate" />
              </div>

              <div className="form-input-group">
                <label htmlFor="phone">Nomor Hp</label>
                <input type="number" name="phone" id="phone" />
              </div>

              <div className="form-input-group">
                <label htmlFor="study">Pendidikan</label>
                <input type="text" name="study" id="study" />
              </div>

              <div className="form-input-group">
                <label htmlFor="sipp">Surat Izin Praktik Psikologi</label>
                <input type="file" name="sipp" id="sipp" />
              </div>

              <div className="form-input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" disabled />
                <Button
                  name="Ganti password"
                  color="secondary"
                  type="button"
                  style={{ position: 'absolute', right: 20, padding: '5px 15px', top: 45, fontSize: 14 }}
                />
              </div>

              <Button
                name="Simpan Perubahan"
                color="primary"
                style={{ width: "100%", marginTop: 30, height: 48 }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
