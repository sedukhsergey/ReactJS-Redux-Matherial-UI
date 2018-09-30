import React from 'react'
import List from './List'
import PropTypes from 'prop-types'

const DataList = props =>
	<div>
		<button onClick={props.addToStart}> Add New to Start</button>
		<button onClick={props.addToEnd}>Add New to End</button>
		<button onClick={props.sortByEarliest}>Sort by Earliest</button>
		<button onClick={props.sortByLatest}>Sort by Latest</button>
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Delete</th>
					<th>Created at</th>
				</tr>
			</thead>
			<tbody>
				{props.list.map((item, index) =>
					<List key={index} {...item}
					deleteItem={props.deleteItem}/>)}
			</tbody>
		</table>
	</div>

DataList.propTypes = {
	deleteItem: PropTypes.func.isRequired,
	list: PropTypes.array.isRequired,
	sortByLatest: PropTypes.func.isRequired,
	sortByEarliest: PropTypes.func.isRequired,
	addToStart: PropTypes.func.isRequired,
	addToEnd: PropTypes.func.isRequired,
}

export default DataList