import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuBtn from './UI/MenuBtn/MenuBtn'

const Menu = ({ exchangeList }) => {
	return (
		<div className='menu'>
			<div className='menu__title'>
				<h2>List of currencies</h2>
			</div>
			<nav>
				<ul>
					{Object.entries(exchangeList).map((value, index) => (
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
			</nav>
		</div>
	)
}

export default Menu
