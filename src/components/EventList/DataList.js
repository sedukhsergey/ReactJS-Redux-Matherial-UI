import React, { Fragment } from 'react'
import { List, Buttons, TableHeader } from './'
import PropTypes from 'prop-types'


const DataList = props => {
	return (
		<Fragment>
			<Buttons 
				changeListDispatch={props.changeListDispatch}
				listNumber={props.listNumber}
				changeNumberListDispatch={props.changeNumberListDispatch}
				list={props.list}/>
			<table>
				<thead>
					<TableHeader />
				</thead>
				<tbody>
					{props.list.map(item =>
						<List key={item.id} {...item}
						changeListDispatch={props.changeListDispatch}
						list={props.list}/>)}
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