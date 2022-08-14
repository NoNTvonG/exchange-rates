import { format, parseISO } from 'date-fns'
import React from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import ChartTooltip from './ChartTooltip'

const Chart = ({ data, currencyType }) => {
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
					<XAxis
						dataKey='date'
						axisLine={false}
						tickLine={false}
						tickFormatter={str => {
							const date = parseISO(str)
							if (date.getDate() % 2 === 0) {
								return format(date, 'dd/MM/YYY')
							}
							return ''
						}}
					/>
					<YAxis
						dataKey='value'
						axisLine={false}
						tickLine={false}
						tickCount={8}
						domain={['dataMin', 'dataMax']}
						tickFormatter={num => `$${num.toFixed(2)}`}
					/>
					<Tooltip content={<ChartTooltip currency={currencyType} />} />
					<CartesianGrid opacity={0.1} vertical={false} />
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}

export default Chart
