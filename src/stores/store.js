import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { 
	selectUserReducer,
	changeListReducer,
	changeListNumberReducer,
	contactReducer,
	displayContactsReducer,
	getItemsPhotoReducer,
	displayItemsPhotoReducer,
	getNewItemsPhotoInStoreReducer,
} from '../reducers/'

const store = createStore (
	combineReducers({
		user: selectUserReducer,
		contacts: contactReducer,
		displayContacts: displayContactsReducer,
		listNumber: changeListNumberReducer,
		list: changeListReducer,
		itemsPhoto: getItemsPhotoReducer,
		itemsPhotoDisplay: displayItemsPhotoReducer,
		newPhotos: getNewItemsPhotoInStoreReducer,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(logger,thunk)
	)

export default store;