import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles/'
import { Typography } from '@material-ui/core/'

const styles = {
  button: {
    margin:'4px',
  },
  right: {
  	float: 'right'
  },
  left: {
  	float: 'left'
  }
};

const Buttons = props =>{
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
		{id: nextId, createdAt: date, event: ''},
		];
		props.changeListDispatch(newList)
	}
	
	const addToStart = () => {
		const date = new Date();
		const nextId = props.listNumber + 1;
		props.changeNumberListDispatch(nextId)
		const newList = [
			{id: nextId, createdAt: date, event: ''},
			...props.list,
		];
		props.changeListDispatch(newList)
	}
	const { classes } = props
	return (
		<Fragment>
			<Typography variant="display1" style={{textAlign: 'center'}} >
				To do list
			</Typography>
			<Grid item xs={6} className={classes.left}>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={addToStart}>
						Add New to Start
				</Button>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={addToEnd}>
						Add New to End
				</Button>
			</Grid>
			<Grid item xs={6} className={classes.right}>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={sortByEarliest}>
						Sort by Earliest
				</Button>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={sortByLatest}>
						Sort by Latest
				</Button>
			</Grid>
		</Fragment>
	)
}


Buttons.propTypes = {
	changeListDispatch: PropTypes.func.isRequired,
	listNumber: PropTypes.number.isRequired,
	changeNumberListDispatch: PropTypes.func.isRequired,
	list: PropTypes.array.isRequired,
}
export default withStyles(styles)(Buttons)