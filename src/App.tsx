import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AuthLayout from "./components/layouts/authLayout/AuthLayout";
import DashboardClientLayout from "./components/layouts/dashboardClienLayout/DashboardClientLayout";
import { Forgot } from "./screens/auth/forgot/Forgot";

import { Login } from "./screens/auth/login/Login";
import { Register } from "./screens/auth/register/Register";
import { Verification } from "./screens/auth/verification/Verification";

import { Home } from "./screens/dashboardClient/home/Home";

const App = () => {
  return (
	<>
		<Routes>
			<Route path="/auth" element={<AuthLayout />}>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/register" element={<Register />} />
				<Route path="/auth/forgot" element={<Forgot />} />
				<Route path="/auth/verification" element={<Verification />} />
			</Route>

			<Route path="/klien" element={<DashboardClientLayout />}>
				<Route path="/klien/dashboard" element={<Home />}></Route>
			</Route>
		</Routes>
	</>
  )
}

export default App