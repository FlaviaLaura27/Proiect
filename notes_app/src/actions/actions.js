const SERVER = "http://localhost:8081"

export function getNotes() {
	return {
		type: 'GET_NOTES',
		payload: async () => {
			const response = await fetch(`${SERVER}/api/notes/`)
			// const response = await fetch(`${SERVER}`)
			const data = await response.json();
			console.log(data)
			return data
		}

	}
}