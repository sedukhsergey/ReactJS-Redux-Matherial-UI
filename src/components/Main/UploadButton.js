import React from 'react'
import { withStyles, Button, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	uploadButton: {
		margin: '10px 0',
	}
});

const UploadButton = props => {
	const { classes } = props
	return (
		<Grid
			container
			justify="center"
			className={classes.uploadButton}>
			<Button
				variant="outlined"
				color="secondary"
				className={classes.button}
				onClick={props.renderItems}>
				Load More
			</Button>
		</Grid>
		)
}

UploadButton.propTypes = {
	classes: PropTypes.object.isRequired,
	renderItems: PropTypes.func.isRequired,
}

export default withStyles(styles)(UploadButton)