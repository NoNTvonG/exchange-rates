import React, { useEffect, useState } from 'react'
import { eachWeekOfInterval } from 'date-fns'

const Home = () => {
	const [first, setfirst] = useState()
	useEffect(() => {
		setfirst()

		console.log(
			eachWeekOfInterval({
				start: new Date(Date.now()),
				end: new Date(2014, 10, 23),
			})
		)
	}, [])

	return (
		<>
			<div>виберіть валюту</div>
			{/* {first} */}
		</>
	)
}

export default Home
