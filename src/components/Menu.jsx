import React from 'react'
import Tile from './UI/Tile/Tile'

const Menu = () => {
	return (
		<div className='menu'>
			<div className='menu__title'>
				<h2>List of currencies</h2>
			</div>
			<nav>
				<Tile currency={'EUR'} value={'0.21'} />
				<Tile currency={'USD'} value={'0.29'} />
				<Tile currency={'CZK'} value={'1.43'} />
				<Tile currency={'JPN'} value={'3.45'} />
				<Tile currency={'RUB'} value={'45.13'} />
			</nav>
		</div>
	)
}

export default Menu
