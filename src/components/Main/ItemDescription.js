import React from 'react'
import {  CardContent, Typography, withStyles } from '@material-ui/core'

const styles = {
	bottom: {
		paddingTop: '3px',
	}
}

const ItemDescription = props => {
	const { classes } = props
	return (
		<CardContent className={classes.bottom}>
			<Typography gutterBottom variant="title">
				Lorem ipsum dolor.
			</Typography>
			<Typography variant="body1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</Typography>
		</CardContent>
		)
	
} 
export default withStyles(styles)(ItemDescription)