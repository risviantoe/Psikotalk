import React from "react";
import { Link } from "react-router-dom";
import './CardHome.css'

interface CardHomeProps {
	total?: number
	title?: string
	icon?: string
  color?: string
}

const CardHome: React.FC<CardHomeProps> = ({ total = 0, title = 'Jumlah apa gitu', color = '#00ADAC', icon = '' }) => {
  return (
    <div className="dashboard-home-card-items" style={{background: color}}>
      <div className="dashboard-home-card-text">
        <span className="dashboard-home-card-text-title">{title}</span>
        <h1>{total}</h1>
        <Link to='#' className="dashboard-home-card-text-detail">
          <span>Lihat detail</span>
          <i className="icon icon-chevron-down dashboard-home-card-icon-detail"></i>
        </Link>
      </div>
      <div className="dashboard-home-card-icon">
        <i className={"icon "+icon} ></i>
      </div>
      <div className="dashboard-home-card-ornament" />
    </div>
  );
};

export default CardHome;
