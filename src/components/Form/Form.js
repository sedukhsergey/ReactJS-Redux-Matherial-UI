import React from 'react'

const Form = props => {
	const users = ['Vasya','Petya','Maksim','Egor']
	const getKey = str => {
		let key = 0;
		for (let i = 0; i < str.length; i++) {
			key += str.charCodeAt(i);
		}
		return key
	}
	const items = users.map(user => <li key={getKey(user)}>{user}</li>);
	return (
		<form>
			<ul>
				{items}
			</ul>
		</form>
		)
}
		

	export default Form