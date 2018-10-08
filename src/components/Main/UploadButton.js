import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const UploadButton = props => {
	const { classes } = props
	return (
		<Button
			variant="outlined"
			color="secondary"
			className={classes.button}>
			Load More
		</Button>
		)
}

UploadButton.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UploadButton)