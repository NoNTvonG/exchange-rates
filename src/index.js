import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import App from './App'
import ExchangeChart from './pages/ExchangeChart'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
				<Route path='/chart/:type' element={<ExchangeChart />} />
			</Route>
		</Routes>
	</BrowserRouter>
	// </React.StrictMode>
)
