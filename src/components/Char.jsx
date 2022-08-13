import React, { useState } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const Char = () => {
	const [data, setData] = useState([
		{ date: '2022-08-13', value: 4.445528 },
		{ date: '2022-08-12', value: 4.415204 },
		{ date: '2022-08-11', value: 4.424017 },
		{ date: '2022-08-10', value: 4.41278 },
		{ date: '2022-08-09', value: 4.397282 },
		{ date: '2022-08-08', value: 4.400945 },
		{ date: '2022-08-07', value: 4.417818 },
		{ date: '2022-08-06', value: 4.412455 },
		{ date: '2022-08-05', value: 4.414104 },
		{ date: '2022-08-04', value: 4.414082 },
		{ date: '2022-08-03', value: 4.400014 },
		{ date: '2022-08-02', value: 4.406765 },
		{ date: '2022-08-01', value: 4.402548 },
	])

	return (
		<>
			<ResponsiveContainer width='100%'>
				<AreaChart data={data}>
					<defs>
						<linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#FFBD2F' stopOpacity={0.4}></stop>
							<stop offset='75%' stopColor='#FFBD2F' stopOpacity={0.05}></stop>
						</linearGradient>
					</defs>
					<Area dataKey='value' stroke='#FFBD2F' fill='url(#color)' />
					<XAxis dataKey='date' axisLine={false} tickLine={false} />
					<YAxis
						dataKey='value'
						axisLine={false}
						tickLine={false}
						tickCount={8}
						domain={['dataMin', 'dataMax']}
						tickFormatter={num => `$${num.toFixed(2)}`}
					/>
					<Tooltip content={<CustomTooltip />} />
					<CartesianGrid opacity={0.1} vertical={false} />
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}

function CustomTooltip({ active, payload, label }) {
	if (active) {
		return (
			<div className='tooltip' fill='#1b1d20'>
				<h4>{payload[0].payload.data}</h4>
				<p>{payload[0].value.toFixed(4)} EUR</p>
			</div>
		)
	}
	return null
}

export default Char
