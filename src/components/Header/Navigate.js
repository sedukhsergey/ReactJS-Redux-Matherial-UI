import React, { Fragment } from 'react'
import  { withStyles, IconButton, Menu, MenuItem } from '@material-ui/core/'
import MenuButton from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const styles = {
	root: {
		textDecoration: 'none',
		width: '100%',
    height: '40px',
	},
	link: {
		position: 'absolute ',
	},
	menuButton: {
		marginLeft: -18,
		marginRight: 10,
	},
}

const Navigate = props =>{
	const { classes } = props
	console.log('---',props)
	return (
		<Fragment>
			<IconButton 
				className={classes.menuButton}
				color='inherit' 
				aria-label='Menu'
				onClick={props.handleOpenMenu}>
				<MenuButton/>
			</IconButton>
			<Menu
				anchorEl={props.anchorEl}
				open={props.isOpen}
				onClose={props.handleCloseMenu}>
					<MenuItem onClick={props.handleCloseMenu}>
						<Link 
							to='/' 
							className={classes.root}>Home</Link>
					</MenuItem>
					<MenuItem onClick={props.handleCloseMenu}>
						<Link 
							to='/exercices' 
							className={classes.root}>Exercices</Link>
					</MenuItem>
					<MenuItem onClick={props.handleCloseMenu}>
						<Link 
							to='/event_list'
							className={classes.root}>EventList</Link>
					</MenuItem>
			</Menu>
		</Fragment>
			)
}

Navigate.proptypes = {
	anchorEl: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired,
	handleOpenMenu: PropTypes.func.isRequired,
	handleCloseMenu: PropTypes.func.isRequired,
}

export default withStyles(styles)(Navigate)