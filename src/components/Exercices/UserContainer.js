import React from 'react'
import PropTypes from 'prop-types'
import  { Paper, Typography, withStyles } from '@material-ui/core/'

const styles = {

}

const UserContainer = props =>
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

	UserContainer.propTypes = {
		user: PropTypes.array.isRequired,
	}


	export default withStyles(styles)(UserContainer)