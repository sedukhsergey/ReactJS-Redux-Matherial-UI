import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { ItemCard } from './'

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		minWidth: '270px',
		minHeight: '425px',
	},
	grid: {
		minWidth: '270px',
		maxWidth: '270px',
		maxHeight: '425px',
		margin: '30px 0px 30px 48px',
	},
	gridRoot: {
		marginBottom: '30px',
		paddingLeft: '0px',
    paddingRight: '40px',
	},
})

const Items = props => {
	const { classes } = props

	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			item xs={12}
			className={classes.gridRoot}>
			{props.itemsPhotoDisplay.map( (item, index ) => (
				<Grid 
					key={index}
					className={classes.grid}
					item xs={3}>
						<ItemCard 
							className={classes.paper}
							url={item}/>
				</Grid>))}
		</Grid>
		)
}
	

	Items.propTypes = {
		classes: PropTypes.object.isRequired,
		itemsPhotoDisplay: PropTypes.array.isRequired,
}

export default withStyles(styles)(Items)