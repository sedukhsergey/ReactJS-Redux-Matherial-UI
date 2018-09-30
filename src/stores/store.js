import {createStore, combineReducers} from 'redux'
import selectUserReducer from '../reducers/selectUserReducer'
import changeListNumberReducer from '../reducers/changeListNumberReducer'
import changeListReducer from '../reducers/changeListReducer'
const store = createStore (
	combineReducers({
		user: selectUserReducer,
		listNumber: changeListNumberReducer,
		list: changeListReducer,
	})
	)

store.subscribe(() => 
	console.log('myStore', store.getState()))

export default store;