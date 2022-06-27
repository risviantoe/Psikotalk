import React from 'react'
import Button from '../button/Button'
import './Navbar.css'

export const Navbar: React.FC = (props) => {
  return (
    <header>
        <nav className="navbar">
            <div className="nav-logo">
                <img src="/assets/images/logo-large.png" alt="logo" />
            </div>
            <div className="nav-menu">
                <ul className="nav-links">
                    <li>
                        <a className="active" href="/">Home</a>
                        <div className="nav-active-bar"></div>
                    </li>
                    <li>
                        <a href="/">Psikotes</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="nav-btn">
                <Button name="Mulai" style={{ fontSize: 14, borderRadius: 20, padding: '8px 50px' }} />
            </div>
        </nav>
    </header>
  )
}
