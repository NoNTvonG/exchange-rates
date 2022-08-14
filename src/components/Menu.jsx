import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ExchangeService from '../API/ExchangeService'
import { useDifferenceDate } from '../hooks/useDifferenceDate'
import { useFetching } from '../hooks/useFetching'
import MenuBtn from './UI/MenuBtn/MenuBtn'

const Menu = () => {
	const [startDate, endDate] = useDifferenceDate()
	const [menuData, setMenuData] = useState([])

	const [getTimeseries, loading, error] = useFetching(async () => {
		const response = await ExchangeService.getFluctuation(startDate)
		setMenuData(response.rates)
	})

	useEffect(() => {
		getTimeseries()
	}, [])

	return (
		<div className='menu'>
			<div className='menu__title'>
				<h2>List of currencies</h2>
			</div>
			<nav>
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						{error ? (
							<p>Error</p>
						) : (
							<ul>
								{Object.entries(menuData).map((value, index) => (
									<MenuBtn
										to={'/chart'}
										currency={value[0]}
										value={value[1]}
										key={index}
									/>
								))}
								<li className='back_btn'>
									<NavLink to={'/'}>
										<p>Home</p>
									</NavLink>
								</li>
							</ul>
						)}
					</>
				)}
			</nav>
		</div>
	)
}

export default Menu
