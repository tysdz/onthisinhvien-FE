import axios from 'axios'

const setAuthToken = (accessToken: string | null) => {
	if (accessToken) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}

export default setAuthToken