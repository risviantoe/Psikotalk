import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/allIcons';
import LineChart from '../../../components/lineChart/LineChart';

import './PsikologIncome.css';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [1000, 200, 300, 100, 250, 50, 60];

const PsikologIncome = () => {
	return (
		<React.Fragment>
			<div className="psikolog__content--title color-psikolog">
				<FaMoneyCheckAlt size={60} />
				<h1>Pendapatan Psikolog</h1>
			</div>
			<div className="psikolog__content--body bg-white">
				<div className="psikolog__income--content-wrapper">
					<div className="psikolog__income--cards-wrapper">
						<div className="psikolog__income--card-item">
							<span className="income--card-title">
								Jumlah Klien
							</span>
							<span className="income--card-total">13</span>
							<span className="income--card-desc">
								per bulan Juli
							</span>
						</div>
						<div className="psikolog__income--card-item">
							<span className="income--card-title">
								Jumlah Klien
							</span>
							<span className="income--card-total">13</span>
							<span className="income--card-desc">
								per bulan Juli
							</span>
						</div>
						<div className="psikolog__income--card-item">
							<span className="income--card-title">
								Jumlah Klien
							</span>
							<span className="income--card-total">13</span>
							<span className="income--card-desc">
								per bulan Juli
							</span>
						</div>
					</div>
					<div className="psikolog__income--chart-wrapper">
						<div className="psikolog__income--chart-title">
							<span>Grafik Pendapatan Psikolog</span>
						</div>
						<div className="psikolog__income--chart-content">
							<LineChart
								legendDisplay={false}
								title="Pendapatan"
								labels={labels}
								dataChart={data}
								width="100%"
								height="63px"
								borderColor="#4FBDBA"
								backgroundColor="#35858B"
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PsikologIncome;
