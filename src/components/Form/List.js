import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Paper, TextField } from '@material-ui/core/'

const styles = {
	events: {
		margin: '10px',
	},
	paper: {
		padding: '10px', 
		marginLeft: '10px',
		marginRight: '10px',
		textAlign: 'center',
	},
}

const List = props => {
const addEventToEventField = e => {
	const event = e.target.value;
	const newItems = props.list.map( item => {
		if (item.createdAt === props.createdAt)
			item.event = event
		return item
	})
		props.changeListDispatch(newItems)
}


	const deleteItem = () => {
		const sortList = props.list.filter(item => item.createdAt !== props.createdAt
		)
		props.changeListDispatch(sortList)
	}
	const {classes} = props
	return (
			<tr>
				<td>
					<Typography variant='title'>{props.id}:</Typography>
				</td>
				<td>
					<TextField
						onChange={addEventToEventField}
						id="event"
						label="Event"
						className={classes.events}
						margin="dense"
						variant="outlined"/>
				</td>
				<td>
					<Typography
						variant='subheading'>
						<Paper className={classes.paper}>
							{props.event}
						</Paper>
					</Typography>
				</td>
				<td>
					<Typography 
						variant='subheading'>
						<Paper className={classes.paper}>
							{
								`${ props.createdAt.getHours()} : 
								${ props.createdAt.getMinutes() }
								${ props.createdAt.toDateString() }`
							}
						</Paper>
					</Typography>
				</td>
				<td>
					<Button 
						variant='contained'
						onClick={deleteItem}
						color='secondary'
						>
						Delete Item
					</Button>
				</td>
			</tr>
		)
}

List.propTypes = {
	id: PropTypes.number.isRequired,
	createdAt: PropTypes.object.isRequired,
}
	export default withStyles(styles)(List)
