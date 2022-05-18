import React from "react";
import { Navbar } from "../../navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

import "./DashboardPsikologLayout.css";

const DashboardPsikologLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="psikolog-section-wrapper">
        {/* <div className="psikolog-banner-wrapper">
          <div className="psikolog-banner-shape"></div>
        </div> */}

        <div className="psikolog-wrapper">
          <div className="psikolog-sidebar-wrapper">
            <div className="psikolog-sidebar-header"></div>
            <div className="psikolog-sidebar-content">
              <Link to="" className="psikolog-sidebar-menu active">
                <i className="icon icon-dashboard" style={{background: '#00ADAC'}}/>
                <span>Psikolog</span>
              </Link>
              <Link to="" className="psikolog-sidebar-menu">
                <i className="icon icon-schedule02" style={{background: '#555555'}}/>
                <span>Jadwal</span>
              </Link>
              <Link to="" className="psikolog-sidebar-menu">
                <i className="icon icon-peoples" style={{background: '#555555'}}/>
                <span>Klien</span>
              </Link>
              <Link to="" className="psikolog-sidebar-menu">
                <i className="icon icon-payment" style={{background: '#555555'}}/>
                <span>Pendapatan</span>
              </Link>
              <Link to="" className="psikolog-sidebar-menu">
                <i className="icon icon-chat" style={{background: '#555555'}}/>
                <span>Chat</span>
              </Link>
            </div>
          </div>

          <Outlet />

        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardPsikologLayout;
