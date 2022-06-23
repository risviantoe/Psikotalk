import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { PageProps } from '../../../types/interface/page/Page';
import './PsikologHome.css';

export const PsikologHome: React.FC<PageProps> = ({ pageTitle, icon }) => {
	const { setTitle, setIcon } = useOutletContext<any>();
	useEffect(() => {
		setTitle(pageTitle);
		setIcon(icon);
	});
	return (
		<React.Fragment>
			<div className="psikolog__content--body bg-white">
				<div className="psikolog-home-content-wrapper">
					<div className="psikolog-content-row">
						<div className="psikolog-card-detailprofile psikolog-card-shadow">
							<div className="card-detailprofile-info-wrapper">
								<div className="card-detailprofile-photo">
									<img
										src="/assets/images/profil01.png"
										alt="profilPicture"
									/>
								</div>
								<div className="card-detailprofile-info">
									<span className="card-detailprofile-name">
										Jean Gunnhildr M.Psi
									</span>
									<span className="card-detailprofile-email">
										Jean_Gunnhildr@Email.com
									</span>
									<span className="card-detailprofile-education">
										Pendidikan
									</span>
									<span className="card-detailprofile-education-info">
										Psychology • Stanford University{' '}
									</span>
								</div>
							</div>
							<Link to="" className="card-detailprofile-btn">
								<div className="card-detailprofile-btn-text">
									<i className="icon icon-write"></i>
									<span>
										Detail Profil
										<i
											className="icon icon-chevron-down"
											style={{ background: '#fff' }}
										></i>
									</span>
								</div>
							</Link>
						</div>

						<div className="psikolog-home-card-income psikolog-card-shadow">
							<div className="card-income-text-wrapper">
								<span className="card-income-text-title">
									Perkiraan Pendapatan
								</span>
								<Link
									to="#"
									className="psikolog-home-card-text-detail"
								>
									<span>Lihat detail</span>
									<i className="icon icon-chevron-down psikolog-home-card-icon-detail"></i>
								</Link>
							</div>
							<div className="card-income-icon-wrapper">
								<i className="icon icon-payment"></i>
							</div>
							<div className="card-ornament02"></div>
						</div>
					</div>

					<div className="psikolog-content-row">
						<div className="psikolog-card-client-wrapper psikolog-card-shadow">
							<div className="psikolog-card-client-header">
								<div className="psikolog-card-client-header-left">
									<span className="psikolog-card-client-title">
										Jumlah Klien
									</span>
									<span className="psikolog-card-client-total">
										20
									</span>
								</div>
								<div className="psikolog-card-client-header-right">
									<i className="icon icon-peoples"></i>
								</div>
								<div className="card-ornament02"></div>
							</div>
							<div className="psikolog-card-client-content">
								<div className="row">
									<div className="psikolog-card-client-photo">
										<img
											src="/assets/images/profil02.png"
											alt="profilePicture-02"
										/>
									</div>
									<div className="psikolog-card-client-info">
										<span className="psikolog-card-client-name">
											Eunha Jung
										</span>
										<span className="psikolog-card-client-email">
											Eunhajung@email.com
										</span>
									</div>
									<div className="psikolog-card-client-action">
										<Button
											icon="icon-schedule02"
											color="primary"
											size="small"
											type="circle"
											style={{
												height: 54,
												width: 54,
												padding: '6px 10px',
											}}
										></Button>
										<Button
											icon="icon-chat"
											color="primary"
											size="small"
											type="circle"
											style={{
												height: 54,
												width: 54,
												padding: '6px 10px',
											}}
										></Button>
									</div>
								</div>
								<div className="row">
									<div className="psikolog-card-client-photo">
										<img
											src="/assets/images/profil02.png"
											alt="profilePicture-02"
										/>
									</div>
									<div className="psikolog-card-client-info">
										<span className="psikolog-card-client-name">
											Eunha Jung
										</span>
										<span className="psikolog-card-client-email">
											Sana_Minatozaki@email.com
										</span>
									</div>
									<div className="psikolog-card-client-action">
										<Button
											icon="icon-schedule02"
											color="primary"
											size="small"
											type="circle"
											style={{
												height: 54,
												width: 54,
												padding: '6px 10px',
											}}
										></Button>
										<Button
											icon="icon-chat"
											color="primary"
											size="small"
											type="circle"
											style={{
												height: 54,
												width: 54,
												padding: '6px 10px',
											}}
										></Button>
									</div>
								</div>
								<div className="row">
									<div className="psikolog-card-client-photo">
										<img
											src="/assets/images/profil02.png"
											alt="profilePicture-02"
										/>
									</div>
									<div className="psikolog-card-client-info">
										<span className="psikolog-card-client-name">
											Eunha Jung
										</span>
										<span className="psikolog-card-client-email">
											Eunhajung@email.com
										</span>
									</div>
									<div className="psikolog-card-client-action">
										<Button
											icon="icon-schedule02"
											color="primary"
											size="small"
											type="circle"
											style={{
												height: 54,
												width: 54,
												padding: '6px 10px',
											}}
										></Button>
										<Button
											icon="icon-chat"
											color="primary"
											size="small"
											type="circle"
											style={{
												height: 54,
												width: 54,
												padding: '6px 10px',
											}}
										></Button>
									</div>
								</div>
								<div
									className="row"
									style={{
										marginTop: 20,
										justifyContent: 'center',
									}}
								>
									<Link className="text-link" to="">
										Lihat selengkapnya ...
									</Link>
								</div>
							</div>
						</div>

						<div
							className="psikolog-card-client-wrapper psikolog-card-shadow"
							style={{ width: '52%' }}
						>
							<div className="psikolog-card-client-header">
								<div className="psikolog-card-client-header-left">
									<span
										className="psikolog-card-client-total"
										style={{ fontSize: 40 }}
									>
										List Jadwal
									</span>
									<span style={{ fontSize: 18 }}>
										Segera konfirmasi jadwal dari Klien
									</span>
								</div>
								<div className="psikolog-card-client-header-right">
									<i className="icon icon-schedule02"></i>
								</div>
								<div className="card-ornament02"></div>
							</div>
							<div
								className="psikolog-card-client-content"
								style={{ gap: 0, padding: '50px 40px 30px' }}
							>
								<ul className="card-step-wrapper">
									<li className="card-step-item">
										<span>11 Maret</span>
										<span>Eunha Jung</span>
										<div className="card-step-action">
											<Button
												color="secondary"
												name="Batalkan"
												size="small"
												type="rounded"
												style={{ width: 100 }}
											></Button>
											<Button
												color="primary"
												name="Detail"
												size="small"
												type="rounded"
											></Button>
										</div>
									</li>
								</ul>
								<ul className="card-step-wrapper">
									<li className="card-step-item">
										<span>11 Maret</span>
										<span>Eunha Jung</span>
										<div className="card-step-action">
											<Button
												color="primary"
												name="Konfirmasi"
												size="small"
												type="rounded"
												style={{ width: 100 }}
											></Button>
											<Button
												color="primary"
												name="Detail"
												size="small"
												type="rounded"
											></Button>
										</div>
									</li>
								</ul>
								<ul className="card-step-wrapper">
									<li className="card-step-item">
										<span>11 Maret</span>
										<span>Eunha Jung</span>
										<div className="card-step-action">
											<Button
												color="primary"
												name="Konfirmasi"
												size="small"
												type="rounded"
												style={{ width: 100 }}
											></Button>
											<Button
												color="primary"
												name="Detail"
												size="small"
												type="rounded"
											></Button>
										</div>
									</li>
								</ul>

								<div
									className="row"
									style={{
										marginTop: 30,
										justifyContent: 'center',
									}}
								>
									<Link className="text-link" to="">
										Lihat selengkapnya ...
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
