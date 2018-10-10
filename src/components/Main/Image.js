import React from 'react'
import {withStyles, CardMedia, CardActionArea, Typography, CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'
import { ImageHead } from './'

const styles = {

}

const ImageContent = props => {
	const { classes } = props
	return (
		<CardActionArea>
			<ImageHead />
			<CardContent>
				<Typography gutterBottom variant="title">
					Lorem ipsum dolor.
				</Typography>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores rem libero tempora, ipsam veritatis non.
				</Typography>
			</CardContent>
		</CardActionArea>
		
	)
}

ImageContent.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImageContent)