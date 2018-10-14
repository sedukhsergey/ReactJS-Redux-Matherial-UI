import React from 'react'
import { CardActionArea } from '@material-ui/core'
import { ItemContentHead, ItemContentBody } from './'
import PropTypes from 'prop-types'

const ItemContent = props =>
	<CardActionArea>
		<ItemContentHead 
			url={props.url}/>
		<ItemContentBody />
	</CardActionArea>

ItemContent.propTypes = {
	url: PropTypes.string.isRequired,
}
export default ItemContent