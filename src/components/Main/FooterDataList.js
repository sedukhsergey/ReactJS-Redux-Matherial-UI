import React from 'react'
import { withStyles, Grid, Paper } from '@material-ui/core'
import { DataList } from './'

const styles = theme=> ({
	gridRoot: {
		marginBottom: '10px',
		},
	grid: {
		minWidth: '300px',
		maxWidth: '300px',
		margin: '10px 20px',
				padding: '10px',
	},
	card: {

		minWidth: '300px',
	}
})

const FooterDataList = props => {
	const { classes } = props
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			item xs={12}
			className={classes.gridRoot}>
			{[1,2,3].map((item, index) =>
				<Grid key={index}
					className={classes.grid}
					item xs={4}>
					<DataList className={classes.card}/>
				</Grid>)}
		</Grid>
		)
}

export default withStyles(styles)(FooterDataList) 