import React from 'react'
import style from './Tile.module.scss'

const Tile = ({ currency, value }) => {
	return (
		<div className={style.tile}>
			<p>{currency}</p>
			<p>{value}</p>
		</div>
	)
}

export default Tile
