import axios from 'axios'

export default class ExchangeService {
	static async getTimeseries(endDate, startDate, type) {
		const response = await axios({
			method: 'get',
			url: `https://api.apilayer.com/exchangerates_data/timeseries?start_date=${endDate}&end_date=${startDate}&base=PLN&symbols=${type}`,
			redirect: 'follow',
			headers: {
				apikey: 'XUwKC1au6BaZNcbPpgk5YYbbMmAvh3jc',
			},
		})

		return response.data
	}

	static async getFluctuation(startDate) {
		const response = await axios({
			method: 'get',
			url: `https://api.apilayer.com/exchangerates_data/${startDate}&base=PLN`,
			redirect: 'follow',
			headers: {
				apikey: 'XUwKC1au6BaZNcbPpgk5YYbbMmAvh3jc',
			},
		})

		return response.data
	}
}
