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

const getItemsPhotoAction = () => dispatch => {
	[1,2,3,4].forEach(() => {
		const data = [];
		fetch('https://picsum.photos/g/250/250/?random')
		.then( result => {
			data.push(result.url)
				dispatch({
					type: GET_ITEMS_PHOTO,
					payload: data
				})
		})
	})
}

const getNewItemsPhotoInStoreAction = () => dispatch => {
	const data = [];
	[1,2,3,4].forEach(() => {
		fetch('https://picsum.photos/g/250/250/?random')
		.then( result => {
			data.push(result.url)
					dispatch({
						type: GET_NEW_ITEMS_PHOTO_IN_STORE,
						payload: data
					})
		})
	})

}

const displayItemsPhotoAction = payload => {
	return {
		type: DISPLAY_ITEMS_PHOTO,
		payload
	}
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
	getItemsPhotoAction,
	selectUserAction,
	displayItemsPhotoAction,
	getNewItemsPhotoInStoreAction,
}