angular.module("app" ,  ['mgcrea.ngStrap','ngSanitize'])
.controller("mainCtrl", function($scope) {
	$scope.selectedIcon = "";
	$scope.icons = [{
			value:1,
			label:"xz"
		},
		{
			value:2,
			label:"ky"
		},
		{
			value:3,
			label:"xz and ky"
		}
	]
	$scope.selectedChange = function(data) {
		console.log(data)
	}
})