import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import AuthLayout from "./components/layouts/authLayout/AuthLayout";
import DashboardAdminLayout from "./components/layouts/dashboardAdminLayout/DashboardAdminLayout";
import DashboardPsikologLayout from "./components/layouts/dashboardPsikologLayout/DashboardPsikologLayout";

import { Login } from "./screens/auth/login/Login";
import { Register } from "./screens/auth/register/Register";
import { Verification } from "./screens/auth/verification/Verification";
import { Forgot } from "./screens/auth/forgot/Forgot";

import { AdminHome } from "./screens/admin/home/AdminHome";
import { PsikologHome } from "./screens/psikolog/home/PsikologHome";

const App = () => {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/auth" element={<AuthLayout />}>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/register" element={<Register />} />
				<Route path="/auth/forgot" element={<Forgot />} />
				<Route path="/auth/verification" element={<Verification />} />
			</Route>

			<Route path="/admin" element={<DashboardAdminLayout />}>
				<Route path="/admin/dashboard" element={<AdminHome />}></Route>
				<Route path="/admin/profile" element={<AdminHome />}></Route>
			</Route>

			<Route path="/psikolog" element={<DashboardPsikologLayout />}>
				<Route path="/psikolog/dashboard" element={<PsikologHome />}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
  )
}

export default App