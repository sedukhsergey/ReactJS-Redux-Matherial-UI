import React from 'react'
import { Grid, Paper, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { ItemCard } from './'

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		minWidth: '270px',
		minHeight: '425px',
	},
	grid: {
		minWidth: '270px',
		maxWidth: '270px',
		maxHeight: '425px',
		margin: '30px 30px 30px 20px',
	},
	gridRoot: {
		marginBottom: '30px',
		paddingLeft: '0px',
    paddingRight: '40px',
	},
})

const Items = props => {
	const { classes } = props
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			item xs={12}
			className={classes.gridRoot}>
			{[0,1,2,3].map( (value, index ) => (
				<Grid 
					key={index}
					className={classes.grid}
					item xs={3}>
						<ItemCard className={classes.paper}/>
				</Grid>))}
		</Grid>
		)
}
	

Items.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Items)