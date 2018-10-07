import {createStore, combineReducers, applyMiddleware} from 'redux'
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
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
	)

export default store;