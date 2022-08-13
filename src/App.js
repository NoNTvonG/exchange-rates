import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from './components/Menu'
import Char from './components/Char'

const App = () => {
	const [exchange, setExchange] = useState()

	const getApi = async () => {
		const { data } = await axios({
			method: 'get',
			url: 'https://api.apilayer.com/exchangerates_data/convert?to=PLN&from=Eur&amount=4',
			redirect: 'follow',
			headers: {
				apikey: 'XUwKC1au6BaZNcbPpgk5YYbbMmAvh3jc',
			},
		})
		setExchange(data)
	}

	useEffect(() => {
		// getApi()
	}, [])

	return (
		<>
			<div className='App'>
				<div className='exchange'>
					<Menu />
					<div className='exchange__chart'>
						<Char />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
