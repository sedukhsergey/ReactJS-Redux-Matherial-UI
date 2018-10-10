import React from 'react'
import { withStyles, CardActions, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const styles = {
	btnView: {
		backgroundColor: '#2196F3',
		'&:hover': {
			backgroundColor: '#1769aa',
		}
	},
	btnLeft: {
	marginRight: '10px'
	},
	btnRight: {
		marginLeft: '10px'
	},
	btnCenter: {
		margin: '0px 10px 0 25px',
	}
}

const ItemButtons = props => {
	const { classes } = props
	return (
		<CardActions className={classes.btnCenter}>
			<Button 
				variant='contained' 
				size="small" 
				color="secondary"
				className={classes.btnLeft}>
				Add to Cart
			</Button>
			<Button 
				variant='contained' 
				size="small"
				color='primary'
				className={classNames(classes.btnView, classes.btnRight)}>
				VIEW
			</Button>
		</CardActions>
	)
}

ItemButtons.propTypes = {
	classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(ItemButtons) 