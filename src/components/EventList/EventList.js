import React, { Fragment } from 'react'
import { Grid, Paper } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'
import { DataList } from './'
import PropTypes from 'prop-types'

const styles = theme => ({
	container: {
		margin: '0 auto',
		fontFamily: 'Roboto',
		boxShadow: theme.spacing.unit * 4,
	},
	paper: {
		margin: '10px auto 15px auto',
		padding: '10px',
		maxWidth: '800px'
	}
})

const EventList = props => {
	const {classes} = props
	return (
		<Fragment>
			<Paper className={classes.paper}>
				<Grid item xs={12} className={classes.container}>
					<DataList 
						list={props.list}
						listNumber={props.listNumber}
						changeListDispatch={props.changeListDispatch}
						changeNumberListDispatch={props.changeNumberListDispatch}/>
				</Grid>
			</Paper>
		</Fragment> 
		)
}

EventList.propTypes = {
	changeNumberListDispatch: PropTypes.func.isRequired,
	listNumber: PropTypes.number.isRequired,
	list: PropTypes.array.isRequired,
	changeListDispatch: PropTypes.func.isRequired,
}

	export default withStyles(styles)(EventList)