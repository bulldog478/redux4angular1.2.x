export const GET_INIT_SELECT = "GET_INIT_SELECT"
export const GET_RELATE_SELECT = "GET_RELATE_SELECT"

function getInitSelect(data) {
	return {
		type: GET_INIT_SELECT,
		payload: JSON.parse(data.data)
	}
}

function getRelateSelect(data) {
	return {
		type: GET_RELATE_SELECT,
		payload: JSON.parse(data.data)
	}
}

export {
	getInitSelect,
	getRelateSelect
}