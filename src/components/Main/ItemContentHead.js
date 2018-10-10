	import React from 'react'
	import PropTypes from 'prop-types'
	import { withStyles, CardMedia } from '@material-ui/core'

	const styles = {
		media: {
			objectFit: 'none',
		},
	}

const ItemContentHead = props => {
	const { classes } = props
	return (
		<CardMedia
			component="img"
			alt="Contemplative Reptile"
			className={classes.media}
			image="http://placehold.it/250x250"
			title="Contemplative Reptile"/>
		)
}

ItemContentHead.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemContentHead)
