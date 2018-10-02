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
	return (
		props.user.map(item =>
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" variant='headline'>
					{item.name}
				</Typography>
				<Typography component="p">
					Phone: {item.phone}
				</Typography>
				<Typography component="p">
					Email: {item.email}
				</Typography>
			</CardContent>
		</Card>
		
		)
	)
}
	

	UserContainer.propTypes = {
		user: PropTypes.array.isRequired,
		classes: PropTypes.object.isRequired,
	}


	export default withStyles(styles)(UserContainer)