import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExchangeService from '../API/ExchangeService'
import ChartLayout from '../components/ChartLayout'
import { useDifferenceDate } from '../hooks/useDifferenceDate'
import { useFetching } from '../hooks/useFetching'

const ExchangeChart = () => {
	const { currencyType } = useParams()
	const [startDate, endDate] = useDifferenceDate()
	const [dataList, setDataList] = useState()
	const [getTimeseries, loading, error] = useFetching(async () => {
		const response = await ExchangeService.getTimeseries(
			endDate,
			startDate,
			currencyType
		)
		setDataList(response.rates)
	})

	useEffect(() => {
		getTimeseries()
	}, [currencyType])

	return (
		<div id='char_page'>
			{loading ? (
				<h2>Loading...</h2>
			) : (
				<>
					{error ? (
						<h2>Error</h2>
					) : (
						<>
							<h2>PLN to {currencyType}</h2>
							<ChartLayout dataType={dataList} currencyType={currencyType} />
						</>
					)}
				</>
			)}
		</div>
	)
}

export default ExchangeChart
