import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChartLayout from '../components/ChartLayout'
import { useDifferenceDate } from '../hooks/useDifferenceDate'

import tPeriod from '../period.json'

const ExchangeChart = () => {
	const { currencyType } = useParams()
	const [startDate, endDate] = useDifferenceDate()
	const [dataList, setDataList] = useState()
	const [loading, setLoading] = useState(true)

	const getApi = async () => {
		// const { data } = await axios({
		// 	method: 'get',
		// 	url: `https://api.apilayer.com/exchangerates_data/timeseries?start_date=${endDate}&end_date=${startDate}&base=PLN&symbols=${type}`,
		// 	redirect: 'follow',
		// 	headers: {
		// 		apikey: 'XUwKC1au6BaZNcbPpgk5YYbbMmAvh3jc___',
		// 	},
		// })
		// setDataList(data.rates)

		setDataList(tPeriod.rates)
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		getApi()
	}, [currencyType])

	return (
		<div id='char_page'>
			{loading ? '' : <h2>PLN to {currencyType}</h2>}
			{loading ? (
				<h2>loading...</h2>
			) : (
				<ChartLayout dataType={dataList} currencyType={currencyType} />
			)}
		</div>
	)
}

export default ExchangeChart
