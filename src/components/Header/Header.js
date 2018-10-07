import React, { Component } from 'react'
import  { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core/'
import PropTypes from 'prop-types'
import { Navigate } from './'

const styles = {
	root: {
		padding: '5px',
		backgroundColor: '#2196F3'
	}
}

class Header extends Component {
	
	static propTypes = {
	classes: PropTypes.object.isRequired
	}

	state ={
		isOpen: false,
		anchorEl: null,
	}

	handleOpenMenu = event => {
		let e = event.currentTarget;
		this.setState(() => ({
			isOpen: !this.state.isOpen,
			anchorEl: e,
		}))
	}

	handleCloseMenu = () => {
		this.setState(() => ({
			isOpen: !this.state.isOpen,
			anhcorEl: null,
		}))
	}



	render() {
		const { classes } = this.props
		return (
			<AppBar position="static" className={classes.root}>
				<Toolbar variant='dense'>
				<Navigate 
					isOpen={this.state.isOpen}
					handleOpenMenu={this.handleOpenMenu}
					handleCloseMenu={this.handleCloseMenu}
					anchorEl={this.state.anchorEl}/>
					<Typography 
						variant="headline"
						color="inherit">
						Exercice
					</Typography>
				</Toolbar>
			</AppBar>
			)
	}
}


export default withStyles(styles)(Header)