const INITIAL_STATE = {
	notes: [],
	error: null,
	fetching: false,
	fetched: false
}

export default function (state = INITIAL_STATE, action) {
	console.log(action.payload)
	switch (action.type) {
		case 'GET_NOTES_PENDING':
			return {...state, error: null, fetching: true, fetched: false}
		case 'GET_NOTES_FULLFILLED':
			return {...state, employees: [...state.notes, action.payload], fetching: false, fetched: true}
		case 'GET_NOTES_REJECTED':
			return {...state, error: null, fetching: false, fetched: false}
		default:
			return state
		
	}
}