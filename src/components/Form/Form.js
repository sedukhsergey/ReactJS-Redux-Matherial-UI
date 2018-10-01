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
	}
})

const Form = props => {
	console.log('Form',props)
	const {classes} = props
	return (
	<Fragment>
		<Paper>
			<Grid item xs={8} className={classes.container}>
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
	

Form.propTypes = {
	changeNumberListDispatch: PropTypes.func.isRequired,
	listNumber: PropTypes.number.isRequired,
	list: PropTypes.array.isRequired,
	changeListDispatch: PropTypes.func.isRequired,
}

	export default withStyles(styles)(Form)