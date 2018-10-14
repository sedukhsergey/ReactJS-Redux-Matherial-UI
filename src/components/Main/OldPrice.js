import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = {
	oldPrice: {
	textDecoration: 'line-through',
	color: 'red',
	fontSize: '18px',
	float: 'right',
	marginRight: '115px',
	}
}

const OldPrice = props => {
	const { classes } = props
	return (
		<Typography 
			variant='body2'
			className={classes.oldPrice}>
			$299
		</Typography>
		)
}

OldPrice.propTypes = {
	classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(OldPrice)