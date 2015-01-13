'use strict';

/* global $:false */

/**
 * @ngdoc directive
 * @name yellowFlyersApp.directive:naviOpen
 * @description
 * # naviOpen
 */
angular.module('yellowFlyersApp').directive('naviOpen', ['$location', function ($location) {

	var link = function($scope){
		var naviOpen = $('.navi-open');


		$scope.go = function(path){
			$location.path(path);
			naviOpen.removeClass('active');

		};
	};


	return {
		templateUrl: 'views/_navi-open.html',
		restrict: 'EA',
		replace: true,
		link: link
	};
}]);
