import React from "react";
import { Navbar } from "../../navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

import "./DashboardAdminLayout.css";

const DashboardAdminLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="dashboard-section-wrapper">
        <div className="dashboard-wrapper">
          <div className="dashboard-sidebar-wrapper">
            <div className="dashboard-sidebar-header"></div>
            <div className="dashboard-sidebar-content">
              <Link to="" className="dashboard-sidebar-menu active">
                <img src="/assets/icons/dashboard.svg" alt="dashboardIcon" />
                <span>Dashboard</span>
              </Link>
              <Link to="" className="dashboard-sidebar-menu">
                <img src="/assets/icons/peoples.svg" alt="peoplesIcon" />
                <span>Data klien</span>
              </Link>
              <Link to="" className="dashboard-sidebar-menu">
                <img src="/assets/icons/data.svg" alt="dataIcon" />
                <span>Data psikolog</span>
              </Link>
              <Link to="" className="dashboard-sidebar-menu">
                <img src="/assets/icons/articel.svg" alt="dataIcon" />
                <span>Artikel</span>
              </Link>
              <Link to="" className="dashboard-sidebar-menu">
                <img src="/assets/icons/list.svg" alt="listIcon" />
                <span>Bank soal</span>
              </Link>
            </div>
          </div>

          <Outlet />

        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardAdminLayout;
