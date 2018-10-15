import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { UploadButton, Items, FooterDataList } from './'

const styles = {
	root: {
		flexGrow: 1,
	},
}


class Main extends Component {

componentDidMount() {
	this.props.getItemsPhotoDispatch()
	this.props.getNewItemsPhotoInStoreDispatch()
}

componentWillReceiveProps(nextProps) {
  if(nextProps.itemsPhoto !== this.props.itemsPhoto) {
    this.props.displayItemsPhotoDispatch(nextProps.itemsPhoto)
  }
}

	render() {
		const { classes } = this.props
		return(
			<div className={classes.root}>
				<Items
					itemsPhotoDisplay={this.props.itemsPhotoDisplay}/>
				<UploadButton 
					getNewItemsPhotoInStoreDispatch={this.props.getNewItemsPhotoInStoreDispatch}
					itemsPhotoDisplay={this.props.itemsPhotoDisplay}
					displayItemsPhotoDispatch={this.props.displayItemsPhotoDispatch}
					newPhotos={this.props.newPhotos}
					/>
				<FooterDataList />
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
	getNewItemsPhotoInStoreDispatch: PropTypes.func.isRequired,
}

export default withStyles(styles)(Main)