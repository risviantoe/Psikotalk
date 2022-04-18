import React from 'react'
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
                <a className="secondary-btn nav-btn-signin" href="/">Masuk</a>
                <a className="primary-btn nav-btn-signup" href="/">Daftar</a>
            </div>
        </nav>
    </header>
  )
}
