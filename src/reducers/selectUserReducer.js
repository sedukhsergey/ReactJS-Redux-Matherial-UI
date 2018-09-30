const selectUserReducer = (initialArray = [], action ) => {
	switch(action.type) {
		case 'SELECT_USER':
			return initialArray = action.payload
		default:
			return initialArray
	}
}

export default selectUserReducer
