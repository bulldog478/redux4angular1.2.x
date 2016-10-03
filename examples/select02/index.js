import ngRedux from 'ng-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import app from './containers'
require('es6-promise').polyfill()
import 'isomorphic-fetch'

angular.module('app', ["ngRedux","mgcrea.ngStrap","ngSanitize"])
.config(function($ngReduxProvider){
	$ngReduxProvider.createStoreWith(rootReducer,[thunk])
})
.directive('ngrApp',app)