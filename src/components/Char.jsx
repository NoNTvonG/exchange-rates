import React, { useEffect, useState } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const Char = ({ dataType }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		console.log('другорядне вікно')
		console.log(dataType)
		const keyParam = Object.keys(dataType).map(e => e)
		const valueParam = Object.values(dataType).map(e => Object.values(e)[0])

		for (let index = 0; index < keyParam.length; index++) {
			setData(item => [
				...item,
				{
					date: keyParam[index],
					value: valueParam[index],
				},
			])
		}
	}, [dataType])

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
