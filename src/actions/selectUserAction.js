import { SELECT_USER } from '../constants/constants.js'

export const selectUserAction = (payload) => {
	return {
		type: SELECT_USER,
		payload
	}
}