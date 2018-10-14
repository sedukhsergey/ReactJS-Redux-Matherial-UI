	import React, {Fragment} from 'react'
	import PropTypes from 'prop-types'
	import { withStyles, CardMedia, Avatar } from '@material-ui/core'

	const styles = {
		media: {
			objectFit: 'none',
		},
		saleAvatar: {
			backgroundColor: '#d60d346b',
			padding: '7px',
			position: 'absolute',
			top: '15px',
			left: '15px',
		}
	}

const ItemContentHead = props => {
	const { classes } = props
	return (
		<Fragment>
			<CardMedia
				component="img"
				alt="Contemplative Reptile"
				className={classes.media}
				image={props.url}
				title="Contemplative Reptile"/>
			<Avatar className={classes.saleAvatar}>Sale</Avatar>
		</Fragment>
		)
}

ItemContentHead.propTypes = {
	classes: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired,
}

export default withStyles(styles)(ItemContentHead)
