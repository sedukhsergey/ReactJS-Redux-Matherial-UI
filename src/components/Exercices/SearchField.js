import React from 'react';
import { Search, ContactList } from './'
import PropTypes from 'prop-types'
import  { withStyles } from '@material-ui/core/'

const styles = {
	contacts_container: {
		display: 'block',
		width: '100%',
		paddingTop: '5px',
		paddingBottom: '5px',
	},
}

const SearchField = props => {

	const { classes } = props
		return (
			<div className={classes.contacts_container}>
				<Search 
					getContactsDispatch={props.getContactsDispatch}
					displayContactsDispatch={props.displayContactsDispatch}
					contacts={props.contacts}/>
				<ContactList 
					displayContacts={props.displayContacts}
					contacts={props.contacts}
					getContactsDispatch={props.getContactsDispatch}
					displayContactsDispatch={props.displayContactsDispatch}
					selectUserDispatch={props.selectUserDispatch}/>
			</div>
			)
}

SearchField.propTypes = {
	selectUserDispatch: PropTypes.func.isRequired,
	getContactsDispatch: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	displayContacts: PropTypes.array.isRequired,
	displayContactsDispatch: PropTypes.func.isRequired,
	}

export default withStyles(styles)(SearchField);
