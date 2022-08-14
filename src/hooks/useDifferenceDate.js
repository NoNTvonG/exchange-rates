import { differenceInDays, format, previousMonday, addWeeks } from 'date-fns'

export const useDifferenceDate = () => {
	const startDate = new Date()
	let finishDate = previousMonday(previousMonday(startDate))

	if (differenceInDays(startDate, finishDate) >= 14) {
		const temp = finishDate
		finishDate = addWeeks(temp, 1)
		return [format(startDate, 'yyyy-MM-dd'), format(finishDate, 'yyyy-MM-dd')]
	} else {
		return [format(startDate, 'yyyy-MM-dd'), format(finishDate, 'yyyy-MM-dd')]
	}
}
