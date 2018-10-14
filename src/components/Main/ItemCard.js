import React from 'react'
import { Card } from '@material-ui/core'
import { ItemContent, ItemButtons } from './'
import PropTypes from 'prop-types'
const ItemCard = props => 
	<Card>
		<ItemContent 
			url={props.url}/>
		<ItemButtons />
	</Card>

ItemCard.propTypes = {
	url: PropTypes.string.isRequired,
}
export default ItemCard