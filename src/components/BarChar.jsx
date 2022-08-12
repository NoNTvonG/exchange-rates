import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
}

const labels = [
	'2020-08-01',
	'2020-08-02',
	'2020-08-03',
	'2020-08-04',
	'2020-08-05',
	'2020-08-06',
	'2020-08-07',
	'2020-08-08',
	'2020-08-09',
	'2020-08-10',
	'2020-08-11',
	'2020-08-12',
	'2020-08-13',
]

export const data = {
	labels,
	datasets: [
		{
			data: [
				4.415204, 4.424017, 4.41278, 4.397282, 4.400945, 4.417818, 4.412455,
				4.414104, 4.414082, 4.400014, 4.406765, 4.402548,
			],
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
	],
}

const BarChar = () => {
	return (
		<div>
			<Line options={options} data={data} />
		</div>
	)
}

export default BarChar
