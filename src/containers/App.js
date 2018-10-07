import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Exercices from '../components/Exercices/Exercices'
import EventList from '../components/EventList/EventList'
import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import {
	selectUserAction,
	changeNumberListAction,
	changeListAction,
	displayContactsAction,
	getContacts
} from '../actions/'

const App = props =>
	<Fragment>
		<Header/>
		<Switch>
			<Route exact path='/' component={Main}/>
			<Route path='/exercices' render={() => (
				<Exercices 
					user={props.user}
					selectUserDispatch={props.selectUserDispatch}
					getContactsDispatch={props.getContactsDispatch}
					contacts={props.contacts}
					displayContacts={props.displayContacts}
					displayContactsDispatch={props.displayContactsDispatch} />
				)}/>
			<Route path='/event_list' render={() => (
				<EventList 
				changeNumberListDispatch={props.changeNumberListDispatch}
				listNumber={props.listNumber}
				list={props.list}
				changeListDispatch={props.changeListDispatch}/>
			)}/>
		</Switch>
		<Footer />
	</Fragment>
	

const mapStateToProps = store => {
	return {
		user: store.user,
		listNumber: store.listNumber,
		list: store.list,
		contacts: store.contacts,
		displayContacts: store.displayContacts,
	}
}

const mapDispatchToProps = dispatch => ({
	selectUserDispatch(user) {
		const selectAction = selectUserAction(user);
		dispatch(selectAction)
	},
	changeNumberListDispatch(num) {
		const changeNumberList = changeNumberListAction(num);
		dispatch(changeNumberList)
	},
	changeListDispatch(obj) {
		const changeList = changeListAction(obj);
		dispatch(changeList)
	},
	getContactsDispatch() {
		dispatch(getContacts())
	},
	displayContactsDispatch(contacts) {
		const displayContacts = displayContactsAction(contacts)
		dispatch(displayContacts)
	}

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
