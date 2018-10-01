import React, { Fragment} from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Exercices from '../components/Exercices/Exercices'
import Form from '../components/Form/Form'
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
		<Exercices 
			user={props.user}
			selectUserDispatch={props.selectUserDispatch}
			getContactsDispatch={props.getContactsDispatch}
			contacts={props.contacts}
			displayContacts={props.displayContacts}
			displayContactsDispatch={props.displayContactsDispatch}/>
		<Form 
			changeNumberListDispatch={props.changeNumberListDispatch}
			listNumber={props.listNumber}
			list={props.list}
			changeListDispatch={props.changeListDispatch}/>
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
