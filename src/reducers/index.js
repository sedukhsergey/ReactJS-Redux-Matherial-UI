import {
	SELECT_USER,
	CHANGE_COUNTER,
	CHANGE_LIST,
	GET_CONTACTS,
	DISPLAY_CONTACTS,
	GET_ITEMS_PHOTO,
	DISPLAY_ITEMS_PHOTO,
	GET_NEW_ITEMS_PHOTO_IN_STORE,
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
		case GET_ITEMS_PHOTO:
			return [...action.payload]
		default: 
			return items
	}
}

const displayItemsPhotoReducer = (items = [], action) => {
	switch(action.type) {
		case DISPLAY_ITEMS_PHOTO:
				return [...items, ...action.payload ]
		default:
			return items
	}
}

const getNewItemsPhotoInStoreReducer = (items = [], action) => {
	switch(action.type) {
		case GET_NEW_ITEMS_PHOTO_IN_STORE:
			return [ ...action.payload]
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
	getNewItemsPhotoInStoreReducer,
}