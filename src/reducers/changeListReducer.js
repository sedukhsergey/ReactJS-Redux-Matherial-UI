import {
	CHANGE_LIST
} from '../constants/constants'

const changeListReducer = (
	list=[{
		id: 1,
		createdAt: new Date(),
	}], action) => {
	switch(action.type) {
		case CHANGE_LIST:
			return [...action.payload]
		default: 
			return list
	}
}

export default changeListReducer