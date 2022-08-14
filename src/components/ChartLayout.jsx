import React, { useEffect, useState } from 'react'
import Chart from './UI/Chart/Chart'

const ChartLayout = ({ dataType, currencyType }) => {
	const [data, setData] = useState([])

	useEffect(() => {
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
			<Chart data={data} currencyType={currencyType} />
		</>
	)
}

export default ChartLayout
