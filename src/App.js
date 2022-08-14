import React from 'react'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

const App = () => {
	return (
		<>
			<div className='App'>
				<Menu />
				<div className='layout'>
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default App
