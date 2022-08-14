import { format, parseISO } from 'date-fns'
import React from 'react'

const ChartTooltip = ({ active, payload, currency }) => {
	if (active) {
		return (
			<div className='tooltip' fill='#1b1d20'>
				<h4>{format(parseISO(payload[0].payload.date), 'dd/MM/YYY')}</h4>
				<p>
					{payload[0].value.toFixed(4)} {currency}
				</p>
			</div>
		)
	}
	return null
}

export default ChartTooltip
