import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AuthLayout from './components/layouts/authLayout/AuthLayout';

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
import PsikologIncome from './screens/psikolog/income/PsikologIncome';
import PsikologNotification from './screens/psikolog/notification/PsikologNotification';
import PsikologLogin from './screens/psikolog/auth/PsikologLogin';
import AdminClient from './screens/admin/client/AdminClient';
import AdminPsikolog from './screens/admin/psikolog/AdminPsikolog';
import AdminPayment from './screens/admin/payment/AdminPayment';
import AdminPost from './screens/admin/post/AdminPost';
import AdminPaymentHistory from './screens/admin/payment/AdminPaymentHistory';
import { titleIconSize } from './screens/admin/AdminConfig';
import AdminPostCreate from './screens/admin/post/AdminPostCreate';
import AdminPostEdit from './screens/admin/post/AdminPostEdit';
import AdminQuestionBank from './screens/admin/questionBank/AdminQuestionBank';
import AdminQuestionBankEdit from './screens/admin/questionBank/AdminQuestionBankEdit';
import AdminQuestionCreate from './screens/admin/questionBank/AdminQuestionCreate';
import AdminPrice from './screens/admin/price/AdminPrice';
import AdminPriceCreate from './screens/admin/price/AdminPriceCreate';
import { MdAccessTimeFilled, MdHelp, MdNotifications, MdPriceChange, MdSpaceDashboard } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaClipboardList, FaMoneyCheckAlt, FaUserMd } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { IoIosPaper, IoMdPeople } from 'react-icons/io';
import { AiFillSchedule } from 'react-icons/ai';
import ComingSoon from './screens/ComingSoon';
import LandingPage from './screens/public/LandingPage';
import AdminConsultation from './screens/admin/consultation/AdminConsultation';
import AdminLogin from './screens/admin/auth/AdminLogin';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>

				<Route path="/auth" element={<AuthLayout />}>
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/register" element={<Register />} />
					<Route path="/auth/forgot" element={<Forgot />} />
					<Route
						path="/auth/verification"
						element={<Verification />}
					/>
				</Route>

				<Route
					path="/psikolog/signin"
					element={<PsikologLogin />}
				></Route>

				<Route
					path="/admin/signin"
					element={<AdminLogin />}
				></Route>

				<Route
					path="/admin"
					element={<DashboardLayout pageFor="admin" />}
				>
					<Route
						path="/admin/dashboard"
						element={
							<AdminHome
								icon={<MdSpaceDashboard size={titleIconSize} />}
								pageTitle="Dashboard Admin"
							/>
						}
					></Route>
					<Route
						path="/admin/profile"
						element={
							<AdminProfile
								icon={<HiUser size={titleIconSize} />}
								pageTitle="Profile"
							/>
						}
					></Route>
					<Route
						path="/admin/client"
						element={
							<AdminClient
								icon={<BsPeopleFill size={titleIconSize} />}
								pageTitle="Daftar Klien"
							/>
						}
					></Route>
					<Route
						path="/admin/psikolog"
						element={
							<AdminPsikolog
								icon={<FaUserMd size={titleIconSize} />}
								pageTitle="Daftar Psikolog"
							/>
						}
					></Route>
					<Route
						path="/admin/consultation"
						element={
							<AdminConsultation
								icon={<IoMdPeople size={titleIconSize} />}
								pageTitle="Daftar Konsultasi"
							/>
						}
					></Route>
					<Route
						path="/admin/payment/confirmation"
						element={
							<AdminPayment
								icon={<GoChecklist size={titleIconSize} />}
								pageTitle="Konfirmasi Pembayaran"
							/>
						}
					></Route>
					<Route
						path="/admin/payment/history"
						element={
							<AdminPaymentHistory
								icon={
									<MdAccessTimeFilled size={titleIconSize} />
								}
								pageTitle="Riwayat Pembayaran"
							/>
						}
					></Route>
					<Route
						path="/admin/post"
						element={
							<AdminPost
								icon={<IoIosPaper size={titleIconSize} />}
								pageTitle="Daftar Postingan"
							/>
						}
					></Route>
					<Route
						path="/admin/post/create"
						element={
							<AdminPostCreate
								icon={<IoIosPaper size={titleIconSize} />}
								pageTitle="Tambah Postingan"
							/>
						}
					></Route>
					<Route
						path="/admin/post/edit"
						element={
							<AdminPostEdit
								icon={<IoIosPaper size={titleIconSize} />}
								pageTitle="Edit Postingan"
							/>
						}
					></Route>
					<Route
						path="/admin/bank-question"
						element={
							<AdminQuestionBank
								icon={<FaClipboardList size={titleIconSize} />}
								pageTitle="Bank Soal"
							/>
						}
					></Route>
					<Route
						path="/admin/bank-question/edit"
						element={
							<AdminQuestionBankEdit
								icon={<FaClipboardList size={titleIconSize} />}
								pageTitle="Edit Bank Soal"
							/>
						}
					></Route>
					<Route
						path="/admin/bank-question/edit/question/create"
						element={
							<AdminQuestionCreate
								icon={<FaClipboardList size={titleIconSize} />}
								pageTitle="Tambah Butir Soal"
							/>
						}
					></Route>
					<Route
						path="/admin/bank-question/edit/question/edit"
						element={
							<AdminQuestionCreate
								icon={<FaClipboardList size={titleIconSize} />}
								pageTitle="Edit Butir Soal"
							/>
						}
					></Route>
					<Route
						path="/admin/price"
						element={
							<AdminPrice
								icon={<MdPriceChange size={titleIconSize} />}
								pageTitle="Daftar Harga"
							/>
						}
					></Route>
					<Route
						path="/admin/price/add"
						element={
							<AdminPriceCreate
								icon={<MdPriceChange size={titleIconSize} />}
								pageTitle="Tambah Harga"
							/>
						}
					></Route>
					<Route
						path="/admin/price/edit/:id"
						element={
							<AdminPriceCreate
								icon={<MdPriceChange size={titleIconSize} />}
								pageTitle="Edit Harga"
							/>
						}
					></Route>
				</Route>

				<Route
					path="/psikolog"
					element={<DashboardLayout pageFor="psikolog" />}
				>
					<Route
						path="/psikolog/dashboard"
						element={
							<PsikologHome
								icon={<MdSpaceDashboard size={titleIconSize} />}
								pageTitle="Dashboard Psikolog"
							/>
						}
					></Route>
					<Route
						path="/psikolog/profile"
						element={
							<PsikologProfile
								icon={<HiUser size={titleIconSize} />}
								pageTitle="Profil Psikolog"
							/>
						}
					></Route>
					<Route
						path="/psikolog/schedule"
						element={
							<PsikologSchedule
								icon={<AiFillSchedule size={titleIconSize} />}
								pageTitle="Jadwal Konsultasi"
							/>
						}
					></Route>
					<Route
						path="/psikolog/schedule/history"
						element={
							<PsikologScheduleHistory
								icon={<AiFillSchedule size={titleIconSize} />}
								pageTitle="Jadwal Konsultasi"
							/>
						}
					></Route>
					<Route
						path="/psikolog/client"
						element={
							<PsikologClient
								icon={<BsPeopleFill size={titleIconSize} />}
								pageTitle="Daftar Klien"
							/>
						}
					></Route>
					<Route
						path="/psikolog/help"
						element={
							<PsikologHelp
								icon={<MdHelp size={titleIconSize} />}
								pageTitle="Bantuan"
							/>
						}
					></Route>
					<Route
						path="/psikolog/income"
						element={
							<PsikologIncome
								icon={<FaMoneyCheckAlt size={titleIconSize} />}
								pageTitle="Pendapatan"
							/>
						}
					></Route>
					<Route
						path="/psikolog/notification"
						element={
							<PsikologNotification
								icon={<MdNotifications size={titleIconSize} />}
								pageTitle="Notifikasi"
							/>
						}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
