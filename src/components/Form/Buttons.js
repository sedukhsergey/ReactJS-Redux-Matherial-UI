import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles/'
import { Typography } from '@material-ui/core/'
const styles = theme => ({
  button: {
    margin:'4px',
  },
  right: {
  	float: 'right'
  },
  left: {
  	float: 'left'
  }
});

const Buttons = props =>{
	const { classes } = props
	return (
		<Fragment>
			<Typography variant="display1" style={{textAlign: 'center'}} >
				To do list
			</Typography>
			<Grid item xs={4} className={classes.left}>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={props.addToStart}>
						Add New to Start
				</Button>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={props.addToEnd}>
						Add New to End
				</Button>
			</Grid>
			<Grid item xs={4} className={classes.right}>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={props.sortByEarliest}>
						Sort by Earliest
				</Button>
				<Button
					color='primary'
					variant='contained'
					className={classes.button}
					onClick={props.sortByLatest}>
						Sort by Latest
				</Button>
			</Grid>
		</Fragment>
	)
}


Buttons.propTypes = {
	addToStart: PropTypes.func.isRequired,
	addToEnd: PropTypes.func.isRequired,
	sortByEarliest: PropTypes.func.isRequired,
	sortByLatest: PropTypes.func.isRequired,
}
export default withStyles(styles)(Buttons)