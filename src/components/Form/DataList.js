import React, { Fragment } from 'react'
import { List, Buttons, TableHeader } from './'
import PropTypes from 'prop-types'


const DataList = props => {
	const sortByEarliest = () => {
		const sortedList = props.list.sort((a, b) => 
			a.createdAt - b.createdAt)
		props.changeListDispatch(sortedList)
	}

	const sortByLatest = () => {
		const sortedList = props.list.sort((a, b) =>
			b.createdAt - a.createdAt
			)
		props.changeListDispatch(sortedList)
	}

	const addToEnd = () => {
		const date = new Date();
		const nextId = props.listNumber + 1;
			props.changeNumberListDispatch(nextId)
		const newList = [
		...props.list,
		{id: nextId, createdAt: date},
		];
		props.changeListDispatch(newList)
	}
	
	const addToStart = () => {
		const date = new Date();
		const nextId = props.listNumber + 1;
		props.changeNumberListDispatch(nextId)
		const newList = [
			{id: nextId, createdAt: date},
			...props.list,
		];
		props.changeListDispatch(newList)
	}

	const deleteItem = ItemId => {
		const sortList = props.list.filter(item => item.createdAt !== ItemId
		)
		props.changeListDispatch(sortList)
	}
	console.log('DataList', props.list)
	return (
		<Fragment>
			<Buttons 
				addToStart={addToStart}
				addToEnd={addToEnd}
				sortByEarliest={sortByEarliest}
				sortByLatest={sortByLatest}/>
			<table>
				<TableHeader />
				<tbody>
					{props.list.map(item =>
						<List key={item.id} {...item}
						deleteItem={deleteItem}/>)}
				</tbody>
			</table>
		</Fragment>
		)
}

DataList.propTypes = {
	changeListDispatch: PropTypes.func.isRequired,
	listNumber: PropTypes.number.isRequired,
	changeNumberListDispatch: PropTypes.func.isRequired,
	list: PropTypes.array.isRequired,
}
export default DataList