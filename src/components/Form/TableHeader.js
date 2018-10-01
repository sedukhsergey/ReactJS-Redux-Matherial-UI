import React from 'react'
import Typography from '@material-ui/core/Typography'

const TableHeader = props =>
	<thead>
		<tr>
			<th>
				<Typography variant='title'>
					Num
				</Typography>
			</th>
			<th>
				<Typography variant='title'>
					Delete
				</Typography>
			</th>
			<th>
				<Typography variant='title'>
					Created at
				</Typography>
			</th>
		</tr>
	</thead>

	export default TableHeader