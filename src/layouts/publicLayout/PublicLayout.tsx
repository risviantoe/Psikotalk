import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const PublicLayout: React.FC = () => {
    return (
		<React.Fragment>
			<Navbar />
			<Outlet />
			<Footer />
		</React.Fragment>
	);
}

export default PublicLayout
