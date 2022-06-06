import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface LineChartProps {
	legendDisplay?: boolean;
	title: string;
	labels: string[];
	dataChart: number[];
	width?: string;
	height?: string;
	borderColor?: string;
	backgroundColor?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
	legendDisplay,
	labels,
	title,
	dataChart,
	width,
	height,
	borderColor = '#4FBDBA',
	backgroundColor = '#35858B',
}) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: legendDisplay,
				position: 'top' as const,
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: title,
				data: dataChart,
				borderColor: borderColor,
				backgroundColor: backgroundColor,
			},
		],
	};
	return <Line options={options} data={data} width={width} height={height} />;
};

export default LineChart;
