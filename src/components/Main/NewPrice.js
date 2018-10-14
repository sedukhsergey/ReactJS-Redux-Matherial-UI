import React from 'react'
import { withStyles, Typography} from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = {
	newPrice: {
		fontSize: '22px',
		float: 'left',
		marginLeft: '39px'
	}
}

const NewPrice = props => {
	const { classes } = props
	return (
			<Typography
				variant='body1'
				className={classes.newPrice}>
				$249
			</Typography>
		)
}

NewPrice.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NewPrice)