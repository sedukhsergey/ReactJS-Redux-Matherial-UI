import React from 'react';
import { SearchContactList } from './'
import PropTypes from 'prop-types'
import  { Paper, Typography, withStyles } from '@material-ui/core/'

const styles = theme => ({
	search_field: {
	width: '60%',
	maxWidth: '500px',
	padding: '5px',
	margin: '10px auto',
	display: 'block',
	fontSize: '20px',
	},
	contact_ul: {
		margin:'0',
		padding: '0'
	},
	contacts_container: {
		display: 'block',
		width: '100%',
		paddingTop: '5px',
		paddingBottom: '5px',
	},
		root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	container_ul: {
		position: 'absolute',
		left: '25%',
		right: '26%',
		maxSize: '500px',
	}

});


const SearchField = props => {

	const handleSearchContact = (e) => {
		let searchQuery = e.target.value.toLowerCase();
		searchQuery = searchQuery === '' ? '1' : searchQuery;
		let displayedContacts = props.contacts.filter( el => {
			let searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		props.displayContactsDispatch(displayedContacts)
	}

	const showContact = (ItemId) => {
		const oldItems = props.contacts.slice();
		const newItem = oldItems.filter(item =>
			item.id === ItemId )
		props.selectUserDispatch(newItem)
	}

	const clearDisplayContacts = (event) => {
		props.displayContactsDispatch([])
	}
	
	const clearInputField = (event) => {
	 event.target.value = ''
	}

	const getContacts = () =>
		props.getContactsDispatch()

	const renderContactsList = () =>
		props.displayContacts.map( item => 
			<SearchContactList
				contacts={item}
				key={item.id}
				showContact={showContact}
				clearDisplayContacts={clearDisplayContacts}
				id={item.id}/>)

	const renderUserContainer = () =>
		props.user.map(item =>
			<Paper 
				style={{
					padding: '15px', 
				}}
				elevation={1}
				key={item.id}>
				<Typography 
					style={{textTransform: 'capitalize'}}
					variant="title">
					{item.name}
				</Typography>
				<Typography 
					variant="subheading">
					Phone: {item.phone}
				</Typography>
				<Typography 
					variant="subheading">
					Email: {item.email}
				</Typography>
			</Paper>
		)

	const { classes } = props
		return (
			<div className={classes.contacts_container}>
				<input 
					className={classes.search_field}
					type="text" 
					onChange={
					handleSearchContact}
					onBlur={clearInputField}
					onFocus={getContacts}/>
				<div className={classes.container_ul}>
					<ul className={classes.contact_ul}>
						{renderContactsList()}
					</ul>
				</div>
				<div>
					{renderUserContainer()}
				</div>
			</div>
			)
}

SearchField.propTypes = {
	user: PropTypes.array.isRequired,
	selectUserDispatch: PropTypes.func.isRequired,
	getContactsDispatch: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	displayContacts: PropTypes.array.isRequired,
	displayContactsDispatch: PropTypes.func.isRequired,
	}

export default withStyles(styles)(SearchField);
