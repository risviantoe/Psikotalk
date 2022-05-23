import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/button/Button'
import ScheduleList from "../../../components/scheduleList/ScheduleList"

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
                <Link to="/psikolog/schedule" className="button bg-white active">Jadwal Terkini</Link>
                <Link to="/psikolog/schedule/history" className="button bg-white">Riwayat</Link>
            </div>
            <div className="psikolog-schedule-content">
                <ScheduleList
                    day="Rabu"
                    date="18 Mei"
                    name="Muhammad Chandra Saputra"
                    clock="07.00 - 09.00 WITA"
                    type="schedule"
                    confirm
                />
                <ScheduleList
                    day="Kamis"
                    date="19 Mei"
                    name="Jacky Rahman"
                    clock="99.99 - 99.99 WITA"
                    type="schedule"
                />
            </div>
        </div>
    </div>
  )
}
