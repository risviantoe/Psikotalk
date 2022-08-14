import React from 'react';
import { BsFillChatDotsFill, BsFillPatchCheckFill } from 'react-icons/bs';
import { IoMdVideocam } from 'react-icons/io';
import Footer from '../../components/footer/Footer';
import Icon from '../../components/icon/Icon';
import { Navbar } from '../../components/navbar/Navbar';
import './LandingPage.css';
const LandingPage = () => {
	
	return (
		<React.Fragment>
			<div className="landingPage__content">
				<div className="landingPage__ornament1" />
				<div className="landingPage__ornament2" />
				<section className="landingPage__hero" id="home">
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
							<a
								href="#cta"
								className="button primary"
								style={{ borderRadius: 25 }}
							>
								Unduh Sekarang
							</a>
						</div>
					</div>
					<div className="landingPage__hero-img">
						<img src="/assets/images/hero-img.png" alt="hero-img" />
					</div>
				</section>
				<section className="landingPage__feature" id="feature">
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
										<Icon
											type="icon-head-gear"
											size={18}
											color="#006161"
										/>
										<span>Psikotest Umum</span>
									</li>
									<li>
										<Icon
											type="icon-brain"
											size={18}
											color="#00ADAC"
										/>
										<span>Diagnosis</span>
									</li>
									<li>
										<Icon
											type="icon-head-lamp"
											size={18}
											color="#43E6E6"
										/>
										<span>Tes IQ</span>
									</li>
								</ul>
								<ul>
									<li>
										<Icon
											type="icon-cat-palet"
											size={18}
											color="#00ADAC"
										/>
										<span>Minat Bakat</span>
									</li>
									<li>
										<Icon
											type="icon-mbti"
											size={18}
											color="#C4C4C4"
										/>
										<span>MBTI</span>
									</li>
									<li>
										<Icon
											type="icon-bag"
											size={18}
											color="#006161"
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
								<div className="landingPage__feature-list-payment-logo">
									<img
										src="assets/images/payments/logo-transfer.png"
										alt="logo-transfer"
									/>
									<img
										src="assets/images/payments/logo-gopay.png"
										alt="logo-gopay"
									/>
									<img
										src="assets/images/payments/logo-linkaja.png"
										alt="logo-linkaja"
									/>
									<img
										src="assets/images/payments/logo-ovo.png"
										alt="logo-ovo"
									/>
									<img
										src="assets/images/payments/logo-dana.png"
										alt="logo-dana"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="landingPage__ornament4" />
				</section>
				<section className="landingPage__offers" id="offers">
					<div className="landingPage__offers-content">
						<div className="landingPage__offers-content-img">
							<img
								src="assets/images/vector.png"
								alt="konsultasi"
							/>
						</div>
						<div className="landingPage__offers-content-text">
							<div className="landingPage__offers-content-text-title">
								Atasi masalahmu dengan ahlinya!
							</div>
							<div className="landingPage__offers-content-text-desc">
								Bicarakan apa yang menjadi bebanmu dan
								kembalikan keceriaanmu
							</div>
							<div className="landingPage__offers-content-lists">
								<ul>
									<li>
										<BsFillPatchCheckFill color="006161" />
										Membantu lebih dari{' '}
										<span className="text-bold color-psikotalk">
											172.000
										</span>{' '}
										pengguna
									</li>
									<li>
										<BsFillPatchCheckFill color="006161" />
										Melakukan lebih dari{' '}
										<span className="text-bold color-psikotalk">
											600.000
										</span>{' '}
										sesi konseling
									</li>
									<li>
										<BsFillPatchCheckFill color="006161" />
										Mendapatkan{' '}
										<span className="text-bold color-psikotalk">
											4.5 dari 5
										</span>{' '}
										tingkat kepuasan
									</li>
									{/* <li>
										<BsFillPatchCheckFill color="006161" />
										Memperoleh gaji sebagai Psikolog di{' '}
										<span>
											<span className="landingPage__title1">
												Psiko
											</span>
											<span className="landingPage__title2">
												Talk
											</span>
										</span>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
					<div className="landingPage__ornament5" />
				</section>
				<section className="landingPage__cta" id="cta">
					<div className="landingPage__cta-text">
						<div className="landingPage__cta-text-logo">
							<img
								src="assets/images/logo-large.png"
								alt="logo-psikotalk"
							/>
						</div>
						<div className="landingPage__cta-text-desc">
							<p>
								Konsultasi Psikologi dan Psikotes dalam satu
								aplikasi untuk kesehatan Psikologimu
							</p>
							<span>Unduh Sekarang!</span>
						</div>
						<div className="landingPage__cta-text-btn">
							<a href="http://">
								<img
									src="assets/images/Apple-store.png"
									alt="app-store"
								/>
							</a>
							<a href="https://play.google.com/store/apps/details?id=id.co.mka.psikotalk">
								<img
									src="assets/images/Google-play.png"
									alt="app-store"
								/>
							</a>
						</div>
					</div>
					<div className="landingPage__cta-img">
						<img
							src="assets/images/psikotalk-mockup.png"
							alt="psikotalk-mockup"
						/>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
};

export default LandingPage;
