import { CHANGE_LIST } from '../constants/constants.js'

export const changeListAction = payload => {
	return {
		type: CHANGE_LIST,
		payload
	}
}