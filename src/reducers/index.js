import {
	SELECT_USER,
	CHANGE_COUNTER,
	CHANGE_LIST,
	GET_CONTACTS,
	DISPLAY_CONTACTS,
	GET_ITEM_PHOTO,
	DISPLAY_ITEMS_PHOTO,
	GET_ITEM_PHOTO2,
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


const getItemsPhotoReducer = (items = [], action) => {
	switch(action.type) {
		case GET_ITEM_PHOTO:
			return [...items, action.payload]
		default: 
			return items
	}
}

const displayItemsPhotoReducer = (items = [], action) => {
	switch(action.type) {
		case DISPLAY_ITEMS_PHOTO:
		const array=[];
				return [ ...items ] = array.concat(action.payload)
		default:
			return items
	}
}

const getItemsPhotoReducer2 = (items = [], action) => {
	switch(action.type) {
		case GET_ITEM_PHOTO2:
			return [...items, action.payload]
		default:
			return items
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
	getItemsPhotoReducer,
	displayItemsPhotoReducer,
	getItemsPhotoReducer2,
}