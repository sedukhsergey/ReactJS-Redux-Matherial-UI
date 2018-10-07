import React, { Fragment } from 'react'
import { withStyles, Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		width: 200,
		height: 300,
	},
	grid: {
		marginTop: '20px',
		marginRight: '50px',
		marginLeft: "45px",
	}
})

const Main = props => {
	const { classes } = props
	return(
		<div className={classes.root}>
			<Grid 
				 container
				direction="row"
				justify="center"
				alignItems="center"
				item xs={12}>
			{[0,1,2,3,4,5].map( (value, index ) => (
				<Grid 
					key={index}
					item sm={3}
					className={classes.grid}>
						<Paper className={classes.paper}/>
					</Grid>))}
			</Grid>
	</div>
	)
}

export default withStyles(styles)(Main)
