import { CHANGE_COUNTER } from '../constants/constants'
const changeListNumberReducer = (stateCounter = 1, action) => {
	switch(action.type) {
		case CHANGE_COUNTER:
			return action.payload;
		default:
			return stateCounter;
	}
}

export default changeListNumberReducer