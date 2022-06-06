import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AuthLayout from './components/layouts/authLayout/AuthLayout';
import DashboardAdminLayout from './components/layouts/dashboardAdminLayout/DashboardAdminLayout';
import DashboardPsikologLayout from './components/layouts/dashboardPsikologLayout/DashboardPsikologLayout';

import { Login } from './screens/auth/login/Login';
import { Register } from './screens/auth/register/Register';
import { Verification } from './screens/auth/verification/Verification';
import { Forgot } from './screens/auth/forgot/Forgot';

import { AdminHome } from './screens/admin/home/AdminHome';
import { PsikologHome } from './screens/psikolog/home/PsikologHome';
import { AdminProfile } from './screens/admin/profile/AdminProfile';
import { PsikologProfile } from './screens/psikolog/profle/PsikologProfile';
import { PsikologSchedule } from './screens/psikolog/schedule/PsikologSchedule';
import { PsikologScheduleHistory } from './screens/psikolog/schedule/PsikologScheduleHistory';
import { PsikologClient } from './screens/psikolog/client/PsikologClient';
import { DashboardLayout } from './components/layouts/dashboardLayout/DashboardLayout';
import PsikologHelp from './screens/psikolog/help/PsikologHelp';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/register" element={<Register />} />
					<Route path="/auth/forgot" element={<Forgot />} />
					<Route
						path="/auth/verification"
						element={<Verification />}
					/>
				</Route>

				<Route path="/admin" element={<DashboardLayout />}>
					<Route
						path="/admin/dashboard"
						element={<AdminHome />}
					></Route>
					<Route
						path="/admin/profile"
						element={<AdminProfile />}
					></Route>
				</Route>

				<Route path="/psikolog" element={<DashboardLayout />}>
					<Route
						path="/psikolog/dashboard"
						element={<PsikologHome />}
					></Route>
					<Route
						path="/psikolog/profile"
						element={<PsikologProfile />}
					></Route>
					<Route
						path="/psikolog/schedule"
						element={<PsikologSchedule />}
					></Route>
					<Route
						path="/psikolog/schedule/history"
						element={<PsikologScheduleHistory />}
					></Route>
					<Route
						path="/psikolog/client"
						element={<PsikologClient />}
					></Route>
					<Route
						path="/psikolog/help"
						element={<PsikologHelp />}
					></Route>
				</Route>

			</Routes>
		</BrowserRouter>
	);
};

export default App;
