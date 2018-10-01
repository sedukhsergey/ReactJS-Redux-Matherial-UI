import React from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { SearchContactList } from './'

const styles = {
	container_ul: {
		position: 'absolute',
		left: '25%',
		right: '26%',
		maxSize: '500px',
	},
	contact_ul: {
		margin:'0',
		padding: '0'
	},
}

const ContactList = props => {
	const renderContactsList = () =>
		props.displayContacts.map( item => 
			<SearchContactList
				contactsList={props.contacts}
				contacts={item}
				key={item.id}
				id={item.id}
				selectUserDispatch={props.selectUserDispatch}
				displayContactsDispatch={props.displayContactsDispatch}
				/>)

	const { classes } = props
	return (
		<div className={classes.container_ul}>
			<ul className={classes.contact_ul}>
				{renderContactsList()}
			</ul>
		</div>
	)
}

ContactList.propTypes = {
	selectUserDispatch: PropTypes.func.isRequired,
	getContactsDispatch: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	displayContacts: PropTypes.array.isRequired,
	displayContactsDispatch: PropTypes.func.isRequired,
}

export default withStyles(styles)(ContactList)