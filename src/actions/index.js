import {
	SELECT_USER,
	CHANGE_COUNTER,
	CHANGE_LIST,
	GET_CONTACTS,
	DISPLAY_CONTACTS,
} from '../constants/'

const changeListAction = payload => {
	return {
		type: CHANGE_LIST,
		payload
	}
}

const changeNumberListAction = payload => {
	return {
		type: CHANGE_COUNTER,
		payload
	}
}

const displayContactsAction = payload => {
	return {
		type: DISPLAY_CONTACTS,
		payload
	}
}

const getContacts = () => dispatch => {
	fetch( 'https://randomuser.me/api/?results=100' )
		.then( results => results.json() )
		.then( result => {
			const data = result.results.map( elem => {
				return {
					photo: elem.picture.large,
					id: elem.login.uuid,
					phone: elem.phone,
					name: `${ elem.name.first } ${ elem.name.last }`,
					email: elem.email,
				}
			})
		dispatch({
			type: GET_CONTACTS,
			payload: data
		})
	});
}

const selectUserAction = (payload) => {
	return {
		type: SELECT_USER,
		payload
	}
}

export {
	changeListAction,
	changeNumberListAction,
	displayContactsAction,
	getContacts,
	selectUserAction,
}