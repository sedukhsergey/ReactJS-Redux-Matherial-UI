import {
	SELECT_USER,
	CHANGE_COUNTER,
	CHANGE_LIST,
	GET_CONTACTS,
	DISPLAY_CONTACTS,
} from '../constants/'

const changeListNumberReducer = (stateCounter = 1, action) => {
	switch(action.type) {
		case CHANGE_COUNTER:
			return action.payload;
		default:
			return stateCounter;
	}
}

const changeListReducer = (
	list=[{
		id: 1,
		createdAt: new Date(),
		event: '',
	}], action) => {
	switch(action.type) {
		case CHANGE_LIST:
			return [...action.payload]
		default: 
			return list
	}
}

const contactReducer = ( contacts=[], action) => {
	switch(action.type) {
		case GET_CONTACTS:
			return [...action.payload]
		default: return contacts
	}
}

const displayContactsReducer = (displayContacts = [], action) => {
	switch(action.type) {
		case DISPLAY_CONTACTS:
			return [...action.payload]
		default:
			return displayContacts
	}
}

const selectUserReducer = (user = {}, action ) => {
	switch(action.type) {
		case SELECT_USER:
			return {...action.payload}
		default:
			return user
	}
}

export {
	changeListNumberReducer,
	changeListReducer,
	contactReducer,
	displayContactsReducer,
	selectUserReducer,
}