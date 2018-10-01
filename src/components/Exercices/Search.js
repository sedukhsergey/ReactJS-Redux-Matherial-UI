import React from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = {
	search_field: {
		width: '60%',
		maxWidth: '500px',
		padding: '5px',
		margin: '10px auto',
		display: 'block',
		fontSize: '20px',
	},
}

const Search = props => {

	const handleSearchContact = (e) => {
		let searchQuery = e.target.value.toLowerCase();
		searchQuery = searchQuery === '' ? '1' : searchQuery;
		let displayedContacts = props.contacts.filter( el => {
			let searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		props.displayContactsDispatch(displayedContacts)
	}

	const clearInputField = (event) =>
		event.target.value = ''

	const getContacts = () =>
		props.getContactsDispatch()

	const { classes } = props

	return (
		<input 
			className={classes.search_field}
			type="text" 
			onChange={
			handleSearchContact}
			onBlur={clearInputField}
			onFocus={getContacts}/>
		)
	}

Search.propTypes = {
	getContactsDispatch: PropTypes.func.isRequired,
	displayContactsDispatch: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
}

export default withStyles(styles)(Search)