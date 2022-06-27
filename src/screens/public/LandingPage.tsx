import React from 'react';
import Button from '../../components/button/Button';
import { Navbar } from '../../components/navbar/Navbar';
import './LandingPage.css';
const LandingPage = () => {
	return (
		<React.Fragment>
			<Navbar />
            <div className="landingPage__content">
                <div className="landingPage__ornament1" />
                <div className="landingPage__ornament2" />
				<section className="landingPage__hero">
					<div className="landingPage__hero-text-wrapper">
						<div className="landingPage__hero-title">
							<span className="landingPage__hero-title1">
								Psiko
							</span>
							<span className="landingPage__hero-title2">
								Talk
							</span>
						</div>
						<div className="landingPage__hero-subtitle">
							<span>
								Aplikasi Konsultasi psikologi dan Psikotest
								secara online
							</span>
                        </div>
                        <div className="landingPage__hero-cta">
                            <Button name="Mulai Sekarang" style={{ borderRadius: 25 }} />
                        </div>
                    </div>
                    <div className="landingPage__hero-img">
                        <img src="/assets/images/hero-img.png" alt="hero-img" />
                    </div>
                </section>
                <section className="LandingPage__feature">
                    
                </section>
			</div>
		</React.Fragment>
	);
};

export default LandingPage;
