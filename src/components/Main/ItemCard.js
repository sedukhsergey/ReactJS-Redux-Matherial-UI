import React from 'react'
import { Card } from '@material-ui/core'
import { ItemContent, ItemButtons, ItemPrice } from './'

const ItemCard = props => 
		<Card>
			<ItemContent />
			<ItemButtons />
		</Card>

export default ItemCard