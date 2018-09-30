import React from 'react'
import PropTypes from 'prop-types'

const List = props => {

	const handleDeleteItem = () => {
		props.deleteItem(props.createdAt)
	}

	return (
		<tr>
			<td>
				<label>{props.id}</label>
			</td>
			<td>
				<button onClick={handleDeleteItem}>DeleteItem</button>
			</td>
			<td>{props.createdAt.toTimeString()}</td>
		</tr>
		)
}
		

List.propTypes = {
	deleteItem: PropTypes.func.isRequired,
}
	export default List
