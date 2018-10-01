import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { 
	selectUserReducer,
	changeListReducer,
	changeListNumberReducer,
	contactReducer,
	displayContactsReducer,
} from '../reducers/'

const store = createStore (
	combineReducers({
		user: selectUserReducer,
		contacts: contactReducer,
		displayContacts: displayContactsReducer,
		listNumber: changeListNumberReducer,
		list: changeListReducer,
	}),
	applyMiddleware(thunk, createLogger())
	)

store.subscribe(() => 
	console.log('myStore', store.getState()))

export default store;