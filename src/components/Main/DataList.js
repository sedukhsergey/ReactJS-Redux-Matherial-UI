import React from 'react'
import { withStyles, Card } from '@material-ui/core'

const styles = {
	dataList: {
		padding: '20px',
		lineHeight: '43px',
		listStyle: 'none',
		textAlign: 'center'
	}
}

const DataList = props => {
	const { classes } = props
	return (
		<Card className={classes.dataList}>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem ipsum dolor sit amet.</li>
		</Card>
		)
}

export default withStyles(styles)(DataList)