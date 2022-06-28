import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IoMdVideocam } from 'react-icons/io';
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
							<span className="landingPage__title1">Psiko</span>
							<span className="landingPage__title2">Talk</span>
						</div>
						<div className="landingPage__hero-subtitle">
							<span>
								Aplikasi Konsultasi psikologi dan Psikotest
								secara online
							</span>
						</div>
						<div className="landingPage__hero-cta">
							<Button
								name="Mulai Sekarang"
								style={{ borderRadius: 25 }}
							/>
						</div>
					</div>
					<div className="landingPage__hero-img">
						<img src="/assets/images/hero-img.png" alt="hero-img" />
					</div>
				</section>
				<section className="landingPage__feature">
					<div className="landingPage__feature-title">
						<div className="landingPage__feature-title-container">
							<div className="landingPage__ornament3" />
							Fitur yang tersedia pada{' '}
							<div className="landingPage__title-wrapper">
								<span className="landingPage__title1">
									Psiko
								</span>
								<span className="landingPage__title2">
									Talk
								</span>
							</div>
						</div>
					</div>
					<div className="landingPage__feature-content">
						<div className="landingPage__feature-item">
							<div className="landingPage__feature-item-img">
								<img
									src="assets/images/feature-consultation.png"
									alt="feature-consul"
								/>
							</div>
							<div className="landingPage__feature-item-title">
								Konsultasi Psikolog
							</div>
							<div className="landingPage__feature-item-desc">
								<p>
									Pilih tipe konsultasi psikologi yang kamu
									butuhkan
								</p>
							</div>
							<div className="landingPage__feature-item-list">
								<ul>
									<li>
										<BsFillChatDotsFill
											size={18}
											color="006161"
										/>
										<span>Konsultasi Chat</span>
									</li>
									<li>
										<IoMdVideocam
											size={18}
											color="006161"
										/>
										<span>Konsultasi Video Meeting</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="landingPage__feature-item">
							<div className="landingPage__feature-item-img">
								<img
									src="assets/images/feature-psikotest.png"
									alt="feature-consul"
								/>
							</div>
							<div className="landingPage__feature-item-title">
								Tes Psikologi
							</div>
							<div className="landingPage__feature-item-desc">
								<p>
									Pilih Tes Psikologi yang ingin kamu kerjakan
									dan dapatkan Sertifikatnya
								</p>
							</div>
							<div
								className="landingPage__feature-item-list"
								style={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<ul>
									<li>
										<BsFillChatDotsFill
											size={18}
											color="006161"
										/>
										<span>Psikotest Umum</span>
									</li>
									<li>
										<IoMdVideocam
											size={18}
											color="006161"
										/>
										<span>Diagnosis</span>
									</li>
									<li>
										<IoMdVideocam
											size={18}
											color="006161"
										/>
										<span>Tes IQ</span>
									</li>
								</ul>
								<ul>
									<li>
										<BsFillChatDotsFill
											size={18}
											color="006161"
										/>
										<span>Minat Bakat</span>
									</li>
									<li>
										<IoMdVideocam
											size={18}
											color="006161"
										/>
										<span>MBTI</span>
									</li>
									<li>
										<IoMdVideocam
											size={18}
											color="006161"
										/>
										<span>Psikotest Pekerja</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="landingPage__feature-item">
							<div className="landingPage__feature-item-img">
								<img
									src="assets/images/feature-payment.png"
									alt="feature-consul"
								/>
							</div>
							<div className="landingPage__feature-item-title">
								Pembayaran Mudah
							</div>
							<div className="landingPage__feature-item-desc">
								<p>
									Mempermudah pembayaran dengan banyak pilihan
									metode pembayaran
								</p>
							</div>
							<div className="landingPage__feature-item-list">
								<ul>
									<li>
										<BsFillChatDotsFill
											size={18}
											color="006161"
										/>
										<span>Konsultasi Chat</span>
									</li>
									<li>
										<IoMdVideocam
											size={18}
											color="006161"
										/>
										<span>Konsultasi Video Meeting</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
};

export default LandingPage;
