'use strict';

/**
 * @ngdoc function
 * @name yellowFlyersApp.controller:IntroCtrl
 * @description
 * # IntroCtrl
 * Controller of the yellowFlyersApp
 */
angular.module('yellowFlyersApp').controller('IntroCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

	$scope.go = function(path){
		$location.path(path);
		$rootScope.$broadcast('routeChange');
	};

}]);
