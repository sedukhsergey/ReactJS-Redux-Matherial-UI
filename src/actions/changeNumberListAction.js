import {CHANGE_COUNTER} from '../constants/constants'

export const changeNumberListAction = payload => {
	return {
		type: CHANGE_COUNTER,
		payload
	}
}