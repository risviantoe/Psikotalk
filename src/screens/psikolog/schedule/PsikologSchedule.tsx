import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/button/Button'

import './PsikologSchedule.css'

export const PsikologSchedule = () => {
  return (
    <div className="content-wrapper">
        <div className="content-title">
            <i className="icon icon-schedule02" style={{ background: "#00ADAC" }} />
            <h1>Jadwal</h1>
        </div>
        <div className="psikolog-schedule-wrapper bg-white">
            <div className="psikolog-schedule-menu">
                <Link to="" className="button bg-white active">Jadwal Terkini</Link>
                <Link to="" className="button bg-white">Riwayat</Link>
            </div>
            <div className="psikolog-schedule-content">
                <div className="psikolog-schedule-item">
                    <div className="psikolog-item-day">
                        <span className="item-day">Senin</span>
                        <span className="item-date">11 Maret</span>
                    </div>
                    <div className="psikolog-item-main">
                        <span className="item-name">Johnathan Alex</span>
                        <span className="item-clock">07.00 - 09.00 WITA</span>
                        <div className="row">
                            <Button
                                name="Dikonfirmasi"
                                style={{ borderRadius: 20, padding: "10px 14px", width: 140 }}
                            />
                            <Button
                                name="Detail"
                                style={{ borderRadius: 20, padding: "10px 14px", width: 140 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="psikolog-schedule-item">
                    <div className="psikolog-item-day">
                        <span className="item-day">Senin</span>
                        <span className="item-date">11 Maret</span>
                    </div>
                    <div className="psikolog-item-main">
                        <span className="item-name">Johnathan Alex</span>
                        <span className="item-clock">07.00 - 09.00 WITA</span>
                        <div className="row">
                            <Button
                                name="Dikonfirmasi"
                                style={{ borderRadius: 20, padding: "10px 14px", width: 140, background: "#00B29D", border: "1px solid #00B29D"}}
                            />
                            <Button
                                name="Detail"
                                style={{ borderRadius: 20, padding: "10px 14px", width: 140, background: "#00B29D", border: "1px solid #00B29D" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
