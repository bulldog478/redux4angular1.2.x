import * as mapDispatchToTarget from '../actions'

export default function() {
	return {
		restrict:'E',
		template:require('./app.html'),
		controller:AppController,
		scope:{}
	}
}

class AppController {
	constructor($scope,$ngRedux){
		var unsubscribe = $ngRedux.connect(this.mapStateToTarget, mapDispatchToTarget)($scope)
		$scope.$on('$destroy',unsubscribe)

		//dispatch 初始化 initSelect
		$scope.getInitItems()

		//dispatch 获取relateSelect
		$scope.initSelectChanged = function(data) {
			this.getRelateItems(data)
		}
	}

	mapStateToTarget(state) { 
		var initSelectItems = state.initSelectItems || []
		var relateSelectItems = state.relateSelectItems || [] 
		return {
			initSelectItems,
			relateSelectItems
		}
	}
}