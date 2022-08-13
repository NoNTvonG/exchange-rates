import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './MenuBtn.module.scss'

const MenuBtn = ({ to, currency, value }) => {
	return (
		<li className={style.tile}>
			<NavLink to={`${to}/${currency}`}>
				<p>{currency}</p>
				<p>{value}</p>
			</NavLink>
		</li>
	)
}

export default MenuBtn
