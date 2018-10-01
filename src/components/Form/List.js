import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button, Paper } from '@material-ui/core/'

const List = props => {

	const handleDeleteItem = () => {
		props.deleteItem(props.createdAt)
	}
	return (
		<tr>
			<td>
				<Typography variant='title'>{props.id}:</Typography>
			</td>
			<td>
				<Button 
					variant='contained'
					onClick={handleDeleteItem}
					color='secondary'
					>
					DeleteItem
				</Button>
			</td>
			<td>
				<Typography 
					variant='title'
					style={{marginLeft: '10px', textAlign: 'center'}}>
					<Paper style={{padding: '10px'}}>
						{
							`${ props.createdAt.getHours()} : 
							${ props.createdAt.getMinutes() }
							${ props.createdAt.toDateString() }`
						}
					</Paper>
				</Typography>
			</td>
		</tr>
		)
}

List.propTypes = {
	deleteItem: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	createdAt: PropTypes.object.isRequired,
}
	export default List
