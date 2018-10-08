import React, { Fragment } from 'react'
import { withStyles, Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import { UploadButton } from './'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		minWidth: '270px',
		minHeight: '425px',
	},
	grid: {
		minWidth: '270px',
		minHeight: '425px',
		maxWidth: '270px',
		maxHeight: '425px',
		margin: '20px 30px 30px 20px',
	},
	gridRoot: {
		marginBottom: '40px',
		paddingLeft: '0px',
    paddingRight: '40px',
	},
	uploadButton: {
		margin: '10px 0',
	}
})

const Main = props => {
	const { classes } = props
	const renderItems = () => {
		return(
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
						<Paper className={classes.paper}/>
					</Grid>))}
			</Grid>
		)
	}
	return(
		<div className={classes.root}>
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
						<Paper className={classes.paper}/>
					</Grid>))}
			</Grid>
			<Grid
				container
				justify="center"
				className={classes.uploadButton}
				>
				<UploadButton />
			</Grid>

	</div>
	)
}

export default withStyles(styles)(Main)
