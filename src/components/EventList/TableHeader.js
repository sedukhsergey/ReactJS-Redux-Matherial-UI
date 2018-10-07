import React from 'react'
import Typography from '@material-ui/core/Typography'

const TableHeader = props =>
		<tr>
			<th>
				<Typography variant='title'>
					Num
				</Typography>
			</th>
			<th>
				<Typography variant='title'>
					Event Field
				</Typography>
			</th>
			<th>
				<Typography variant='title'>
					Event
				</Typography>
			</th>
			<th>
				<Typography variant='title'>
					Created at
				</Typography>
			</th>
			<th>
				<Typography variant='title'>
					Delete item
				</Typography>
			</th>
		</tr>

	export default TableHeader