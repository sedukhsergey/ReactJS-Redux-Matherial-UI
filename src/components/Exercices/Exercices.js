import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core/'
import { SearchField, UserContainer } from './'

const Exercices = props =>
	<Grid container>
		<Grid item xs={12}>
			<SearchField 
				selectUserDispatch={props.selectUserDispatch}
				getContactsDispatch={props.getContactsDispatch}
				contacts={props.contacts}
				displayContacts={props.displayContacts}
				displayContactsDispatch={props.displayContactsDispatch}/>
		</Grid>
		<Grid item xs={5}>
			<UserContainer user={props.user}/>
		</Grid>
	</Grid>

Exercices.propTypes = {
	user: PropTypes.object.isRequired,
	selectUserDispatch: PropTypes.func.isRequired,
	getContactsDispatch: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	displayContacts: PropTypes.array.isRequired,
	displayContactsDispatch: PropTypes.func.isRequired,
}

	export default Exercices