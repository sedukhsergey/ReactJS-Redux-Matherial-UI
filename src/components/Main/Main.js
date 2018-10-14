import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { UploadButton, Items } from './'

const styles = {
	root: {
		flexGrow: 1,
	},
}

class Main extends Component {

componentDidMount() {
	this.props.getItemsPhotoDispatch()
	this.props.getItemsPhotoNewDispatch()
}

componentWillReceiveProps(nextProps) {
  if(nextProps.itemsPhoto !== this.props.itemsPhoto) {
    this.props.displayItemsPhotoDispatch(nextProps.itemsPhoto)
  }
}

	render() {
		console.log('Main',this.props)
		const { classes } = this.props
		return(
			<div className={classes.root}>
				<Items
					itemsPhotoDisplay={this.props.itemsPhotoDisplay}/>
				<UploadButton 
						getItemsPhotoNewDispatch={this.props.getItemsPhotoNewDispatch}
						itemsPhotoDisplay={this.props.itemsPhotoDisplay}
						displayItemsPhotoDispatch={this.props.displayItemsPhotoDispatch}
						newPhotos={this.props.newPhotos}
						/>
			</div>
			)
	}
}


Main.propTypes = {
	classes: PropTypes.object.isRequired,
	getItemsPhotoDispatch: PropTypes.func.isRequired,
	itemsPhoto: PropTypes.array.isRequired,
	itemsPhotoDisplay: PropTypes.array.isRequired,
	displayItemsPhotoDispatch: PropTypes.func.isRequired,
	newPhotos: PropTypes.array.isRequired,
	getItemsPhotoNewDispatch: PropTypes.func.isRequired,
}

export default withStyles(styles)(Main)



// class Main extends Component {

// componentDidMount() {
// 	this.props.getItemsPhotoDispatch()
// 	this.props.getItemsPhotoNewDispatch()
// }

// componentWillReceiveProps(nextProps) {
//   if(nextProps.itemsPhoto !== this.props.itemsPhoto) {
//     this.props.displayItemsPhotoDispatch(nextProps.itemsPhoto)
//   }
// }

// 	render() {
// 		console.log('Main',this.props)
// 		const { classes } = this.props
// 		return(
// 			<div className={classes.root}>
// 				<Items
// 					itemsPhotoDisplay={this.props.itemsPhotoDisplay}/>
// 				<UploadButton 
// 						getItemsPhotoNewDispatch={this.props.getItemsPhotoNewDispatch}
// 						itemsPhotoDisplay={this.props.itemsPhotoDisplay}
// 						displayItemsPhotoDispatch={this.props.displayItemsPhotoDispatch}
// 						newPhotos={this.props.newPhotos}
// 						/>
// 			</div>
// 			)
// 	}
// }


// Main.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	getItemsPhotoDispatch: PropTypes.func.isRequired,
// 	itemsPhoto: PropTypes.array.isRequired,
// 	itemsPhotoDisplay: PropTypes.array.isRequired,
// 	displayItemsPhotoDispatch: PropTypes.func.isRequired,
// 	newPhotos: PropTypes.array.isRequired,
// 	getItemsPhotoNewDispatch: PropTypes.func.isRequired,
// }

// export default withStyles(styles)(Main)
