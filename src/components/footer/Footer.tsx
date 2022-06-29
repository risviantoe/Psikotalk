import React from 'react';
import Icon from '../icon/Icon';
import './Footer.css';
const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer__wrapper">
				<div className="footer__container">
					<div className="footer__col">
						<div className="footer__col-title">
							<h2>Contact</h2>
						</div>
						<div className="footer__col-list">
							<ul>
								<li>
									<span>+62 872 000 213</span>
								</li>
								<li>
									<span>cs@psikotalk.com</span>
								</li>
								<li>
									<span>
										Balikpapan, Kalimantan Timur 76116
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer__col">
						<div className="footer__col-title">
							<h2>Konsultasi</h2>
						</div>
						<div className="footer__col-list">
							<ul>
								<li>
									<a href="http://">
										<span>Room Chat</span>
									</a>
								</li>
								<li>
									<a href="http://">
										<span>Video Meeting</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer__col">
						<div className="footer__col-title">
							<h2>Psikotest</h2>
						</div>
						<div className="footer__col-list">
							<ul>
								<li>
									<a href="http://">
										<span>Psikotest Umum</span>
									</a>
								</li>
								<li>
									<a href="http://">
										<span>Tes IQ</span>
									</a>
								</li>
								<li>
									<a href="http://">
										<span>Diagnosis</span>
									</a>
								</li>
								<li>
									<a href="http://">
										<span>Psikotes Pekerja</span>
									</a>
								</li>
								<li>
									<a href="http://">
										<span>MBTI</span>
									</a>
								</li>
								<li>
									<a href="http://">
										<span>Tes Minat Bakat</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer__col">
						<div className="footer__col-title">
							<h2>Follow Us</h2>
						</div>
						<div className="footer__col-list ">
							<div className="footer__col-list-sosmed">
								<a href="http://">
									<Icon type="icon-insta" color="#fff" />
								</a>
								<a href="http://">
									<Icon type="icon-fb" color="#fff" />
								</a>
								<a href="http://">
									<Icon type="icon-twitter" color="#fff" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="footer__copyright-wrapper">
					<span>
						&copy;{' '}
						<b>
							<i>Psikotalk</i>
						</b>{' '}
						All Rights Reserved
					</span>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
