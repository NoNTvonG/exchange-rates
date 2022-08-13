import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Char from '../components/Char'

import tPeriod from '../period.json'

const ExchangeChart = () => {
	const { type } = useParams()

	const [dataList, setDataList] = useState()
	const [loading, setLoading] = useState(true)

	const getApi = async () => {
		const { data } = await axios({
			method: 'get',
			url: `https://api.apilayer.com/exchangerates_data/timeseries?start_date=2022-08-01&end_date=2022-08-13&base=PLN&symbols=${type}`,
			redirect: 'follow',
			headers: {
				apikey: 'XUwKC1au6BaZNcbPpgk5YYbbMmAvh3jc__',
			},
		})
		setDataList(data.rates)

		// setDataList(tPeriod.rates)
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		getApi()
	}, [type])

	return (
		<div className='char_page'>
			{loading ? '' : <h2>PLN to {type}</h2>}
			{loading ? 'loading' : <Char dataType={dataList} />}
		</div>
	)
}

export default ExchangeChart
