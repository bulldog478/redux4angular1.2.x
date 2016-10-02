import {
	combineReducers
} from 'redux'

import {
	GET_INIT_SELECT,
	GET_RELATE_SELECT
} from '../actionCreators'
function initSelectItems(state = [], action) {
	switch(action.type) {
		case GET_INIT_SELECT:
			return action.payload
		default:
			return state
	}
}

function relateSelectItems(state = [], action) {
	switch(action.type) {
		case GET_RELATE_SELECT:
			return action.payload
		default:
			return state
	}
}

const rootReducer = combineReducers({
	initSelectItems,
	relateSelectItems
})

export default rootReducer