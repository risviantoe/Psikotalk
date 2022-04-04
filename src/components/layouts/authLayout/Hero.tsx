import React from "react";

import heroImg from '../../../assets/Images/vector.svg'

export const Hero: React.FC = (props) => {
    return (
        <div className="hero-section-wrapper">
            <div className="hero-title-wrapper">
                <div className="hero-title-heading">
                    <h1>
                        Platform Konsultasi Psikologi dan <br /> Psikotes Online
                    </h1>
                </div>
                <div className="hero-title-subheading">
                    <h5>
                        Akses Konsultasi Psikologis dengan mudah, diagnosa
                        kesehatan mental dan Psikotes dari PsikoTalk dengan
                        Psikologi berpengalaman.
                    </h5>
                </div>
            </div>
            <div className="hero-image-wrapper">
                <img src={ heroImg } alt="" />
            </div>
        </div>
    );
};
