import React from "react";
import CardHome from "../../../components/cardHome/CardHome";
import './AdminHome.css'



export const AdminHome: React.FC = () => {
  return (
    <div className="admin-home-wrapper">
      <div className="admin-home-title">
        <img src="/assets/icons/dashboard.svg" alt="dashboardIcon" />
        <h1>Dashboard</h1>
      </div>
      <div className="admin-home-content-wrapper">
        <div className="admin-home-card-wrapper">

          <CardHome
            title={"Jumlah klien"}
            total={1280}
            icon={"icon-peoples"}
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
