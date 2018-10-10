import React from 'react'
import { CardActionArea } from '@material-ui/core'
import { ItemContentHead, ItemContentBody } from './'


const ItemContent = props =>
	<CardActionArea>
		<ItemContentHead />
		<ItemContentBody />
	</CardActionArea>

export default ItemContent