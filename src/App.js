import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

import tList from './list.json'

const App = () => {
	const [exchange, setExchange] = useState()

	// const getApi = async () => {
	// 	const { data } = await axios({
	// 		method: 'get',
	// 		url: 'https://api.apilayer.com/exchangerates_data/convert?to=PLN&from=Eur&amount=4',
	// 		redirect: 'follow',
	// 		headers: {
	// 			apikey: 'XUwKC1au6BaZNcbPpgk5YYbbMmAvh3jc',
	// 		},
	// 	})
	// 	setExchange(data)
	// }

	// useEffect(() => {
	// 	// getApi()
	// 	console.log(tList.rates)
	// }, [])

	return (
		<>
			<div className='App'>
				<Menu exchangeList={tList.rates} />
				<div className='layout'>
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default App
