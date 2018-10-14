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
	getContacts,
	getItemsPhotoAction,
	displayItemsPhotoAction,
	getItemsPhotoAction2
} from '../actions/'

const App = props =>
	<Fragment>
		<Header/>
		<Switch>
			<Route exact path='/' render={() => (
				<Main 
					getItemsPhotoDispatch={props.getItemsPhotoDispatch}
					itemsPhoto={props.itemsPhoto}
					itemsPhotoDisplay={props.itemsPhotoDisplay}
					displayItemsPhotoDispatch={props.displayItemsPhotoDispatch}
					newPhotos={props.newPhotos}
					getItemsPhotoNewDispatch={props.getItemsPhotoNewDispatch}
					/>
				)}/>
			<Route path='/exercices' render={() => (
				<Exercices 
					user={props.user}
					selectUserDispatch={props.selectUserDispatch}
					getContactsDispatch={props.getContactsDispatch}
					contacts={props.contacts}
					displayContacts={props.displayContacts}
					displayContactsDispatch={props.displayContactsDispatch}/>
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
		itemsPhoto: store.itemsPhoto,
		itemsPhotoDisplay: store.itemsPhotoDisplay,
		newPhotos: store.newPhotos
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
	},
	getItemsPhotoDispatch() {
		dispatch(getItemsPhotoAction())
	},
	getItemsPhotoNewDispatch() {
		dispatch(getItemsPhotoAction2())
	},
	displayItemsPhotoDispatch(items) {
	const displayItemsPhoto = 
		displayItemsPhotoAction(items)
		dispatch(displayItemsPhoto)
},

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
