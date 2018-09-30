import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SearchField from './SearchField'
import { Grid } from '@material-ui/core/'
import DataList from './DataList'

class Exercices extends Component {

	static propTypes = {
	user: PropTypes.array.isRequired,
	selectUserDispatch: PropTypes.func.isRequired,
	changeNumberListDispatch: PropTypes.func.isRequired,
	listNumber: PropTypes.number.isRequired,
	list: PropTypes.array.isRequired,
	changeListDispatch: PropTypes.func.isRequired,
}

	sortByEarliest = () => {
		const sortedList = this.props.list.sort((a, b) => 
			a.createdAt - b.createdAt)
		this.props.changeListDispatch(sortedList)
	}

	sortByLatest = () => {
		const sortedList = this.props.list.sort((a, b) =>
			b.createdAt - a.createdAt
			)
		this.props.changeListDispatch(sortedList)
	}

	addToEnd = () => {
		const date = new Date();
		const nextId = this.props.listNumber + 1;
			this.props.changeNumberListDispatch(nextId)
		const newList = [
		...this.props.list,
		{id: nextId, createdAt: date},
		];
		this.props.changeListDispatch(newList)
	}
	
	addToStart = () => {
		const date = new Date();
		const nextId = this.props.listNumber + 1;
		this.props.changeNumberListDispatch(nextId)
		const newList = [
			{id: nextId, createdAt: date},
			...this.props.list,
		];
		this.props.changeListDispatch(newList)
	}

	deleteItem = ItemId => {
		const sortList = this.props.list.filter(item => item.createdAt !== ItemId
		)
		this.props.changeListDispatch(sortList)
	}

	render() {
		return(
			<Grid container>
				<Grid item xs={12}>
					<SearchField 
						user={this.props.user}
						selectUserDispatch={this.props.selectUserDispatch}/>
				</Grid>
				<Grid item xs={6}>
					Left
				</Grid>
				<Grid item xs={6} style={{backgroundColor: 'red',
				float: 'right'}}>
					<h2>To Do list</h2>
					<DataList 
						list={this.props.list}
						sortByLatest={this.sortByLatest}
						sortByEarliest={this.sortByEarliest}
						addToStart={this.addToStart}
						addToEnd={this.addToEnd}
						deleteItem={this.deleteItem}/>
				</Grid>
			</Grid>
			)
	}
} 
	


	export default Exercices