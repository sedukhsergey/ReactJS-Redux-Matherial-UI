import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { UploadButton, Items } from './'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
})

const Main = props => {

	const { classes } = props
	const renderItems = () => <Items />

	return(
		<div className={classes.root}>
			{renderItems()}
			<UploadButton renderItems={renderItems}/>
		</div>
	)
}


Main.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)
