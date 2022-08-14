import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../button/Button';
import './Navbar.css';

export const Navbar: React.FC = () => {
	const location = useLocation(); // once ready it returns the 'window.location' object
	const [url, setUrl] = useState<string>('');
	// useEffect(() => {
	// 	setUrl(location.pathname);
    // }, [location]);
    

    const navActive = (e: string) => {
        setUrl(e)
    }
    
	return (
		<header>
			<nav className="navbar">
				<div className="nav-logo">
					<img src="/assets/images/logo-large.png" alt="logo" />
				</div>
				<div className="nav-menu">
					<ul className="nav-links">
						<li>
							<a
								className={
									url === 'home' ? ' active' : ''
								}
								href="#home"
								onClick={(e) => navActive('home')}
							>
								Beranda
							</a>
							{url === 'home' ? (
								<div className="nav-active-bar"></div>
							) : null}
						</li>
						<li>
							<a
								className={url === 'feature' ? ' active' : ''}
								href="#feature"
								onClick={(e) => navActive('feature')}
							>
								Layanan
							</a>
							{url === 'feature' ? (
								<div className="nav-active-bar"></div>
							) : null}
						</li>
						<li>
							<a
								className={url === 'join' ? ' active' : ''}
								href="#offers"
								onClick={(e) => navActive('join')}
							>
								Tentang
							</a>
							{url === 'join' ? (
								<div className="nav-active-bar"></div>
							) : null}
						</li>
						<li>
							<a
								className={url === 'contact' ? ' active' : ''}
								href="#contact"
								onClick={(e) => navActive('contact')}
							>
								{/* Contact */}
							</a>
							{url === 'contact' ? (
								<div className="nav-active-bar"></div>
							) : null}
						</li>
					</ul>
				</div>
				<div className="nav-btn">
					<a
						href="#cta"
						className="button primary"
						style={{
							fontSize: 14,
							borderRadius: 20,
							padding: '8px 50px',
						}}
					>
						Mulai
					</a>
				</div>
			</nav>
		</header>
	);
};
