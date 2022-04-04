import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../Navbar'

import './AuthLayout.css'

import { Hero } from './Hero'

const AuthLayout: React.FC = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="auth-section-wrapper">
                <Hero />
                <Outlet />
            </div>
        </React.Fragment>
    )
}

export default AuthLayout