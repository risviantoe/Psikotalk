import React from "react";
import "./DashboardClientLayout.css";
import { Navbar } from "../../Navbar";
import { Link } from "react-router-dom";

const DashboardClientLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="dashboard-section-wrapper">
        <div className="dashboard-banner-wrapper">
          <div className="dashboard-banner-shape"></div>
        </div>

        <div className="dashboard-main-wrapper">
          <div className="dashboard-main-sidebar-wrapper">
            <div className="dashboard-sidebar-header"></div>
            <div className="dashboard-sidebar-content">
              <Link to="" className="dashboard-sidebar-menu">
                <img src="/assets/icons/schedule.svg" alt="scheduleIcon" />
                <span>Jadwal Saya</span>
              </Link>
              <Link to="" className="dashboard-sidebar-menu">
                <img src="/assets/icons/history.svg" alt="historyIcon" />
                <span>Histori</span>
              </Link>
              <Link to="" className="dashboard-sidebar-menu">
                <img src="/assets/icons/bookmark.svg" alt="bookmarkIcon" />
                <span>Favorit</span>
              </Link>
            </div>
          </div>
          <div className="dashboard-main-content-wrapper">
            <div className="dashboard-main-search-wrapper">
              <input
                type="text"
                name="search-consultant"
                placeholder="Cari konsultan"
                className="dashboard-main-search-input"
              />
              <button className="dashboard-main-search-btn primary-btn">
                Telusuri
              </button>
              <div className="dashboard-main-filter-wrapper">
                <label htmlFor="dashboard-main-filter-check">
                  <img src="/assets/icons/filter.svg" alt="filterIcon" />
                </label>
                <input type="checkbox" id="dashboard-main-filter-check" />
                <ul className="dashboard-main-filter-items">
                  <li>
                    <a href="#">Lorem Ipsum</a>
                    <hr />
                  </li>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardClientLayout;
