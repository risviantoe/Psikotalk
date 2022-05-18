import React from "react";
import Button from "../button/Button";

import "./ScheduleList.css";

interface ScheduleListProps {
    day: string;
    date: string;
    name: string;
    clock: string;
    type: string;
}

const ScheduleList: React.FC<ScheduleListProps> = ({
    day = "Senin",
    date = "11 Maret",
    name = "Johnathan Alex",
    clock = "07.00 - 09.00 WITA",
    type = "schedule",
}) => {
    return (
        <div className="psikolog-schedule-item">
            <div
                className="psikolog-item-day"
                style={
                    type === "schedule"
                        ? { background: "#00B29D" }
                        : type === "history"
                        ? { background: "#7E808B" }
                        : { background: "#00B29D" }
                }
            >
                <span className="item-day">{day}</span>
                <span className="item-date">{date}</span>
            </div>
            <div className="psikolog-item-main">
                <span className="item-name">{name}</span>
                <span className="item-clock">{clock}</span>
                <div className="item-btn">
                    {type === "schedule" ? (
                        <>
                            <Button
                                name="Dikonfirmasi"
                                style={{
                                    borderRadius: 20,
                                    padding: "10px 14px",
                                    width: 140,
                                }}
                            />
                            <Button
                                name="Detail"
                                style={{
                                    borderRadius: 20,
                                    padding: "10px 14px",
                                    width: 140,
                                }}
                            />
                        </>
                    ) :
                        <Button
                            name="Detail"
                            style={{
                                borderRadius: 20,
                                padding: "10px 14px",
                                width: 140,
                            }}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default ScheduleList;
