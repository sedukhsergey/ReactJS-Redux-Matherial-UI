import React from 'react'
import PropTypes from 'prop-types'
import  { Typography, withStyles, Card, CardContent } from '@material-ui/core/'

const styles = {
	card: {
		maxWidth: 275,

	},
	title: {
		marginBottom: 16,
	},
}

const UserContainer = props => {
	const { classes } = props
	return props.user.name && props.user.phone && props.user.email ? (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" variant='headline'>
					{props.user.name}
				</Typography>
				<Typography component="p">
					Phone: {props.user.phone}
				</Typography>
				<Typography component="p">
					Email: {props.user.email}
				</Typography>
			</CardContent>
		</Card>
	) : null
}
	

	UserContainer.propTypes = {
		user: PropTypes.object.isRequired,
		classes: PropTypes.object.isRequired,
	}


	export default withStyles(styles)(UserContainer)