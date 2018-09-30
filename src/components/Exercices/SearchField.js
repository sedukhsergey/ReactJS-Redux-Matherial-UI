import React, {Component} from 'react';
import SearchContactList from './SearchContactList'
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


class ContactList extends Component {
	
	static propTypes = {
	user: PropTypes.array.isRequired,
	selectUserDispatch: PropTypes.func.isRequired,
	}

	state = {
		contacts: [],
		displayContacts: [],
	}

	componentDidMount() { 
		this.fetchInitData()
		.then(users => (
			this.setState ({
				contacts: users
			}))
		);
	}

	fetchInitData() {
		return fetch( 'https://randomuser.me/api/?results=100' )
		.then( results => results.json() )
		.then( data => {
			return data.results.map( elem => {
				return {
					photo: elem.picture.large,
					id: elem.login.uuid,
					phone: elem.phone,
					name: `${ elem.name.first } ${ elem.name.last }`,
					email: elem.email,
				}
			} )
		});
	}

	handleSearchContact = (e) => {
		let searchQuery = e.target.value.toLowerCase();
		searchQuery = searchQuery === '' ? '1' : searchQuery;
		let displayedContacts = this.state.contacts.filter( el => {
			let searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({
			displayContacts: displayedContacts,
		});
	}

	showContact = (ItemId) => {
		const oldItems = this.state.contacts.slice();
		const newItem = oldItems.filter(item =>
			item.id === ItemId )
		this.props.selectUserDispatch(newItem)
	}

	clearDisplayContacts = (event) => {
	this.setState({
		displayContacts: []
	})
	}
	
	clearInputField = (event) => {
		event.target.value = ''
	}

	renderContactsList = () =>
		this.state.displayContacts.map(
			( item, index ) => 
				<SearchContactList
					contacts={item}
					key={item.id}
					showContact={this.showContact}
					clearDisplayContacts={this.clearDisplayContacts}
					id={item.id}
				/>)

	renderUserContainer = () =>
		this.props.user.map(item =>
			<Paper 
				style={{
					padding: '15px', 
				}}
				elevation={1}>
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

	render() {
		const { classes } = this.props
		return (
			<div className={classes.contacts_container}>
				<input className={classes.search_field}
							 type="text" 
							 onChange={
							 this.handleSearchContact}
							 onBlur={this.clearInputField}
							/>
				<div className={classes.container_ul}>
					<ul className={classes.contact_ul}>
								{this.renderContactsList()}
					</ul>
				</div>
				<div>
					{this.renderUserContainer()}
				</div>
			</div>
			)

	}

}
export default withStyles(styles)(ContactList);
