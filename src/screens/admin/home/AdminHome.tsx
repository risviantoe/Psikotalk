import React from "react";
import CardHome from "../../../components/cardHome/CardHome";
import './AdminHome.css'



export const AdminHome: React.FC = () => {
  return (
    <div className="dashboard-home-wrapper">
      <div className="dashboard-home-title">
        <img src="/assets/icons/dashboard.svg" alt="dashboardIcon" />
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-home-content-wrapper">
        <div className="dashboard-home-card-wrapper">

          <CardHome
            title={"Jumlah klien"}
            total={1280}
            icon={"icon-people"}
            color={"#00ADAC"}
          />
          <CardHome
            title={"Jumlah Bank Soal"}
            total={28}
            icon={"icon-list"}
            color={"#0A6B72"}
          />
          <CardHome
            title={"Jumlah Psikolog"}
            total={30}
            icon={"icon-data"}
            color={"#009289"}
          />
          <CardHome
            title={"Jumlah Artikel"}
            total={120}
            icon={"icon-articel"}
            color={"#00B29D"}
          />

        </div>
      </div>
    </div>
  );
};
