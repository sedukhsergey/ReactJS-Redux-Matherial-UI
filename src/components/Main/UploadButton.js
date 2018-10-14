import React from 'react'
import { withStyles, Button, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
	button: {
		margin: '10px auto',
	},
	uploadButton: {
	}
});

const UploadButton = props => {
	const handleClick = () => {
		props.displayItemsPhotoDispatch(props.newPhotos)
		props.getItemsPhotoNewDispatch()
	}
	const { classes } = props
	console.log('UploadButton',props)
	return (
		<Grid
			container
			justify="center"
			className={classes.uploadButton}>
			<Button
				variant="outlined"
				color="secondary"
				className={classes.button}
				onClick={handleClick}>
				Load More
			</Button>
		</Grid>
		)
}

UploadButton.propTypes = {
	classes: PropTypes.object.isRequired,
	getItemsPhotoNewDispatch: PropTypes.func.isRequired,
	displayItemsPhotoDispatch: PropTypes.func.isRequired,
	newPhotos: PropTypes.array.isRequired,
}

export default withStyles(styles)(UploadButton)