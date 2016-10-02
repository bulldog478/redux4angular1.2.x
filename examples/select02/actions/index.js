import {
	getInitSelect,
	getRelateSelect
} from '../actionCreators'

function request(url='/v1/rest/data/init', body = {}) {
	return (actionCreator)=> {
			return (dispatch, getState) => {
			fetch(url)
			.then(response=>{
				return response.json()
			},{
				method:'GET',
				body:JSON.stringify(body)
			})
			.then(result=>{
				dispatch(actionCreator(result))
			})
		}
	}
	
}

export function getInitItems() {
	return (dispatch, getState) => {
		request()(getInitSelect)(dispatch,getState)
	}
}

export function getRelateItems(data) {
	if(!data) return
	return (dispatch, getState) => {
		request('/v1/rest/data/relate',{selected:data})(getRelateSelect)(dispatch, getState)
	}
}